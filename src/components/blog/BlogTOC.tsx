"use client";

import { useEffect, useState } from "react";

export interface TOCSection {
  id: string;
  title: string;
  level: 2 | 3;
}

interface BlogTOCProps {
  sections: TOCSection[];
}

export default function BlogTOC({ sections }: BlogTOCProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: [0, 1],
      },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      style={{
        position: "sticky",
        top: "100px",
        maxHeight: "calc(100vh - 140px)",
        overflowY: "auto",
        padding: "20px",
        background: "#ffffff",
        border: "1px solid rgba(28, 43, 54, 0.08)",
        borderRadius: "6px",
      }}
    >
      <h4
        style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#5A6E78",
          marginBottom: "16px",
          paddingBottom: "12px",
          borderBottom: "1px solid rgba(28, 43, 54, 0.08)",
        }}
      >
        On This Page
      </h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <li
              key={s.id}
              style={{
                marginBottom: "10px",
                paddingLeft: s.level === 3 ? "16px" : "0",
                borderLeft: isActive
                  ? "2px solid #C05621"
                  : "2px solid transparent",
              }}
            >
              <a
                href={`#${s.id}`}
                style={{
                  display: "block",
                  paddingLeft: "12px",
                  color: isActive ? "#C05621" : "#1C2B36",
                  fontSize: s.level === 3 ? "13px" : "14px",
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: "none",
                  lineHeight: 1.4,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#3D6478";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#1C2B36";
                }}
              >
                {s.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
