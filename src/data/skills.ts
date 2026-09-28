// src/data/skills.ts

export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: {
  ar: SkillCategory[];
  en: SkillCategory[];
} = {
  ar: [
    {
      title: "اللغات",
      items: ["PHP", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "الواجهات الأمامية",
      items: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "الواجهات الخلفية",
      items: ["Laravel", "Node.js", "REST APIs", "Livewire"],
    },
    {
      title: "قواعد البيانات",
      items: ["MySQL", "PostgreSQL", "Redis"],
    },
    {
      title: "الأدوات",
      items: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
    },
  ],

  en: [
    {
      title: "Languages",
      items: ["PHP", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      items: ["Laravel", "Node.js", "REST APIs", "Livewire"],
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL", "Redis"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
    },
  ],
};