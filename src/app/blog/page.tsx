import type { Metadata } from "next";
import { blogPosts, blogClasses } from "@/data/blog-posts";
import BlogIndex from "@/components/blog/BlogIndex";

export const metadata: Metadata = {
  title: "Knowledge Center | IBE — Industrial Bakery Equipment",
  description:
    "Practical guides for bakery owners and GMs: equipment TCO, sanitation, materials, production layout, cold chain, and more. Updated weekly.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "IBE Knowledge Center",
    description:
      "Practical guides for bakery owners and GMs from Industrial Bakery Equipment.",
    type: "website",
    url: "https://www.industrialbakeryequipment.com/blog",
    siteName: "Industrial Bakery Equipment",
  },
};

export default function BlogIndexRoute() {
  return <BlogIndex posts={blogPosts} classes={blogClasses} />;
}
