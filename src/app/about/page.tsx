// src/app/about/page.tsx

import PageLayout from "@/components/PageLayout";
import About from "@/components/About";

export const metadata = {
  title: "About | Khawla Dev",
  description: "Learn more about Khawla — Fullstack Software Engineer.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
}