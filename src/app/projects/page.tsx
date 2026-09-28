// src/app/projects/page.tsx

import PageLayout from "@/components/PageLayout";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects",
  description:
    "A collection of real projects — web apps, graduation projects, and landing pages.",
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <Projects />
    </PageLayout>
  );
}