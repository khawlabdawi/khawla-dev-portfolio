// src/components/Navbar.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ─────────────────────────────────────────────
// روابط النافبار (صفحات منفصلة)
// ─────────────────────────────────────────────
const NAV_LINKS = [
  { href: "/", en: "Home", ar: "الرئيسية" },
  { href: "/about", en: "About", ar: "من أنا" },
  { href: "/services", en: "Services", ar: "الخدمات" },
  { href: "/skills", en: "Skills", ar: "المهارات" },
  { href: "/projects", en: "Projects", ar: "المشاريع" },
  { href: "/contact", en: "Contact", ar: "تواصل" },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // تصغير النافبار عند التمرير
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // إغلاق قائمة الموبايل عند تغيير الصفحة
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* هالة النافبار */}
      <div className="navbar-halo" aria-hidden="true" />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <motion.nav
          animate={{
            paddingTop: scrolled ? 6 : 10,
            paddingBottom: scrolled ? 6 : 10,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative flex items-center gap-1 rounded-full border border-white/10
                     bg-ink-950/60 pl-3 pr-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                     backdrop-blur-xl backdrop-saturate-150"
        >
          {/* الشعار */}
          <Link
            href="/"
            className="flex items-center gap-2 pr-4 mr-1 border-r border-white/10"
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/15">
              <Image
                src="/logo.png"
                alt="Khawla Dev"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="hidden sm:block text-sm font-medium tracking-tight text-white">
              khawla<span className="text-brand-400">.dev</span>
            </span>
          </Link>

          {/* الروابط - Desktop */}
          <ul className="relative hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`relative z-10 block rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/60 hover:text-white/90"
                    }`}
                  >
                    {t({ en: link.en, ar: link.ar })}
                  </Link>

                  {isActive && (
                    <motion.span
                      layoutId="nav-pill-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-600 to-brand-500"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* زر تبديل اللغة */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="ml-2 flex items-center gap-1.5 rounded-full border border-white/10
                       bg-white/5 px-3 py-2 text-xs font-medium text-white/80
                       transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            <Languages className="h-3.5 w-3.5" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.15 }}
              >
                {lang === "en" ? "AR" : "EN"}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* زر القائمة - Mobile */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden ml-1 flex items-center justify-center rounded-full
                       border border-white/10 bg-white/5 p-2 text-white/80
                       transition-colors hover:bg-white/10 hover:text-white"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </motion.nav>

        {/* قائمة الموبايل */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full mt-3 md:hidden w-full max-w-sm"
            >
              <div className="rounded-3xl border border-white/10 bg-ink-950/90 backdrop-blur-xl p-3 shadow-2xl">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white"
                              : "text-white/70 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {t({ en: link.en, ar: link.ar })}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}