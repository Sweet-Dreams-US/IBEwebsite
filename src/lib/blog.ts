import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";

/**
 * Blog posts are markdown files in content/blog (YYYY-MM-DD-slug.md). The
 * Sweet Dreams publishing routine puts them there. This module only reads
 * them and decides which ones are visible. Nothing is written in code.
 *
 * A post is visible on and after its release_on date, in Fort Wayne time.
 * Pages that call this revalidate hourly (see their `revalidate` export), so a
 * post appears on its date without a deploy.
 */

export const BLOG_DIR = path.join(process.cwd(), "content", "blog");
export const SITE_URL = "https://www.industrialbakeryequipment.com";
const TIME_ZONE = "America/Indiana/Indianapolis";

export interface BlogSource {
  title: string;
  author?: string;
  url: string;
}

export interface BlogPost {
  postId: string;
  seq: number;
  title: string;
  slug: string;
  /** YYYY-MM-DD. Compared as a plain string with today's Fort Wayne date. */
  releaseOn: string;
  description: string;
  readingMinutes: number;
  coverImage?: string;
  sources: BlogSource[];
  /** Markdown after the front matter block. */
  body: string;
}

/** Today in Fort Wayne as YYYY-MM-DD. */
export function todayInFortWayne(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function isReleased(post: Pick<BlogPost, "releaseOn">, today = todayInFortWayne()): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(post.releaseOn) && post.releaseOn <= today;
}

export function formatReleaseDate(releaseOn: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${releaseOn}T00:00:00Z`));
}

/* ------------------------------------------------------------ front matter */

type FrontValue = string | Record<string, string>[];

/** Reads the fixed front matter shape: plain `key: value` lines plus the `sources` list of maps. */
function readFrontMatter(raw: string): Record<string, FrontValue> {
  const out: Record<string, FrontValue> = {};
  const lines = raw.split("\n");
  const unquote = (v: string) => v.trim().replace(/^(["'])(.*)\1$/, "$2");

  for (let i = 0; i < lines.length; i++) {
    const head = lines[i].match(/^([A-Za-z_][\w]*):\s*(.*)$/);
    if (!head) continue;
    const [, key, value] = head;
    if (value.trim() !== "") {
      out[key] = unquote(value);
      continue;
    }
    const items: Record<string, string>[] = [];
    let current: Record<string, string> | null = null;
    while (i + 1 < lines.length && /^\s+\S/.test(lines[i + 1])) {
      i++;
      const line = lines[i];
      const start = line.match(/^\s*-\s*([A-Za-z_][\w]*):\s*(.*)$/);
      const more = line.match(/^\s+([A-Za-z_][\w]*):\s*(.*)$/);
      if (start) {
        current = { [start[1]]: unquote(start[2]) };
        items.push(current);
      } else if (more && current) {
        current[more[1]] = unquote(more[2]);
      }
    }
    out[key] = items;
  }
  return out;
}

function toPost(file: string, raw: string): BlogPost | null {
  const text = raw.replace(/\r\n/g, "\n");
  const m = text.match(/^---\n([\s\S]*?)\n---[ \t]*(?:\n([\s\S]*))?$/);
  if (!m) {
    console.error(`[blog] ${file}: no front matter, skipped`);
    return null;
  }
  const fm = readFrontMatter(m[1]);
  const str = (k: string) => (typeof fm[k] === "string" ? (fm[k] as string).trim() : "");

  const postId = str("post_id");
  const title = str("title");
  const slug = str("slug");
  if (!postId || !title || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    console.error(`[blog] ${file}: missing post_id, title or a valid slug, skipped`);
    return null;
  }

  const body = (m[2] ?? "").trim();
  const words = body.split(/\s+/).filter(Boolean).length;
  const sources = Array.isArray(fm.sources)
    ? fm.sources
        .filter((s) => s.title && /^https?:\/\//i.test(s.url ?? ""))
        .map((s) => ({ title: s.title, author: s.author || undefined, url: s.url }))
    : [];

  return {
    postId,
    seq: Number(str("seq")) || 0,
    title,
    slug,
    releaseOn: str("release_on"),
    description: str("description"),
    readingMinutes: Number(str("reading_minutes")) || Math.max(1, Math.round(words / 200)),
    coverImage: str("cover_image") || undefined,
    sources,
    body,
  };
}

async function readAllPosts(): Promise<BlogPost[]> {
  let files: string[];
  try {
    files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
  const parsed = await Promise.all(
    files.map(async (file) => toPost(file, await readFile(path.join(BLOG_DIR, file), "utf8"))),
  );
  // One post per post_id. A dated copy wins over an undated one.
  const byId = new Map<string, BlogPost>();
  for (const p of parsed) {
    if (!p) continue;
    const seen = byId.get(p.postId);
    if (!seen || (!seen.releaseOn && p.releaseOn)) byId.set(p.postId, p);
  }
  return [...byId.values()];
}

/** Released posts only, newest first (same day: higher seq first). */
export async function getReleasedPosts(): Promise<BlogPost[]> {
  const today = todayInFortWayne();
  const posts = (await readAllPosts()).filter((p) => isReleased(p, today));
  return posts.sort((a, b) =>
    a.releaseOn === b.releaseOn ? b.seq - a.seq : a.releaseOn < b.releaseOn ? 1 : -1,
  );
}

/** One released post, or null (a 404) before its date or when it does not exist. */
export async function getReleasedPost(slug: string): Promise<BlogPost | null> {
  return (await getReleasedPosts()).find((p) => p.slug === slug) ?? null;
}

export async function hasReleasedPosts(): Promise<boolean> {
  return (await getReleasedPosts()).length > 0;
}

/* ------------------------------------------------------------------ images */

const IMAGE_ROOT = path.join(BLOG_DIR, "images");

/** Turns a front matter or markdown image path into a path under content/blog/images, or null. */
export function resolveImagePath(src: string): string | null {
  const clean = src
    .trim()
    .replace(/^\/+/, "")
    .replace(/^(?:\.\/)?(?:content\/blog\/|blog\/img\/)?(?:images\/)?/, "");
  const full = path.resolve(IMAGE_ROOT, clean);
  if (!full.startsWith(IMAGE_ROOT + path.sep)) return null;
  if (!/\.(jpe?g|png|webp|gif|avif)$/i.test(full)) return null;
  return full;
}

/** Public URL for an image of a post, or undefined when the file is not on disk. */
export async function imageUrlIfPresent(src?: string): Promise<string | undefined> {
  if (!src) return undefined;
  const full = resolveImagePath(src);
  if (!full) return undefined;
  try {
    await access(full);
  } catch {
    return undefined;
  }
  return `/blog/img/${path.relative(IMAGE_ROOT, full).split(path.sep).join("/")}`;
}
