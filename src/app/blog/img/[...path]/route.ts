import { readFile } from "node:fs/promises";
import { getReleasedPosts, resolveImagePath } from "@/lib/blog";

// Serves post images from content/blog/images/<slug>/. Only for released posts.
export const dynamic = "force-dynamic";

const TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  avif: "image/avif",
};

export async function GET(_req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  const { path: parts } = await ctx.params;
  const file = resolveImagePath(parts.join("/"));
  const slug = parts[0];
  if (!file || !(await getReleasedPosts()).some((p) => p.slug === slug)) {
    return new Response("Not found", { status: 404 });
  }
  try {
    const data = await readFile(file);
    const ext = file.split(".").pop()!.toLowerCase();
    return new Response(new Uint8Array(data), {
      headers: {
        "Content-Type": TYPES[ext] ?? "application/octet-stream",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
