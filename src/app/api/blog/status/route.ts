import { NextResponse } from "next/server";
import { hasReleasedPosts } from "@/lib/blog";

/**
 * Whether the site navigation shows the Blog link: true once at least one
 * post has released. Read on request (a few small files), so the link
 * appears and disappears without a deploy. The CDN may keep an answer for a
 * few minutes.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    { hasBlog: await hasReleasedPosts() },
    { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=300" } },
  );
}
