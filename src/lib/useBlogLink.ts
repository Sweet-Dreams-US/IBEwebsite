"use client";

import { useEffect, useState } from "react";

/**
 * Whether the site navigation should show the Blog link: true once at least
 * one post has released. Asked of the server, not baked into the page, so the
 * link appears on a post's release date and goes away without a deploy.
 * Blog pages already know the answer and pass it in as `known`.
 */
let cached: { at: number; value: Promise<boolean> } | null = null;

function ask(): Promise<boolean> {
  if (!cached || Date.now() - cached.at > 5 * 60 * 1000) {
    const value = fetch("/api/blog/status")
      .then((r) => (r.ok ? r.json() : { hasBlog: false }))
      .then((d) => Boolean(d?.hasBlog))
      .catch(() => false);
    cached = { at: Date.now(), value };
  }
  return cached.value;
}

export function useBlogLink(known?: boolean): boolean {
  const [asked, setAsked] = useState(false);

  useEffect(() => {
    if (known !== undefined) return;
    let live = true;
    ask().then((v) => {
      if (live) setAsked(v);
    });
    return () => {
      live = false;
    };
  }, [known]);

  return known ?? asked;
}
