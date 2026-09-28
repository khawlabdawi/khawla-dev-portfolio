// src/components/WebSiteJsonLd.tsx

export default function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Khawla Dev",
    alternateName: "Khawla Dev Portfolio",
    url: "https://khawla-dev.vercel.app",
    description:
      "Portfolio of Khawla — Fullstack Software Engineer specializing in PHP, Laravel, React, and Next.js.",
    inLanguage: ["en", "ar"],
    author: {
      "@type": "Person",
      name: "Khawla",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}