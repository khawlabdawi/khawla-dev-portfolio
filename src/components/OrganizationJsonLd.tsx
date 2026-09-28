// src/components/OrganizationJsonLd.tsx

export default function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Khawla Dev",
    url: "https://khawla-dev.vercel.app",
    logo: "https://khawla-dev.vercel.app/logo.png",
    email: "khawlabd1212@gmail.com",
    description:
      "Fullstack Software Engineering services — web development, graduation projects, custom laptop bags, and technical interviews.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SY",
    },
    sameAs: [
      "https://github.com/khawla-dev",
      "https://linkedin.com/in/khawla-dev",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}