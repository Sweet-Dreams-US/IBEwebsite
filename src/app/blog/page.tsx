import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { getReleasedPosts } from "@/lib/blog";

// Re-render at least once an hour so a post appears on its release date without a deploy.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | Industrial Bakery Equipment",
  description:
    "Practical guides for bakery owners and GMs from Industrial Bakery Equipment in Fort Wayne, Indiana.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
  openGraph: {
    title: "IBE Blog",
    description: "Practical guides for bakery owners and GMs from Industrial Bakery Equipment.",
    type: "website",
    url: "https://www.industrialbakeryequipment.com/blog",
    siteName: "Industrial Bakery Equipment",
  },
};

export default async function BlogIndexPage() {
  const posts = await getReleasedPosts();

  return (
    <main style={{ minHeight: "100vh", background: "#F2F5F7" }}>
      <Navbar showBlog={posts.length > 0} />

      <header
        style={{
          background: "linear-gradient(135deg, #1C2B36 0%, #2A3F4D 100%)",
          color: "#ffffff",
          padding: "140px 24px 72px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2.5px",
              color: "#C05621",
              marginBottom: "16px",
            }}
          >
            IBE Blog
          </div>
          <h1
            style={{
              fontSize: "clamp(34px, 6vw, 54px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
              maxWidth: "900px",
            }}
          >
            Practical guides for bakery owners and GMs.
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              maxWidth: "720px",
            }}
          >
            Notes from Industrial Bakery Equipment in Fort Wayne, Indiana.
          </p>
        </div>
      </header>

      <div style={{ maxWidth: "1248px", margin: "0 auto", padding: "56px 24px 96px" }}>
        {posts.length === 0 ? (
          <div
            style={{
              padding: "56px 24px",
              textAlign: "center",
              background: "#ffffff",
              border: "1px solid rgba(28, 43, 54, 0.08)",
              borderRadius: "6px",
              color: "#5A6E78",
            }}
          >
            <p style={{ fontSize: "16px" }}>No articles yet. Please check back soon.</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
              gap: "20px",
            }}
          >
            {posts.map((post) => (
              <BlogCard key={post.postId} post={post} />
            ))}
          </div>
        )}
      </div>

      <Footer showBlog={posts.length > 0} />
    </main>
  );
}
