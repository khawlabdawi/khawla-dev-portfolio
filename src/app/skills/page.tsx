// src/app/skills/page.tsx

import PageLayout from "@/components/PageLayout";
import Skills from "@/components/Skills";

export const metadata = {
  title: "Skills | Khawla Dev",
  description:
    "Technologies, tools, certificates, and languages — a full overview of my skill set.",
};

export default function SkillsPage() {
  return (
    <PageLayout>
      <Skills />
    </PageLayout>
  );
}