// src/components/Hero.tsx

"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-900"
    >
      {/* خلفية بتدرج لوني */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-ink-900 to-ink-950" />

      {/* نقاط زخرفية */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl" />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* اللوغو */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-brand-500 to-accent-300 p-1">
              <div className="w-full h-full rounded-full bg-ink-900 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Khawla Dev Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-xl -z-10" />
          </div>
        </div>

        {/* التحية */}
        <p className="text-accent-300 font-mono text-sm md:text-base mb-4">
          {t({ en: "Hello, I'm", ar: "مرحباً، أنا" })}
        </p>

        {/* الاسم */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          {t({ en: "Khawla", ar: "خولة" })}
          <span className="text-brand-500">.</span>
        </h1>

        {/* التخصص */}
        <h2 className="text-xl md:text-3xl font-semibold text-gray-100 mb-6">
          {t({
            en: "Fullstack Software Engineer",
            ar: "مهندسة برمجيات Fullstack",
          })}
        </h2>

        {/* الجملة التعريفية */}
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t({
            en: "I build complete web applications from idea to deployment.",
            ar: "أبني تطبيقات ويب كاملة من الفكرة للنشر.",
          })}
        </p>

        {/* الأزرار */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-medium transition-all hover:scale-105"
          >
            {t({ en: "Contact Me", ar: "تواصل معي" })}
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white font-medium transition-all hover:scale-105"
          >
            {t({ en: "View My Work", ar: "شاهد أعمالي" })}
          </a>
        </div>

        {/* روابط التواصل */}
        <div className="flex gap-6 justify-center text-gray-400">
          <a
            href="https://github.com/khawla-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/khawla-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:khawlabd1212@gmail.com"
            className="hover:text-brand-500 transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      {/* مؤشر التمرير للأسفل */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-brand-500/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-brand-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}