import { createHmac, timingSafeEqual, createHash } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "ibe_admin_session";
const SESSION_SECONDS = 60 * 60 * 24; // 24 hours

// The session cookie is `<expiry>.<hmac>`, signed with ADMIN_SESSION_SECRET,
// so it can't be forged by setting the cookie by hand.
function sign(expiry: string): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return null;
  return createHmac("sha256", secret).update(expiry).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

/** Constant-time check of a submitted password against ADMIN_PASSWORD. */
export function passwordMatches(candidate: unknown): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  return typeof candidate === "string" && Boolean(expected) && safeEqual(candidate, expected!);
}

export async function verifyAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;
  if (!value) return false;
  const [expiry, signature] = value.split(".");
  const expected = expiry ? sign(expiry) : null;
  if (!expected || !signature || !safeEqual(signature, expected)) return false;
  return Number(expiry) > Math.floor(Date.now() / 1000);
}

/** Cookie options for a fresh admin session, or null if signing isn't configured. */
export function getSessionCookieOptions() {
  const expiry = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  const signature = sign(expiry);
  if (!signature) return null;
  return {
    name: COOKIE_NAME,
    value: `${expiry}.${signature}`,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_SECONDS,
  };
}

export function getClearCookieOptions() {
  return {
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 0,
  };
}
