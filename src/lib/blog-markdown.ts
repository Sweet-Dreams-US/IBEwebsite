/**
 * Small markdown reader for blog post bodies. It reads what the post format
 * uses: `##` and `###` headings, paragraphs, `-` and `1.` lists, `>` quotes,
 * images, `:::tip Title` and `:::note Title` callouts, and **bold**, *italic*,
 * `code` and [links](url) inside text. It returns plain data. The React side
 * decides how every piece looks.
 */

export type Inline =
  | { t: "text"; v: string }
  | { t: "strong"; c: Inline[] }
  | { t: "em"; c: Inline[] }
  | { t: "code"; v: string }
  | { t: "link"; href: string; c: Inline[] };

export type Block =
  | { t: "h2"; id: string; text: string }
  | { t: "h3"; id: string; text: string }
  | { t: "p"; c: Inline[] }
  | { t: "list"; ordered: boolean; items: Inline[][] }
  | { t: "quote"; c: Inline[] }
  | { t: "img"; src: string; alt: string }
  | { t: "callout"; kind: "tip" | "note"; title: string; body: Block[] };

const INLINE_PATTERN =
  /\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)|\*\*([^*]+?)\*\*|\*([^*\s][^*]*?)\*|(?<![\w])_([^_\s][^_]*?)_(?![\w])|`([^`]+)`/g;

export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  const re = new RegExp(INLINE_PATTERN.source, "g");
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ t: "text", v: text.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ t: "link", href: m[2], c: parseInline(m[1]) });
    else if (m[3] !== undefined) out.push({ t: "strong", c: parseInline(m[3]) });
    else if (m[4] !== undefined) out.push({ t: "em", c: parseInline(m[4]) });
    else if (m[5] !== undefined) out.push({ t: "em", c: parseInline(m[5]) });
    else if (m[6] !== undefined) out.push({ t: "code", v: m[6] });
    last = re.lastIndex;
  }
  if (last < text.length) out.push({ t: "text", v: text.slice(last) });
  return out;
}

export function slugifyHeading(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}

const HEADING = /^(#{2,6})\s+(.*?)\s*#*\s*$/;
const CALLOUT_OPEN = /^:::\s*(tip|note)\b\s*(.*)$/i;
const CALLOUT_CLOSE = /^:::\s*$/;
const BULLET = /^\s*[-*+]\s+(.*)$/;
const NUMBERED = /^\s*\d+[.)]\s+(.*)$/;
const IMAGE_ONLY = /^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)\s*$/;

const startsBlock = (line: string) =>
  HEADING.test(line) ||
  CALLOUT_OPEN.test(line.trim()) ||
  CALLOUT_CLOSE.test(line.trim()) ||
  BULLET.test(line) ||
  NUMBERED.test(line) ||
  /^>\s?/.test(line) ||
  IMAGE_ONLY.test(line.trim());

function stripInlineMarks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`]/g, "");
}

export function parseBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const seen = new Map<string, number>();
  const uniqueId = (text: string) => {
    const base = slugifyHeading(stripInlineMarks(text));
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    return n === 0 ? base : `${base}-${n + 1}`;
  };

  function run(start: number, stop: (line: string) => boolean): [Block[], number] {
    const blocks: Block[] = [];
    let i = start;
    while (i < lines.length && !stop(lines[i])) {
      const line = lines[i];
      if (!line.trim()) {
        i++;
        continue;
      }

      const heading = line.match(HEADING);
      if (heading) {
        const text = stripInlineMarks(heading[2]);
        blocks.push({ t: heading[1].length === 2 ? "h2" : "h3", id: uniqueId(text), text });
        i++;
        continue;
      }

      const callout = line.trim().match(CALLOUT_OPEN);
      if (callout) {
        const [body, next] = run(i + 1, (l) => CALLOUT_CLOSE.test(l.trim()));
        blocks.push({
          t: "callout",
          kind: callout[1].toLowerCase() as "tip" | "note",
          title: stripInlineMarks(callout[2].trim()),
          body,
        });
        i = next < lines.length ? next + 1 : next;
        continue;
      }

      const img = line.trim().match(IMAGE_ONLY);
      if (img) {
        blocks.push({ t: "img", alt: img[1], src: img[2] });
        i++;
        continue;
      }

      if (BULLET.test(line) || NUMBERED.test(line)) {
        const ordered = NUMBERED.test(line);
        const marker = ordered ? NUMBERED : BULLET;
        const items: Inline[][] = [];
        while (i < lines.length) {
          const item = lines[i].match(marker);
          if (item) {
            let text = item[1];
            i++;
            while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !BULLET.test(lines[i]) && !NUMBERED.test(lines[i])) {
              text += " " + lines[i].trim();
              i++;
            }
            items.push(parseInline(text));
          } else if (!lines[i].trim() && i + 1 < lines.length && marker.test(lines[i + 1])) {
            i++;
          } else {
            break;
          }
        }
        blocks.push({ t: "list", ordered, items });
        continue;
      }

      if (/^>\s?/.test(line)) {
        const buf: string[] = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          buf.push(lines[i].replace(/^>\s?/, ""));
          i++;
        }
        blocks.push({ t: "quote", c: parseInline(buf.join(" ")) });
        continue;
      }

      const buf: string[] = [line.trim()];
      i++;
      while (i < lines.length && lines[i].trim() && !startsBlock(lines[i])) {
        buf.push(lines[i].trim());
        i++;
      }
      blocks.push({ t: "p", c: parseInline(buf.join(" ")) });
    }
    return [blocks, i];
  }

  return run(0, () => false)[0];
}

export function headingsOf(blocks: Block[]): { id: string; title: string }[] {
  return blocks.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2").map((b) => ({ id: b.id, title: b.text }));
}
