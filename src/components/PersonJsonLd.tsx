// src/components/PersonJsonLd.tsx

const PERSON_DATA = {
  name: "Khawla",
  alternateName: "Khawla Dev",
  jobTitle: "Fullstack Software Engineer",
  url: "https://khawla-dev.vercel.app",
  image: "https://khawla-dev.vercel.app/logo.png",
  email: "mailto:khawlabd1212@gmail.com",
  description:
    "Fullstack Software Engineer specialized in PHP, Laravel, React, and Next.js. Building complete web applications from idea to deployment.",
  sameAs: [
    "https://github.com/khawla-dev",
    "https://linkedin.com/in/khawla-dev",
  ],
  knowsAbout: [
    "PHP",
    "Laravel",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "MySQL",
    "PostgreSQL",
    "Web Development",
    "Software Engineering",
  ],
  address: { "@type": "PostalAddress", addressCountry: "SY" },
};

export default function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    ...PERSON_DATA,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}