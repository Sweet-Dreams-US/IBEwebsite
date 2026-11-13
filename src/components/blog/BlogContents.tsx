"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface ContentsSection {
  id: string;
  title: string;
}

interface BlogContentsProps {
  sections: ContentsSection[];
  /** id of the element that wraps the article text, used to measure reading progress. */
  articleId: string;
}

/**
 * Table of contents for a post. On wide screens it is a small panel fixed in
 * the top right corner. On everything else it is a bar fixed to the bottom
 * that shows the current section and opens the full list. Both show how far
 * the reader is and mark the section being read. Both leave the screen once
 * the article has been read to the end, so they never sit on the footer.
 */
export default function BlogContents({ sections, articleId }: BlogContentsProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);
  const frame = useRef(0);

  const measure = useCallback(() => {
    const article = document.getElementById(articleId);
    if (!article) return;
    const box = article.getBoundingClientRect();
    const vh = window.innerHeight;
    const line = vh * 0.35; // the reading line, measured from the top of the screen

    setProgress(box.height > 0 ? Math.min(1, Math.max(0, (line - box.top) / box.height)) : 0);

    let current = sections[0]?.id ?? "";
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= line) current = s.id;
      else break;
    }
    setActiveId(current);

    // Visible while the article is on screen. Gone once its end clears the bottom edge.
    const visible = box.top < vh * 0.85 && box.bottom > vh - 64;
    setShown(visible);
    if (!visible) setOpen(false);
  }, [articleId, sections]);

  useEffect(() => {
    const onChange = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(measure);
    };
    onChange();
    window.addEventListener("scroll", onChange, { passive: true });
    window.addEventListener("resize", onChange);
    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, [measure]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const jump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    try {
      history.replaceState(null, "", `#${id}`);
    } catch {
      /* the hash is only a convenience */
    }
    setOpen(false);
  };

  if (sections.length === 0) return null;

  const percent = Math.round(progress * 100);
  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <>
      {/* Desktop: a panel in the corner that stays in view */}
      <nav className="ibe-toc-panel" aria-label="Table of contents" data-hidden={!shown}>
        <div className="ibe-toc-head">
          <span>In this article</span>
          <span>{percent}% read</span>
        </div>
        <div className="ibe-toc-track" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
          <div className="ibe-toc-fill" style={{ width: `${percent}%` }} />
        </div>
        <ul className="ibe-toc-list">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} aria-current={s.id === active.id ? "true" : undefined} onClick={(e) => jump(e, s.id)}>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: a bar fixed to the bottom, the arrow opens the full contents */}
      {open && shown && <div className="ibe-toc-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
      <div className="ibe-toc-bar" data-hidden={!shown}>
        {open && (
          <nav id="ibe-toc-sheet" className="ibe-toc-sheet" aria-label="Table of contents">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} aria-current={s.id === active.id ? "true" : undefined} onClick={(e) => jump(e, s.id)}>
                {s.title}
              </a>
            ))}
          </nav>
        )}
        <div className="ibe-toc-bar__track" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
          <div className="ibe-toc-fill" style={{ width: `${percent}%` }} />
        </div>
        <button
          type="button"
          className="ibe-toc-bar__row"
          aria-expanded={open}
          aria-controls="ibe-toc-sheet"
          aria-label={open ? "Close contents" : "Open contents"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="ibe-toc-bar__text">
            <span className="ibe-toc-bar__label">Now reading</span>
            <span className="ibe-toc-bar__title">{active.title}</span>
          </span>
          <svg className="ibe-toc-bar__arrow" data-open={open} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 15l6-6 6 6" />
          </svg>
        </button>
      </div>
    </>
  );
}
