// src/components/Projects.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS, CATEGORIES, type Category } from "@/data/projects";

// ─────────────────────────────────────────────
// أيقونة GitHub (SVG مخصص)
// ─────────────────────────────────────────────
function GithubIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22 0 1.61-.01 2.9-.01 3.3 0 .32.22.7.83.58C20.57 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<Category>("All");

  // Featured ثابت في الأعلى
  const featured = PROJECTS.find((p) => p.featured);

  // باقي المشاريع مع الفلترة (بدون featured)
  const rest = PROJECTS.filter((p) => !p.featured).filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
      {/* ═══ الترويسة ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-4">
          {t({ en: "05 — Projects", ar: "٠٥ — المشاريع" })}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t({
            en: "Work that speaks for itself",
            ar: "شغل بيحكي عن حاله",
          })}
        </h2>
        <p className="mt-3 text-white/60">
          {t({
            en: "A few projects I'm proud to put my name on.",
            ar: "مجموعة مشاريع فخورة أحط اسمي عليها.",
          })}
        </p>
      </motion.div>

      {/* ═══ المشروع المميز ═══ */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="group relative mb-12 overflow-hidden rounded-3xl border border-brand-500/30
                     bg-gradient-to-br from-brand-600/10 via-ink-900 to-ink-950"
        >
          {/* شارة Featured */}
          <div className="absolute top-5 start-5 z-10 flex items-center gap-2 px-3 py-1.5 
                          rounded-full bg-brand-500 text-white text-xs font-medium
                          shadow-lg shadow-brand-500/50">
            <Sparkles className="h-3.5 w-3.5" />
            {t({ en: "Featured", ar: "مميز" })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* الصورة */}
            <div className="relative aspect-video overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image}
                alt={lang === "ar" ? featured.ar.title : featured.en.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>

            {/* المحتوى */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-white">
                {t({ en: featured.en.title, ar: featured.ar.title })}
              </h3>
              <p className="mt-3 text-white/60 leading-relaxed">
                {t({ en: featured.en.desc, ar: featured.ar.desc })}
              </p>

              {/* التقنيات */}
              <div className="mt-5 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs text-brand-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* الأزرار */}
              <div className="mt-7 flex items-center gap-3">
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-brand-600 hover:scale-105"
                >
                  {t({ en: "View live", ar: "شاهد المشروع" })}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={featured.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white/70 transition-colors duration-200 hover:border-white/25 hover:text-white"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  {t({ en: "Code", ar: "الكود" })}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ═══ فلتر التصنيفات ═══ */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
              filter === cat.id
                ? "text-white"
                : "border border-white/10 text-white/60 hover:border-white/25 hover:text-white"
            }`}
          >
            {filter === cat.id && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 rounded-full bg-brand-500"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">
              {t({ en: cat.en, ar: cat.ar })}
            </span>
          </button>
        ))}
      </div>

      {/* ═══ شبكة المشاريع ═══ */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 
                         bg-white/[0.03] hover:border-brand-500/40 hover:-translate-y-1
                         transition-all duration-300"
            >
              {/* الصورة */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-brand-500/20 to-ink-900">
                <Image
                  src={project.image}
                  alt={lang === "ar" ? project.ar.title : project.en.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay مع روابط */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white transition-transform duration-200 hover:scale-110"
                    aria-label="View live"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-transform duration-200 hover:scale-110"
                    aria-label="View code"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* المحتوى */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-white">
                    {t({ en: project.en.title, ar: project.ar.title })}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-400" />
                </div>
                <p className="mt-1.5 text-sm text-white/50">
                  {t({ en: project.en.desc, ar: project.ar.desc })}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-brand-400/80 font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* إذا ما في مشاريع */}
      {rest.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-white/40 text-sm">
            {t({
              en: "No projects in this category yet.",
              ar: "لا توجد مشاريع في هذه الفئة بعد.",
            })}
          </p>
        </motion.div>
      )}
    </section>
  );
}