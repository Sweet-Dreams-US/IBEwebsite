import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { Resend } from "resend";

// =============================================================================
// In-memory rate limiter — 5 requests per IP per hour
// =============================================================================
// Persists across requests within a warm Fluid Compute instance. Cold starts
// reset the map, which is acceptable for spam protection (an attacker would
// have to wait for our function to scale down anyway). For more durable
// rate limiting, swap this for Upstash Redis or a Supabase table.
//
// Layered on top of Cloudflare Turnstile: Turnstile blocks bots, this caps
// abuse from any single IP even if a token-solver service were used.
// =============================================================================

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_MAP_CAP = 10000;

// Maps client IP -> array of submission timestamps within the window.
const requestLog = new Map<string, number[]>();

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const history = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  if (history.length >= RATE_LIMIT_MAX) {
    const oldest = Math.min(...history);
    const retryAfter = Math.ceil(
      (oldest + RATE_LIMIT_WINDOW_MS - now) / 1000,
    );
    return { allowed: false, retryAfter };
  }

  history.push(now);
  requestLog.set(ip, history);

  // Opportunistic cleanup: when the map grows unusually large, prune
  // entries with no recent activity. Keeps memory bounded without a timer.
  if (requestLog.size > RATE_LIMIT_MAP_CAP) {
    for (const [key, times] of requestLog.entries()) {
      if (!times.some((t) => now - t < RATE_LIMIT_WINDOW_MS)) {
        requestLog.delete(key);
      }
    }
  }

  return { allowed: true };
}

function buildEmailHtml(data: {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  productInterest: string;
  products: string;
}) {
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Indiana/Indianapolis",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const rows = [
    { label: "Name", value: data.name },
    { label: "Email", value: `<a href="mailto:${data.email}" style="color:#5F8A9E;text-decoration:none;">${data.email}</a>` },
    { label: "Company", value: data.company },
    { label: "Phone", value: data.phone ? `<a href="tel:${data.phone}" style="color:#5F8A9E;text-decoration:none;">${data.phone}</a>` : "" },
    { label: "Product Interest", value: data.productInterest },
    { label: "Quoted Products", value: data.products },
    { label: "Message", value: data.message },
  ].filter((r) => r.value);

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f2f5f7;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2f5f7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#1C2B36;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:22px;font-weight:700;font-style:italic;color:#ffffff;letter-spacing:2px;">
                Industrial Bakery Equipment
              </h1>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;">
                New Contact Submission
              </p>
            </td>
          </tr>

          <!-- Timestamp -->
          <tr>
            <td style="padding:24px 40px 0;">
              <p style="margin:0;font-size:13px;color:#5A6E78;">
                ${timestamp} (EST)
              </p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:24px 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${rows
                  .map(
                    (r) => `
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#5A6E78;text-transform:uppercase;letter-spacing:0.5px;">
                      ${r.label}
                    </p>
                    <p style="margin:0;font-size:15px;color:#1C2B36;line-height:1.5;">
                      ${r.value}
                    </p>
                  </td>
                </tr>`
                  )
                  .join("")}
              </table>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding:0 40px 32px;text-align:center;">
              <a href="mailto:${data.email}?subject=RE: IBE Inquiry from ${data.name}" style="display:inline-block;padding:14px 36px;background:#C05621;color:#ffffff;text-decoration:none;font-weight:600;border-radius:6px;font-size:14px;letter-spacing:1px;text-transform:uppercase;">
                Reply to ${data.name.split(" ")[0]}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f2f5f7;padding:20px 40px;text-align:center;border-top:1px solid #e8edf0;">
              <p style="margin:0;font-size:12px;color:#5A6E78;">
                This submission was also saved to your <strong>admin dashboard</strong> and Google Sheet.
              </p>
              <p style="margin:8px 0 0;font-size:11px;color:rgba(90,110,120,0.6);">
                industrialbakeryequipment.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  // Rate limit FIRST — cheap rejection before we touch Cloudflare or any
  // downstream service. Defense in depth: even if Turnstile is bypassed,
  // an attacker gets at most 5 hits per hour per IP.
  const ip = getClientIp(request);
  const rate = checkRateLimit(ip);
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: rate.retryAfter
          ? { "Retry-After": String(rate.retryAfter) }
          : {},
      },
    );
  }

  const body = await request.json();
  const { turnstileToken, ...formData } = body;

  // Verify Turnstile token
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: "Turnstile secret key not configured" },
      { status: 500 }
    );
  }

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: turnstileToken || "",
      }),
    }
  );

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return NextResponse.json(
      { error: "Turnstile verification failed" },
      { status: 403 }
    );
  }

  // Save to Supabase contacts table
  try {
    await supabaseAdmin.from("contacts").insert({
      name: formData.name || "",
      email: formData.email || "",
      company: formData.company || "",
      phone: formData.phone || "",
      message: formData.message || "",
      product_interest: formData.productInterest || "",
      products: formData.products || "",
    });
  } catch (err) {
    console.error("Failed to save contact to Supabase:", err);
  }

  // Send email notification via Resend
  console.log("RESEND_API_KEY present:", !!process.env.RESEND_API_KEY);
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const emailResult = await resend.emails.send({
        from: "IBE Website <noreply@industrialbakeryequipment.com>",
        to: ["sales@industrialbakeryequipment.com"],
        replyTo: formData.email || undefined,
        subject: `New Inquiry from ${formData.name || "Website Visitor"}${formData.company ? ` — ${formData.company}` : ""}`,
        html: buildEmailHtml({
          name: formData.name || "",
          email: formData.email || "",
          company: formData.company || "",
          phone: formData.phone || "",
          message: formData.message || "",
          productInterest: formData.productInterest || "",
          products: formData.products || "",
        }),
      });
      console.log("Resend result:", JSON.stringify(emailResult));
    } catch (err) {
      console.error("Failed to send email via Resend:", err);
    }
  }

  // Forward to Google Sheets
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.log("Form data (Google Script URL not configured):", formData);
    return NextResponse.json({ status: "success" });
  }

  try {
    await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
    });

    return NextResponse.json({ status: "success" });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit to Google Sheets" },
      { status: 500 }
    );
  }
}
