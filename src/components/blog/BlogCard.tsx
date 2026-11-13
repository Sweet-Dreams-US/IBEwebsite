import Link from "next/link";
import { formatReleaseDate, type BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="ibe-card">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          marginBottom: "16px",
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
        }}
      >
        <time dateTime={post.releaseOn} style={{ color: "#C05621" }}>
          {formatReleaseDate(post.releaseOn)}
        </time>
        <span style={{ color: "#5A6E78", fontWeight: 600 }}>{post.readingMinutes} min read</span>
      </div>

      <h2
        style={{
          fontSize: "21px",
          fontWeight: 700,
          color: "#1C2B36",
          marginBottom: "12px",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}
      >
        {post.title}
      </h2>

      <p style={{ fontSize: "15px", color: "#4A5E68", lineHeight: 1.6, marginBottom: "20px", flex: 1 }}>
        {post.description}
      </p>

      <span
        style={{
          paddingTop: "16px",
          borderTop: "1px solid rgba(28, 43, 54, 0.06)",
          fontSize: "13px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          color: "#C05621",
        }}
      >
        Read article →
      </span>
    </Link>
  );
}
