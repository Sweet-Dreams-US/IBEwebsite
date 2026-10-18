import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionCookieOptions, passwordMatches } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  const opts = getSessionCookieOptions();
  if (!process.env.ADMIN_PASSWORD || !opts) {
    return NextResponse.json({ error: "Admin login not configured" }, { status: 500 });
  }

  if (!passwordMatches(password)) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(opts.name, opts.value, {
    httpOnly: opts.httpOnly,
    secure: opts.secure,
    sameSite: opts.sameSite,
    path: opts.path,
    maxAge: opts.maxAge,
  });

  return NextResponse.json({ success: true });
}
