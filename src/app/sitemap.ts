import type { MetadataRoute } from "next";
import { getReleasedPosts } from "@/lib/blog";

const BASE = "https://www.industrialbakeryequipment.com";

// Rebuilt at least hourly so a released post joins the sitemap on its date without a deploy.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getReleasedPosts();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/#products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/#events`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const blogEntries: MetadataRoute.Sitemap =
    posts.length === 0
      ? []
      : [
          {
            url: `${BASE}/blog`,
            lastModified: new Date(`${posts[0].releaseOn}T12:00:00Z`),
            changeFrequency: "monthly",
            priority: 0.8,
          },
          ...posts.map((p) => ({
            url: `${BASE}/blog/${p.slug}`,
            lastModified: new Date(`${p.releaseOn}T12:00:00Z`),
            changeFrequency: "monthly" as const,
            priority: 0.7,
          })),
        ];

  return [...staticEntries, ...blogEntries];
}
