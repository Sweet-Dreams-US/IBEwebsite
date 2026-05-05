"use client";

import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostHeader from "./BlogPostHeader";
import BlogTOC, { TOCSection } from "./BlogTOC";
import { BlogPostMeta, getRelatedPosts } from "@/data/blog-posts";
import BlogCard from "./BlogCard";

interface BlogPostPageProps {
  meta: BlogPostMeta;
  sections: TOCSection[];
  children: ReactNode;
}

export default function BlogPostPage({ meta, sections, children }: BlogPostPageProps) {
  const related = getRelatedPosts(meta);
  const tocSections: TOCSection[] = [
    ...sections,
    { id: "sources", title: "Sources & Further Reading", level: 2 },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#F2F5F7" }}>
      <Navbar />
      <BlogPostHeader meta={meta} />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "60px 24px 100px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: "48px",
        }}
        className="blog-post-grid"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px minmax(0, 1fr)",
            gap: "60px",
            alignItems: "start",
          }}
          className="blog-post-inner"
        >
          {/* TOC sidebar - hidden on mobile via global CSS */}
          <aside className="blog-toc-aside">
            <BlogTOC sections={tocSections} />
          </aside>

          {/* Article body */}
          <article
            style={{
              maxWidth: "720px",
              fontSize: "17px",
              lineHeight: 1.75,
              color: "#1C2B36",
            }}
            className="blog-article"
          >
            {children}
          </article>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section
          style={{
            background: "#ffffff",
            borderTop: "1px solid rgba(28, 43, 54, 0.08)",
            padding: "80px 24px",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#1C2B36",
                marginBottom: "32px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              Continue Reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA strip */}
      <section
        style={{
          background: "linear-gradient(135deg, #1C2B36 0%, #2A3F4D 100%)",
          color: "#ffffff",
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 700,
              marginBottom: "16px",
              letterSpacing: "-0.01em",
            }}
          >
            Ready to talk equipment?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "32px",
              lineHeight: 1.6,
            }}
          >
            Every IBE rack, trough, and cart is built in Fort Wayne, IN. Component-built so you can repair what wears, not replace what works.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/#products"
              style={{
                padding: "16px 32px",
                background: "#C05621",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                borderRadius: "4px",
              }}
            >
              Browse Products
            </a>
            <a
              href="/#contact"
              style={{
                padding: "16px 32px",
                background: "transparent",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                borderRadius: "4px",
                border: "2px solid #ffffff",
              }}
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
