// src/data/projects.ts

export type Category = "All" | "Web App" | "Graduation" | "Landing Page";

export const CATEGORIES: { id: Category; en: string; ar: string }[] = [
  { id: "All", en: "All", ar: "الكل" },
  { id: "Web App", en: "Web Apps", ar: "تطبيقات ويب" },
  { id: "Graduation", en: "Graduation", ar: "مشاريع تخرج" },
  { id: "Landing Page", en: "Landing Pages", ar: "صفحات هبوط" },
];

export type Project = {
  id: string;
  featured?: boolean;
  image: string;
  category: Category;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  ar: { title: string; desc: string };
  en: { title: string; desc: string };
};

// ═══════════════════════════════════════════════
// ⚠️ عدّلي هالمصفوفة بمشاريعك الفعلية
// ═══════════════════════════════════════════════
export const PROJECTS: Project[] = [
  {
    id: "featured-1",
    featured: true,
    image: "/projects/project-1.png",
    category: "Web App",
    tags: ["Next.js", "Laravel", "MySQL"],
    liveUrl: "#",
    codeUrl: "#",
    en: {
      title: "Project name here",
      desc: "One or two sentences on the real problem this project solves and why it matters — not just what it's built with.",
    },
    ar: {
      title: "اسم المشروع هنا",
      desc: "جملة أو جملتين عن المشكلة الحقيقية يلي حلها المشروع وليش مهم — مو بس شو التقنيات المستخدمة.",
    },
  },
  {
    id: "p2",
    image: "/projects/project-2.png",
    category: "Graduation",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "#",
    en: {
      title: "Project name here",
      desc: "Short one-line description of the project.",
    },
    ar: {
      title: "اسم المشروع هنا",
      desc: "وصف قصير بسطر واحد للمشروع.",
    },
  },
  {
    id: "p3",
    image: "/projects/project-3.png",
    category: "Landing Page",
    tags: ["Next.js", "Tailwind"],
    liveUrl: "#",
    codeUrl: "#",
    en: {
      title: "Project name here",
      desc: "Short one-line description of the project.",
    },
    ar: {
      title: "اسم المشروع هنا",
      desc: "وصف قصير بسطر واحد للمشروع.",
    },
  },
  {
    id: "p4",
    image: "/projects/project-4.png",
    category: "Web App",
    tags: ["PHP", "Laravel", "Redis"],
    liveUrl: "#",
    codeUrl: "#",
    en: {
      title: "Project name here",
      desc: "Short one-line description of the project.",
    },
    ar: {
      title: "اسم المشروع هنا",
      desc: "وصف قصير بسطر واحد للمشروع.",
    },
  },
  // ضيفي مشاريع إضافية هنا (5, 6...)
];