// src/components/Footer.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const FOOTER_LINKS = [
  {
    title: { en: "Pages", ar: "الصفحات" },
    links: [
      { href: "/", en: "Home", ar: "الرئيسية" },
      { href: "/about", en: "About", ar: "من أنا" },
      { href: "/services", en: "Services", ar: "الخدمات" },
      { href: "/skills", en: "Skills", ar: "المهارات" },
      { href: "/projects", en: "Projects", ar: "المشاريع" },
      { href: "/contact", en: "Contact", ar: "تواصل" },
    ],
  },
  {
    title: { en: "Services", ar: "الخدمات" },
    links: [
      {
        href: "/services#graduation-projects",
        en: "Graduation Projects",
        ar: "مشاريع تخرج",
      },
      {
        href: "/services#software-development",
        en: "Software Development",
        ar: "تطوير برمجيات",
      },
      {
        href: "/services#laptop-bags",
        en: "Laptop Bags",
        ar: "حقائب لابتوب",
      },
      {
        href: "/services#tech-interviews",
        en: "Tech Interviews",
        ar: "مقابلات تقنية",
      },
    ],
  },
];

// أيقونة GitHub (SVG)
function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
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

// أيقونة LinkedIn (SVG)
function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-ink-950/50">
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* العمود 1 */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-brand-500/30 group-hover:ring-brand-500/60 transition-all">
                <Image
                  src="/logo.png"
                  alt="Khawla Dev"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="text-lg font-medium text-white">
                khawla<span className="text-brand-400">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-md">
              {t({
                en: "Fullstack Software Engineer building complete web applications from idea to deployment.",
                ar: "مهندسة برمجيات Fullstack، أبني تطبيقات ويب كاملة من الفكرة للنشر.",
              })}
            </p>

            <div className="flex gap-3 mt-5">
              <a
                href="https://github.com/khawla-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-brand-500/20 hover:border-brand-500/40 transition-all"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/khawla-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-brand-500/20 hover:border-brand-500/40 transition-all"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:khawlabd1212@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-brand-500/20 hover:border-brand-500/40 transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* أعمدة الروابط */}
          {FOOTER_LINKS.map((column, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {t(column.title)}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-brand-400 transition-colors"
                    >
                      {t({ en: link.en, ar: link.ar })}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {currentYear} Khawla Dev.{" "}
              {t({ en: "All rights reserved.", ar: "جميع الحقوق محفوظة." })}
            </p>
            <p className="text-xs text-white/40 flex items-center gap-1.5">
              {t({ en: "Built with", ar: "صُنع بـ" })}
              <Heart className="h-3 w-3 text-brand-400 fill-brand-400" />
              {t({
                en: "using Next.js & Tailwind",
                ar: "باستخدام Next.js و Tailwind",
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}