// src/components/Footer.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

// ⚠️ غيّري الروابط للروابط الحقيقية
const SOCIALS = {
  github: "https://github.com/khawla-dev",
  linkedin: "https://linkedin.com/in/khawla-dev",
  email: "khawlabd1212@gmail.com",
};

const QUICK_LINKS = [
  { href: "/", en: "Home", ar: "الرئيسية" },
  { href: "/about", en: "About", ar: "من أنا" },
  { href: "/services", en: "Services", ar: "خدماتي" },
  { href: "/skills", en: "Skills", ar: "مهاراتي" },
  { href: "/projects", en: "Projects", ar: "أعمالي" },
  { href: "/contact", en: "Contact", ar: "تواصل" },
];

const SERVICES = [
  { en: "Graduation Projects", ar: "مشاريع تخرج", href: "/services#graduation-projects" },
  { en: "Software Development", ar: "تطوير برمجيات", href: "/services#software-development" },
  { en: "Premium Laptop Bags", ar: "حقائب لابتوب فاخرة", href: "/services#laptop-bags" },
  { en: "Technical Interviews", ar: "مقابلات تقنية", href: "/services#tech-interviews" },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socialItems = [
    { icon: GithubIcon, href: SOCIALS.github, label: "GitHub", external: true },
    { icon: LinkedinIcon, href: SOCIALS.linkedin, label: "LinkedIn", external: true },
    { icon: Mail, href: `mailto:${SOCIALS.email}`, label: "Email", external: false },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      {/* خط متدرج علوي */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_auto]">
          {/* البراند */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/15">
                <Image
                  src="/logo.png"
                  alt="Khawla Dev"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              <span className="text-base font-medium text-white">
                khawla<span className="text-brand-400">.dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {t({
                en: "Fullstack engineer building reliable web products, from idea to deployment.",
                ar: "مهندسة Fullstack بتبني منتجات ويب موثوقة، من الفكرة لحد النشر.",
              })}
            </p>

            <div className="mt-6 flex gap-2.5">
              {socialItems.map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10
                             text-white/60 transition-all duration-200 hover:-translate-y-0.5
                             hover:border-brand-500/50 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white">
              {t({ en: "Quick links", ar: "روابط سريعة" })}
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-brand-400"
                  >
                    {t({ en: link.en, ar: link.ar })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* الخدمات */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white">
              {t({ en: "Services", ar: "الخدمات" })}
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.en}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-brand-400"
                  >
                    {t({ en: service.en, ar: service.ar })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* زر العودة للأعلى */}
          <div className="flex items-start lg:justify-end">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5
                         text-xs text-white/60 transition-colors duration-200
                         hover:border-brand-500/50 hover:text-white cursor-pointer"
            >
              {t({ en: "Back to top", ar: "للأعلى" })}
              <ArrowUp className="h-3.5 w-3.5" />
            </motion.button>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} Khawla Dev.{" "}
            {t({ en: "All rights reserved.", ar: "جميع الحقوق محفوظة." })}
          </p>
          <p>
            {t({
              en: "Built with Next.js & Tailwind CSS",
              ar: "بُني باستخدام Next.js و Tailwind CSS",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}