import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs, isReleased } from "@/data/blog-posts";
import { blogContentMap } from "@/content/blog";
import BlogPostPage from "@/components/blog/BlogPostPage";

// ISR: regenerate every hour so scheduled posts auto-go-live without redeploy
export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = getPostBySlug(slug);
  if (!meta) return {};

  return {
    title: `${meta.title} | IBE Knowledge Center`,
    description: meta.excerpt,
    alternates: {
      canonical: `/blog/${meta.slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      type: "article",
      url: `https://www.industrialbakeryequipment.com/blog/${meta.slug}`,
      siteName: "Industrial Bakery Equipment",
      publishedTime: meta.publishDate,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.excerpt,
    },
  };
}

export default async function BlogPostRoute(
  props: { params: Promise<{ slug: string }> },
) {
  const { slug } = await props.params;
  const meta = getPostBySlug(slug);
  if (!meta || !isReleased(meta)) notFound();

  const content = blogContentMap[slug];
  if (!content) notFound();

  const { Body, sections } = content;

  return (
    <BlogPostPage meta={meta} sections={sections}>
      <Body />
    </BlogPostPage>
  );
}
