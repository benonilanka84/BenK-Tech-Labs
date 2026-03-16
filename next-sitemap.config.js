const fs = require("fs");
const path = require("path");

function getBlogSlugs() {
  const contentDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://benktechlabs.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  generateIndexSitemap: false,
  exclude: ["/api/*", "/opengraph-image"],
  additionalPaths: async () => {
    const slugs = getBlogSlugs();
    const blogPaths = slugs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: "weekly",
      priority: 0.8,
    }));
    const staticPaths = [
      {
        loc: "/faq",
        changefreq: "monthly",
        priority: 0.8,
      },
    ];
    return [...staticPaths, ...blogPaths];
  },
};
