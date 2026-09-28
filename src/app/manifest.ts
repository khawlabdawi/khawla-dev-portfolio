// src/app/manifest.ts

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Khawla Dev — Fullstack Software Engineer",
    short_name: "Khawla Dev",
    description:
      "Portfolio of Khawla — Fullstack Software Engineer specializing in PHP, Laravel, React, and Next.js.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#060A12",
    theme_color: "#1E73B3",
    scope: "/",
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}