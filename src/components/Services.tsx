// src/components/Services.tsx

"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Backpack,
  ClipboardCheck,
  Check,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  GraduationCap,
  Code2,
  Backpack,
  ClipboardCheck,
} as const;

export default function Services() {
  const { t, lang } = useLanguage();
  const ArrowIcon = lang === "ar" ? ArrowLeft : ArrowRight;

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
        <span className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-4">
          {t({ en: "02 — Services", ar: "٠٢ — الخدمات" })}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t({ en: "What I can build for you", ar: "شو ممكن أبنيلك" })}
        </h2>
        <p className="mt-3 text-white/60">
          {t({
            en: "Four services, one promise: quality work, delivered on time.",
            ar: "أربع خدمات، ووعد واحد: شغل متقن، بيوصلك بالوقت المحدد.",
          })}
        </p>
      </motion.div>

      {/* بطاقات الخدمات */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          const content = lang === "ar" ? service.ar : service.en;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03]
                         p-7 transition-all duration-300 hover:border-brand-500/40 hover:bg-white/[0.05]
                         hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(30,115,179,0.3)]"
            >
              {/* الأيقونة */}
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10
                              group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="h-5 w-5 text-brand-400" />
              </div>

              {/* العنوان + Tagline */}
              <h3 className="text-lg font-medium text-white">{content.title}</h3>
              <p className="mt-1 text-sm text-white/50">{content.tagline}</p>

              {/* المميزات */}
              <ul className="mt-5 space-y-2.5">
                {content.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400
                           transition-all duration-200 group-hover:gap-2.5 group-hover:text-brand-300"
              >
                {t({ en: "Start now", ar: "ابدأ الآن" })}
                <ArrowIcon className="h-4 w-4" />
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* بانر تحفيزي كبير */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative mt-16 overflow-hidden rounded-3xl border border-white/10
                   bg-gradient-to-br from-brand-600/20 via-ink-900 to-ink-950 p-10 text-center sm:p-14"
      >
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
          {t({ en: "Got a project in mind?", ar: "عندك مشروع في بالك؟" })}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          {t({
            en: "Tell me about it — most conversations turn into a plan within a day.",
            ar: "احكيلي عنه — أغلب المحادثات بتتحول لخطة واضحة خلال يوم.",
          })}
        </p>
        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3
                     text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-600"
        >
          {t({ en: "Let's get started", ar: "يلا نبدأ" })}
          <ArrowIcon className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}