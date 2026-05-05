"use client";

import { ReactNode } from "react";

type TipVariant = "spec" | "quote" | "reference";

const variants: Record<
  TipVariant,
  { label: string; accent: string; bg: string; icon: string }
> = {
  spec: {
    label: "Spec Tip",
    accent: "#C05621",
    bg: "rgba(192, 86, 33, 0.06)",
    icon: "→",
  },
  quote: {
    label: "Quote Tip",
    accent: "#3D6478",
    bg: "rgba(61, 100, 120, 0.06)",
    icon: "✓",
  },
  reference: {
    label: "Reference",
    accent: "#5F8A9E",
    bg: "rgba(95, 138, 158, 0.06)",
    icon: "↗",
  },
};

interface BrandedTipProps {
  variant?: TipVariant;
  href?: string;
  linkText?: string;
  children: ReactNode;
}

export default function BrandedTip({
  variant = "spec",
  href,
  linkText,
  children,
}: BrandedTipProps) {
  const v = variants[variant];

  return (
    <aside
      style={{
        margin: "32px 0",
        padding: "20px 24px",
        background: v.bg,
        borderLeft: `4px solid ${v.accent}`,
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          color: v.accent,
          marginBottom: "8px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span aria-hidden style={{ fontSize: "14px" }}>{v.icon}</span>
        {v.label}
      </div>
      <div style={{ fontSize: "16px", color: "#1C2B36", lineHeight: 1.7 }}>
        {children}
      </div>
      {href && linkText && (
        <a
          href={href}
          style={{
            display: "inline-block",
            marginTop: "12px",
            color: v.accent,
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "1px",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {linkText} →
        </a>
      )}
    </aside>
  );
}
