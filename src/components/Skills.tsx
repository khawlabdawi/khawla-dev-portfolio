// src/components/Skills.tsx

"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database as DatabaseIcon,
  Wrench,
  Award,
  Globe,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ─────────────────────────────────────────────
// التقنيات مجمّعة حسب الفئة
// ─────────────────────────────────────────────
const SKILL_CATEGORIES = [
  {
    icon: Code2,
    en: "Frontend",
    ar: "الواجهات الأمامية",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    icon: Server,
    en: "Backend",
    ar: "الواجهات الخلفية",
    items: ["PHP", "Laravel", "Node.js", "REST APIs"],
  },
  {
    icon: DatabaseIcon,
    en: "Database",
    ar: "قواعد البيانات",
    items: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    icon: Wrench,
    en: "Tools",
    ar: "أدوات العمل",
    items: ["Git", "Docker", "VS Code", "Postman"],
  },
];

const CERTIFICATES = [
  {
    en: { title: "Full-Stack Web Development", issuer: "Issuer name", year: "2024" },
    ar: { title: "تطوير الويب Full-Stack", issuer: "اسم الجهة المانحة", year: "2024" },
  },
  {
    en: { title: "Laravel Advanced Concepts", issuer: "Issuer name", year: "2023" },
    ar: { title: "Laravel المستوى المتقدم", issuer: "اسم الجهة المانحة", year: "2023" },
  },
];

const LANGUAGES = [
  {
    en: { name: "Arabic", level: "Native" },
    ar: { name: "العربية", level: "اللغة الأم" },
    percent: 100,
  },
  {
    en: { name: "English", level: "Professional" },
    ar: { name: "الإنجليزية", level: "احترافي" },
    percent: 85,
  },
];

const LEARNING_NOW = [
  { en: "System Design", ar: "تصميم الأنظمة" },
  { en: "AWS Cloud", ar: "AWS السحابية" },
  { en: "AI Integration", ar: "دمج الذكاء الاصطناعي" },
  { en: "Microservices", ar: "الخدمات المصغرة" },
];

export default function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-6 py-16 md:py-20"
    >
      {/* الترويسة */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-4">
          {t({ en: "04 — Skills", ar: "٠٤ — المهارات" })}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t({ en: "Skills you can rely on", ar: "مهارات تقدري تعتمدي عليها" })}
        </h2>
        <p className="mt-3 text-white/60">
          {t({
            en: "A stack chosen for one reason: it ships reliable products.",
            ar: "مجموعة تقنيات مختارة لسبب واحد: بتنتج مشاريع موثوقة.",
          })}
        </p>
      </motion.div>

      {/* فئات المهارات */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SKILL_CATEGORIES.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6
                       transition-all duration-300 hover:border-brand-500/40
                       hover:bg-white/[0.05] hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10
                              group-hover:bg-brand-500/20 transition-colors">
                <cat.icon className="h-5 w-5 text-brand-400" />
              </div>
              <h3 className="font-medium text-white">
                {t({ en: cat.en, ar: cat.ar })}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, j) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 + j * 0.04 }}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5
                             text-xs text-white/70 transition-colors duration-200 
                             hover:border-brand-400/50 hover:text-white hover:bg-brand-500/10"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* الشهادات + اللغات */}
      <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* الشهادات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-5 flex items-center gap-2.5">
            <Award className="h-5 w-5 text-brand-400" />
            <h3 className="text-lg font-medium text-white">
              {t({ en: "Certificates", ar: "الشهادات" })}
            </h3>
          </div>

          <div className="space-y-3">
            {CERTIFICATES.map((cert, i) => {
              const c = lang === "ar" ? cert.ar : cert.en;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center justify-between rounded-xl border border-white/10
                             bg-white/[0.03] px-5 py-4 hover:border-brand-500/40 
                             transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{c.title}</p>
                    <p className="mt-0.5 text-xs text-white/50">{c.issuer}</p>
                  </div>
                  <span className="text-xs text-brand-400 font-mono">
                    {c.year}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* اللغات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="mb-5 flex items-center gap-2.5">
            <Globe className="h-5 w-5 text-brand-400" />
            <h3 className="text-lg font-medium text-white">
              {t({ en: "Languages", ar: "اللغات" })}
            </h3>
          </div>

          <div className="space-y-5">
            {LANGUAGES.map((langItem, i) => {
              const l = lang === "ar" ? langItem.ar : langItem.en;
              return (
                <div key={i}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-white">{l.name}</span>
                    <span className="text-white/50">{l.level}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${langItem.percent}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.15,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* بانر "Always Learning" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative mt-20 overflow-hidden rounded-3xl border border-brand-500/30
                   bg-gradient-to-br from-brand-600/20 via-ink-900 to-ink-950 p-10 text-center sm:p-14"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-300 rounded-full blur-3xl" />
        </div>

        <div className="relative">
          <Sparkles className="h-8 w-8 text-brand-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-3">
            {t({ en: "Always Learning", ar: "دائماً أتعلم" })}
          </h3>
          <p className="text-white/60 max-w-lg mx-auto mb-6">
            {t({
              en: "Technology never stops evolving — neither do I. Currently exploring:",
              ar: "التقنية ما بتوقف عن التطور — وأنا كمان. حالياً أستكشف:",
            })}
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {LEARNING_NOW.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full
                           border border-brand-500/40 bg-brand-500/10
                           text-sm text-brand-300"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                {t(item)}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}