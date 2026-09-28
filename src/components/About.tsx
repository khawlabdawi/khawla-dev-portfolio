// src/components/About.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Download,
  Layers,
  Server,
  Sparkles,
  BookOpen,
  Languages as LanguagesIcon,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ─────────────────────────────────────────────
// البيانات (عدّليها حسب وضعك الحقيقي)
// ─────────────────────────────────────────────
const STATS = [
  { value: 4, suffix: "+", en: "Years of experience", ar: "سنوات خبرة" },
  { value: 20, suffix: "+", en: "Projects completed", ar: "مشروع منجز" },
  { value: 10, suffix: "+", en: "Technologies", ar: "تقنية" },
];

const TIMELINE = [
  {
    year: "2021",
    en: {
      role: "Frontend Developer",
      desc: "Started building interfaces with JavaScript & React.",
    },
    ar: {
      role: "مطورة Frontend",
      desc: "بدأت ببناء الواجهات باستخدام JavaScript و React.",
    },
  },
  {
    year: "2023",
    en: {
      role: "Backend Developer",
      desc: "Moved into server-side logic, APIs and databases with PHP & Laravel.",
    },
    ar: {
      role: "مطورة Backend",
      desc: "انتقلت للعمل على المنطق البرمجي، الـ APIs وقواعد البيانات مع PHP و Laravel.",
    },
  },
  {
    year: "2025",
    en: {
      role: "Fullstack Engineer",
      desc: "Now building complete products end-to-end with Next.js.",
    },
    ar: {
      role: "مهندسة Fullstack",
      desc: "الآن أبني منتجات متكاملة من الألف للياء باستخدام Next.js.",
    },
  },
];

const OFFER_POINTS = [
  {
    icon: Layers,
    en: {
      title: "Frontend",
      desc: "Interfaces that feel intuitive — clean UI, smooth UX.",
    },
    ar: {
      title: "Frontend",
      desc: "واجهات سهلة وسلسة — UI نظيف وتجربة مستخدم مريحة.",
    },
  },
  {
    icon: Server,
    en: {
      title: "Backend",
      desc: "Solid logic, reliable APIs, and well-structured databases.",
    },
    ar: {
      title: "Backend",
      desc: "منطق برمجي متين، APIs موثوقة، وقواعد بيانات منظمة.",
    },
  },
  {
    icon: Sparkles,
    en: {
      title: "Fullstack",
      desc: "One person handling the whole product, front to back.",
    },
    ar: {
      title: "Fullstack",
      desc: "شخص واحد يغطي المنتج كامل، من الواجهة للسيرفر.",
    },
  },
];

const TRAITS = [
  { icon: Zap, en: "Learns fast", ar: "بتعلم بسرعة" },
  {
    icon: LanguagesIcon,
    en: "Loves learning new languages",
    ar: "بحب أتعلم لغات جديدة",
  },
  { icon: BookOpen, en: "Reads technical books", ar: "بحب أقرأ كتب تقنية" },
];

const TECH_MARQUEE = [
  "PHP",
  "Laravel",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
      {/* الترويسة */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t({ en: "About me", ar: "من أنا" })}
        </h2>
      </motion.div>

      {/* المحتوى الرئيسي: صورة + نبذة */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto h-40 w-40 overflow-hidden rounded-full ring-1 ring-white/15 lg:mx-0 lg:h-56 lg:w-56"
        >
          <Image
            src="/logo.png"
            alt="Khawla"
            width={224}
            height={224}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-white/70 leading-relaxed"
          >
            {t({
              en: "I'm a fullstack engineer with 4+ years of experience across both frontend and backend — building interfaces with React and Next.js, and the logic, APIs and databases behind them with PHP and Laravel.",
              ar: "أنا مهندسة برمجيات Fullstack بخبرة تفوق 4 سنوات في الواجهات الأمامية والخلفية — أبني الواجهات باستخدام React و Next.js، والمنطق البرمجي والـ APIs وقواعد البيانات باستخدام PHP و Laravel.",
            })}
          </motion.p>

          {/* زر تحميل CV */}
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="/cv.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5
                       text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-600"
          >
            <Download className="h-4 w-4" />
            {t({ en: "Download CV", ar: "تحميل السيرة الذاتية" })}
          </motion.a>

          {/* السمات الشخصية */}
          <div className="mt-8 flex flex-wrap gap-3">
            {TRAITS.map((trait, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
              >
                <trait.icon className="h-3.5 w-3.5 text-brand-400" />
                {t({ en: trait.en, ar: trait.ar })}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* الإحصائيات المتحركة */}
      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </div>

      {/* شو بقدم */}
      <div className="mt-24">
        <h3 className="mb-8 text-center text-xl font-medium text-white">
          {t({ en: "What I bring", ar: "شو بقدم" })}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {OFFER_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <point.icon className="mb-3 h-5 w-5 text-brand-400" />
              <h4 className="mb-1 font-medium text-white">
                {t({ en: point.en.title, ar: point.ar.title })}
              </h4>
              <p className="text-sm text-white/60">
                {t({ en: point.en.desc, ar: point.ar.desc })}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline الخبرات */}
      <div className="mt-24">
        <h3 className="mb-10 text-center text-xl font-medium text-white">
          {t({ en: "Experience", ar: "المسيرة المهنية" })}
        </h3>
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute top-0 bottom-0 start-[7px] w-px bg-white/10" />
          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative ps-8"
              >
                <span className="absolute start-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-brand-500 bg-ink-950" />
                <span className="text-xs font-medium uppercase tracking-wide text-brand-400">
                  {item.year}
                </span>
                <h4 className="mt-1 font-medium text-white">
                  {t({ en: item.en.role, ar: item.ar.role })}
                </h4>
                <p className="mt-1 text-sm text-white/60">
                  {t({ en: item.en.desc, ar: item.ar.desc })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* شريط التقنيات المتحرك */}
      <div className="relative mt-24 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
            <span
              key={i}
              className="text-lg font-medium text-white/25 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// بطاقة إحصائية مع عداد متحرك (Count-up)
// ─────────────────────────────────────────────
function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * stat.value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
    >
      <div className="text-3xl font-semibold text-white">
        {count}
        {stat.suffix}
      </div>
      <div className="mt-1 text-sm text-white/50">
        {t({ en: stat.en, ar: stat.ar })}
      </div>
    </motion.div>
  );
}
