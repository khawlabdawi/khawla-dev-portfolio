// src/data/services.ts

export type Service = {
  id: string;
  icon: "GraduationCap" | "Code2" | "Backpack" | "ClipboardCheck";
  featured?: boolean;
  ar: {
    title: string;
    tagline: string;
    features: string[];
  };
  en: {
    title: string;
    tagline: string;
    features: string[];
  };
};

export const services: Service[] = [
  {
    id: "graduation-projects",
    icon: "GraduationCap",
    featured: true,
    ar: {
      title: "مشاريع تخرج",
      tagline: "من الفكرة لمشروع جاهز تدافعي عنه بثقة.",
      features: [
        "فكرة + تصميم + تنفيذ كامل",
        "توثيق أكاديمي متكامل",
        "عرض تقديمي جاهز",
        "دعم بعد التسليم",
      ],
    },
    en: {
      title: "Graduation Projects",
      tagline: "From idea to a finished, defendable project.",
      features: [
        "Idea, design & full implementation",
        "Academic documentation included",
        "Presentation slides prepared for you",
        "Support after delivery",
      ],
    },
  },
  {
    id: "software-development",
    icon: "Code2",
    featured: true,
    ar: {
      title: "تطوير برمجيات",
      tagline: "منتج متكامل، مبني ليدوم.",
      features: [
        "تطبيقات ويب كاملة",
        "Frontend + Backend",
        "قواعد بيانات + APIs",
        "نشر واستضافة",
      ],
    },
    en: {
      title: "Software Development",
      tagline: "A complete product, built to last.",
      features: [
        "Full web applications",
        "Frontend + Backend",
        "Databases & APIs",
        "Deployment & hosting",
      ],
    },
  },
  {
    id: "laptop-bags",
    icon: "Backpack",
    featured: true,
    ar: {
      title: "حقائب لابتوب فاخرة",
      tagline: "حماية وذوق، مصنوعة خصيصاً لك.",
      features: [
        "حماية ممتازة للابتوب",
        "عمل يدوي متقن",
        "إنتاج محدود",
        "قطعة فريدة لكل زبون",
      ],
    },
    en: {
      title: "Premium Laptop Bags",
      tagline: "Protection and craft, made just for you.",
      features: [
        "Excellent laptop protection",
        "Expertly handcrafted",
        "Limited production",
        "A unique piece for every customer",
      ],
    },
  },
  {
    id: "tech-interviews",
    icon: "ClipboardCheck",
    featured: true,
    ar: {
      title: "مقابلات تقنية",
      tagline: "وظّفي الشخص الصح، وبثقة تامة.",
      features: [
        "إجراء مقابلات تقنية احترافية",
        "تقييم دقيق للمهارات",
        "تقرير مفصل مكتوب",
        "توصية نهائية واضحة",
      ],
    },
    en: {
      title: "Technical Interviews",
      tagline: "Hire the right person, with confidence.",
      features: [
        "Structured technical interviews",
        "In-depth skills assessment",
        "Detailed written report",
        "Clear final recommendation",
      ],
    },
  },
];