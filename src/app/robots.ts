// src/app/robots.ts

import type { MetadataRoute } from "next";

// ⚠️ بدّلي الدومين بالدومين الفعلي بعد النشر على Vercel
const SITE_URL = "https://khawla-dev.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}