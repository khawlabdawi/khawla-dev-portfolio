// src/data/site.ts

export type Locale = "ar" | "en";

export const site = {
  ar: {
    dir: "rtl",
    lang: "ar",
    name: "خولة",
    nickname: "Khawla Dev",
    title: "مهندسة برمجيات Fullstack",
    tagline: "أبني تطبيقات ويب كاملة من الفكرة للنشر.",
    description:
      "مهندسة برمجيات متخصصة في تطوير تطبيقات الويب باستخدام PHP و Laravel و React. أحول الأفكار إلى منتجات رقمية عملية وسريعة.",
    location: "سوريا",
    email: "khawlabd1212@gmail.com",
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      services: "الخدمات",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "تواصل",
    },
    cta: {
      contactMe: "تواصل معي",
      viewWork: "شاهد أعمالي",
      downloadCV: "تحميل السيرة الذاتية",
    },
  },

  en: {
    dir: "ltr",
    lang: "en",
    name: "Khawla",
    nickname: "Khawla Dev",
    title: "Fullstack Software Engineer",
    tagline: "I build complete web applications from idea to deployment.",
    description:
      "Software Engineer specialized in building web applications with PHP, Laravel, and React. I turn ideas into practical, fast digital products.",
    location: "Syria",
    email: "khawlabd1212@gmail.com",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    cta: {
      contactMe: "Contact Me",
      viewWork: "View My Work",
      downloadCV: "Download CV",
    },
  },
} as const;

export type SiteContent = typeof site.ar;