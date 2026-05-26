"use client";

import { useEffect, useState, ComponentProps, ReactNode } from "react";

interface EmailLinkProps extends Omit<ComponentProps<"a">, "href" | "children"> {
  user: string;
  domain: string;
  subject?: string;
  children?: ReactNode;
  /** Custom placeholder shown before client hydration. Defaults to non-breaking space. */
  placeholder?: ReactNode;
}

/**
 * Bot-resistant email link.
 *
 * Renders a placeholder <span> on the server, then upgrades to a real
 * <a href="mailto:..."> after client hydration. Result: the rendered HTML
 * payload contains no plain-text email and no mailto: href, so naive
 * scrapers (the vast majority) can't harvest the address.
 *
 * Real users see the working link as soon as React hydrates — typically
 * within a few hundred milliseconds, often before the email is even visible
 * (e.g. below the fold in the footer).
 *
 * Pass the email as `user` + `domain` (not as a single string) so it never
 * appears assembled in the source. Optional `subject` adds a mailto subject.
 */
export default function EmailLink({
  user,
  domain,
  subject,
  children,
  placeholder,
  ...anchorProps
}: EmailLinkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Spread anchor props onto the span. Most props (style, className,
    // event handlers) are compatible between <a> and <span>; the cast is
    // a minor type lie. Event handlers won't fire during the sub-second
    // pre-hydration window in practice.
    return (
      <span {...(anchorProps as ComponentProps<"span">)}>
        {placeholder ?? " "}
      </span>
    );
  }

  const email = `${user}@${domain}`;
  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  return (
    <a {...anchorProps} href={href}>
      {children ?? email}
    </a>
  );
}
