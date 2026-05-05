import { BlogPostMeta } from "@/data/blog-posts";

interface BlogPostHeaderProps {
  meta: BlogPostMeta;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostHeader({ meta }: BlogPostHeaderProps) {
  return (
    <header
      style={{
        background: "linear-gradient(135deg, #1C2B36 0%, #2A3F4D 100%)",
        color: "#ffffff",
        padding: "140px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Class / Unit breadcrumb */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <a
            href="/blog"
            style={{ color: "#C05621", textDecoration: "none" }}
          >
            Blog
          </a>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
          <span>Class {meta.classNumber}</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
          <span>{meta.unitTitle}</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(30px, 5vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          {meta.title}
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.6,
            marginBottom: "32px",
            maxWidth: "720px",
          }}
        >
          {meta.excerpt}
        </p>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "20px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.6)",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <span>{formatDate(meta.publishDate)}</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
          <span>{meta.readingTime} min read</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
          <span
            style={{
              padding: "4px 10px",
              background: "rgba(192, 86, 33, 0.15)",
              borderRadius: "3px",
              color: "#E8A57F",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {meta.topic}
          </span>
        </div>
      </div>
    </header>
  );
}
