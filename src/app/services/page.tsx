// src/app/services/page.tsx

import PageLayout from "@/components/PageLayout";
import Services from "@/components/Services";

export const metadata = {
  title: "Services | Khawla Dev",
  description:
    "Professional services: graduation projects, software development, laptop bags, and technical interviews.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <Services />
    </PageLayout>
  );
}