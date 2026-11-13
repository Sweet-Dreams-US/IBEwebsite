import type { ReactNode } from "react";
import { imageUrlIfPresent } from "@/lib/blog";
import type { Block, Inline } from "@/lib/blog-markdown";

/** Where a link inside a post is allowed to go. Anything else is shown as plain text. */
function safeHref(href: string): string | null {
  const h = href.trim();
  // The site's contact form lives on the home page, so a post link to /contact goes there.
  if (/^\/contact\/?(?:[?#].*)?$/i.test(h)) return "/#contact";
  if (/^(\/|#|https?:\/\/|mailto:|tel:)/i.test(h)) return h;
  return null;
}

const isExternal = (href: string) => /^https?:\/\//i.test(href);

function inlineText(nodes: Inline[]): string {
  return nodes
    .map((n) => (n.t === "text" || n.t === "code" ? n.v : inlineText(n.c)))
    .join("");
}

function renderInline(nodes: Inline[]): ReactNode[] {
  return nodes.map((n, i) => {
    switch (n.t) {
      case "text":
        return n.v;
      case "strong":
        return <strong key={i}>{renderInline(n.c)}</strong>;
      case "em":
        return <em key={i}>{renderInline(n.c)}</em>;
      case "code":
        return <code key={i}>{n.v}</code>;
      case "link": {
        const href = safeHref(n.href);
        if (!href) return <span key={i}>{renderInline(n.c)}</span>;
        return isExternal(href) ? (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">
            {renderInline(n.c)}
          </a>
        ) : (
          <a key={i} href={href}>
            {renderInline(n.c)}
          </a>
        );
      }
    }
  });
}

interface TipButton {
  href: string;
  label: string;
}

/**
 * Pulls the links out of a tip's text. A link that ends a paragraph becomes a
 * button under the tip and leaves the sentence. A link in the middle of a
 * sentence stays as plain words and also gets a button.
 */
function splitTipLinks(body: Block[]): { body: Block[]; buttons: TipButton[] } {
  const buttons: TipButton[] = [];
  const add = (href: string, label: string) => {
    const safe = safeHref(href);
    if (safe && label.trim() && !buttons.some((b) => b.href === safe)) buttons.push({ href: safe, label: label.trim() });
  };

  const clean = (nodes: Inline[]): Inline[] => {
    const out: Inline[] = [];
    nodes.forEach((n, idx) => {
      if (n.t !== "link") {
        out.push(n);
        return;
      }
      add(n.href, inlineText(n.c));
      const rest = nodes.slice(idx + 1);
      const trailing = rest.every((r) => r.t === "text" && !r.v.trim());
      if (!trailing) out.push(...n.c);
    });
    const last = out[out.length - 1];
    if (last && last.t === "text") out[out.length - 1] = { t: "text", v: last.v.replace(/\s+$/, "") };
    return out.filter((n) => !(n.t === "text" && n.v === ""));
  };

  const next: Block[] = [];
  for (const b of body) {
    if (b.t === "p") {
      const c = clean(b.c);
      if (c.length) next.push({ t: "p", c });
    } else if (b.t === "list") {
      next.push({ ...b, items: b.items.map(clean) });
    } else {
      next.push(b);
    }
  }
  return { body: next, buttons };
}

function renderBlocks(blocks: Block[], images: Map<string, string>, keyPrefix = ""): ReactNode[] {
  return blocks.map((b, i) => {
    const key = `${keyPrefix}${i}`;
    switch (b.t) {
      case "h2":
        return (
          <h2 key={key} id={b.id}>
            {b.text}
          </h2>
        );
      case "h3":
        return (
          <h3 key={key} id={b.id}>
            {b.text}
          </h3>
        );
      case "p":
        return <p key={key}>{renderInline(b.c)}</p>;
      case "list": {
        const items = b.items.map((it, j) => <li key={j}>{renderInline(it)}</li>);
        return b.ordered ? <ol key={key}>{items}</ol> : <ul key={key}>{items}</ul>;
      }
      case "quote":
        return <blockquote key={key}>{renderInline(b.c)}</blockquote>;
      case "img": {
        const src = images.get(b.src);
        if (!src) return null;
        return (
          <figure key={key}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={b.alt} loading="lazy" />
          </figure>
        );
      }
      case "callout": {
        const isTip = b.kind === "tip";
        const { body, buttons } = isTip ? splitTipLinks(b.body) : { body: b.body, buttons: [] as TipButton[] };
        return (
          <aside key={key} className={`ibe-callout ibe-callout--${b.kind}`}>
            <div className="ibe-callout__label">{isTip ? "Tip" : "Note"}</div>
            {b.title && <p className="ibe-callout__title">{b.title}</p>}
            <div className="ibe-callout__body">{renderBlocks(body, images, `${key}-`)}</div>
            {buttons.length > 0 && (
              <div className="ibe-callout__actions">
                {buttons.map((btn) =>
                  isExternal(btn.href) ? (
                    <a key={btn.href} className="ibe-btn" href={btn.href} target="_blank" rel="noopener noreferrer">
                      {btn.label}
                    </a>
                  ) : (
                    <a key={btn.href} className="ibe-btn" href={btn.href}>
                      {btn.label}
                    </a>
                  ),
                )}
              </div>
            )}
          </aside>
        );
      }
    }
  });
}

function collectImages(blocks: Block[], into: string[] = []): string[] {
  for (const b of blocks) {
    if (b.t === "img") into.push(b.src);
    else if (b.t === "callout") collectImages(b.body, into);
  }
  return into;
}

export default async function BlogBody({ blocks }: { blocks: Block[] }) {
  // Images are served from content/blog/images. A missing file is left out, never a broken box.
  const images = new Map<string, string>();
  await Promise.all(
    collectImages(blocks).map(async (src) => {
      const url = await imageUrlIfPresent(src);
      if (url) images.set(src, url);
    }),
  );
  return <>{renderBlocks(blocks, images)}</>;
}
