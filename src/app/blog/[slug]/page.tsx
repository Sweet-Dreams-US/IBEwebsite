import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogBody from "@/components/blog/BlogBody";
import BlogContents from "@/components/blog/BlogContents";
import { formatReleaseDate, getReleasedPost, getReleasedPosts, imageUrlIfPresent, SITE_URL } from "@/lib/blog";
import { headingsOf, parseBlocks } from "@/lib/blog-markdown";

// Re-render at least once an hour. A post is a 404 until its release date, then appears with no deploy.
export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getReleasedPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getReleasedPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  const cover = await imageUrlIfPresent(post.coverImage);

  return {
    title: `${post.title} | IBE Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      siteName: "Industrial Bakery Equipment",
      publishedTime: post.releaseOn,
      ...(cover ? { images: [{ url: cover }] } : {}),
    },
    twitter: {
      card: cover ? "summary_large_image" : "summary",
      title: post.title,
      description: post.description,
      ...(cover ? { images: [cover] } : {}),
    },
  };
}

export default async function BlogPostRoute(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = await getReleasedPost(slug);
  if (!post) notFound(); // not released yet, or no such post

  const blocks = parseBlocks(post.body);
  const sections = headingsOf(blocks);
  const cover = await imageUrlIfPresent(post.coverImage);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.releaseOn,
    dateModified: post.releaseOn,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en-US",
    ...(cover ? { image: `${SITE_URL}${cover}` } : {}),
    author: { "@type": "Organization", name: "Industrial Bakery Equipment", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Industrial Bakery Equipment", url: SITE_URL },
    ...(post.sources.length
      ? { citation: post.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url })) }
      : {}),
  };

  return (
    <main style={{ minHeight: "100vh", background: "#F2F5F7" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar showBlog />

      <header
        style={{
          background: "linear-gradient(135deg, #1C2B36 0%, #2A3F4D 100%)",
          color: "#ffffff",
          padding: "140px 24px 64px",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-block",
              marginBottom: "24px",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#C05621",
              textDecoration: "none",
            }}
          >
            ← IBE Blog
          </Link>
          <h1
            style={{
              fontSize: "clamp(28px, 4.6vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "8px 16px",
              paddingTop: "22px",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <time dateTime={post.releaseOn}>{formatReleaseDate(post.releaseOn)}</time>
            <span aria-hidden="true" style={{ color: "#C05621" }}>
              ·
            </span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: "768px", margin: "0 auto", padding: "56px 24px 88px" }}>
        <div id="blog-article">
          {cover && (
            <div className="ibe-cover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cover} alt="" />
            </div>
          )}
          <article className="ibe-article">
            <BlogBody blocks={blocks} />
          </article>

          {post.sources.length > 0 && (
            <section className="ibe-sources" aria-labelledby="ibe-sources-title">
              <h2 id="ibe-sources-title">Sources</h2>
              <ol>
                {post.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.title}
                    </a>
                    {s.author && <span className="ibe-sources__author">{s.author}</span>}
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>
      </div>

      <section
        style={{
          background: "linear-gradient(135deg, #1C2B36 0%, #2A3F4D 100%)",
          color: "#ffffff",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 700,
              marginBottom: "14px",
              letterSpacing: "-0.01em",
            }}
          >
            Ready to talk equipment?
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.75)", marginBottom: "28px", lineHeight: 1.6 }}>
            Industrial Bakery Equipment fabricates steel and stainless steel wire and sheet metal products in Fort Wayne, Indiana.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            {/* Plain anchors, like the site header: a full load lands on the home page section. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
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
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/#contact"
              style={{
                padding: "14px 30px",
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

      <Footer showBlog />
      <BlogContents sections={sections} articleId="blog-article" />
    </main>
  );
}
