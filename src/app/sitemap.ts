// src/app/sitemap.ts

import type { MetadataRoute } from "next";

// ⚠️ بدّلي الدومين بالدومين الفعلي بعد النشر على Vercel
const SITE_URL = "https://khawla-dev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      path: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/services",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/skills",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/projects",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/contact",
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}