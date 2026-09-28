// src/app/contact/page.tsx

import PageLayout from "@/components/PageLayout";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact | Khawla Dev",
  description:
    "Get in touch — for projects, collaborations, or just to say hi.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <Contact />
    </PageLayout>
  );
}