import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/lib",
    },
    sitemap: "https://zinnli.github.io//sitemap.xml",
  };
}
