"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import { BlogPostMeta, isReleased } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPostMeta;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogCard({ post }: BlogCardProps) {
  // A post is "locked" (not clickable) if it's not yet released — either
  // because it's still in planned status or because its publish date hasn't arrived.
  const isPlanned = !isReleased(post);

  const cardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
    border: "1px solid rgba(28, 43, 54, 0.08)",
    borderRadius: "6px",
    padding: "28px 28px 24px",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.25s ease",
    cursor: isPlanned ? "default" : "pointer",
    opacity: isPlanned ? 0.55 : 1,
    position: "relative",
    height: "100%",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (isPlanned) return;
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.borderColor = "#C05621";
    e.currentTarget.style.boxShadow = "0 12px 32px rgba(28, 43, 54, 0.08)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (isPlanned) return;
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "rgba(28, 43, 54, 0.08)";
    e.currentTarget.style.boxShadow = "none";
  };

  const inner = (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "#C05621",
          }}
        >
          {post.topic}
        </span>
        {isPlanned ? (
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#5A6E78",
              background: "rgba(90, 110, 120, 0.08)",
              padding: "3px 8px",
              borderRadius: "3px",
            }}
          >
            {post.status === "published" ? `Releases ${formatDate(post.publishDate)}` : `Coming Wk ${post.weekNumber}`}
          </span>
        ) : (
          <span style={{ fontSize: "12px", color: "#5A6E78" }}>
            {post.readingTime} min
          </span>
        )}
      </div>

      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#1C2B36",
          marginBottom: "12px",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}
      >
        {post.title}
      </h3>

      <p
        style={{
          fontSize: "15px",
          color: "#4A5E68",
          lineHeight: 1.6,
          marginBottom: "20px",
          flex: 1,
        }}
      >
        {post.excerpt}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "13px",
          color: "#5A6E78",
          paddingTop: "16px",
          borderTop: "1px solid rgba(28, 43, 54, 0.06)",
        }}
      >
        <span>Class {post.classNumber} · Unit {post.unitNumber}</span>
        {!isPlanned && <span>{formatDate(post.publishDate)}</span>}
      </div>
    </>
  );

  if (isPlanned) {
    return (
      <div style={cardStyle}>
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {inner}
    </Link>
  );
}
