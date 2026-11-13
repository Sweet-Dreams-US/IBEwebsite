import type { NextConfig } from "next";

// Posts that used to be written into the site code, not by the client. They
// were taken off the blog and their text saved in the client's blog/extra
// folder. The old addresses go to the blog index for good.
const removedPostSlugs = [
  "true-cost-bakery-equipment",
  "buy-new-vs-refurbish",
  "capacity-planning-bakery-equipment",
  "steel-vs-stainless-steel-bakery",
  "galvanized-glass-bead-electro-polished-finishes",
  "hidden-cost-wrong-finish",
  "bissc-certification-explained",
  "fda-usda-bakery-compliance-cheat-sheet",
  "sanitation-design-101",
  "allergen-cross-contact-equipment",
];

const nextConfig: NextConfig = {
  // Blog posts are read from content/blog when a page re-renders (hourly), which
  // is how a post goes live on its date with no deploy. Ship those files with
  // every function that reads them.
  outputFileTracingIncludes: {
    "/blog": ["./content/blog/**/*"],
    "/blog/[slug]": ["./content/blog/**/*"],
    "/blog/rss.xml": ["./content/blog/**/*"],
    "/blog/img/[...path]": ["./content/blog/**/*"],
    "/sitemap.xml": ["./content/blog/**/*"],
    "/api/blog/status": ["./content/blog/**/*"],
  },
  async redirects() {
    return removedPostSlugs.map((slug) => ({
      source: `/blog/${slug}`,
      destination: "/blog",
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      // Shared FreeWebsites project (current) and the original IBEWebsite
      // project, kept until it's deleted so any cached image URLs still load.
      {
        protocol: "https",
        hostname: "nxhwqtqroyerbbklywyn.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "vaimupbyosltsvhyptah.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
