// src/components/Contact.tsx

"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ─────────────────────────────────────────────
// ⚠️ عدّلي هاي الروابط والمعلومات
// ─────────────────────────────────────────────
const CONTACT_INFO = {
  email: "khawlabd1212@gmail.com",
  location: { en: "Syria", ar: "سوريا" },
  github: "https://github.com/khawla-dev",      // ← غيريه
  linkedin: "https://linkedin.com/in/khawla-dev", // ← غيريه
  whatsapp: "",                                  // ← اختياري
};

// ─────────────────────────────────────────────
// أيقونات SVG (لأن lucide-react ما فيها Github/Linkedin)
// ─────────────────────────────────────────────
function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
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

function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
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

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const isValid =
    form.name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.message.trim().length > 5;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    setStatus("loading");
    try {
      // ⚠️ استبدلي هالجزء بربط فعلي لباك-إند لاحقاً:
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Failed");

      await new Promise((resolve) => setTimeout(resolve, 1200)); // مؤقت — احذفيه بعد الربط

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
      {/* الترويسة */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-mono mb-4">
          {t({ en: "06 — Contact", ar: "٠٦ — تواصل" })}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t({ en: "Let's build something together", ar: "يلا نبني إشي سوا" })}
        </h2>
        <p className="mt-3 text-white/60">
          {t({
            en: "Have a project, a question, or just want to say hi? I read every message.",
            ar: "عندك مشروع، سؤال، أو بس حابة تسلّمي؟ بقرأ كل رسالة توصلني.",
          })}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">
        {/* معلومات التواصل */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5
                       transition-all duration-200 hover:border-brand-500/40 hover:bg-white/[0.05]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10">
              <Mail className="h-5 w-5 text-brand-400" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white/50">
                {t({ en: "Email", ar: "الإيميل" })}
              </p>
              <p className="truncate text-sm text-white">{CONTACT_INFO.email}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10">
              <MapPin className="h-5 w-5 text-brand-400" />
            </div>
            <div>
              <p className="text-xs text-white/50">
                {t({ en: "Location", ar: "الموقع" })}
              </p>
              <p className="text-sm text-white">
                {t({
                  en: CONTACT_INFO.location.en,
                  ar: CONTACT_INFO.location.ar,
                })}
              </p>
            </div>
          </div>

          {CONTACT_INFO.whatsapp && (
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5
                         transition-all duration-200 hover:border-green-500/40 hover:bg-white/[0.05]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
                <MessageCircle className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-xs text-white/50">
                  {t({ en: "WhatsApp", ar: "واتساب" })}
                </p>
                <p className="text-sm text-white">
                  {t({ en: "Chat now", ar: "تواصل مباشر" })}
                </p>
              </div>
            </a>
          )}

          <div className="flex gap-3 pt-2">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10
                         text-white/70 transition-all duration-200 hover:border-brand-500/40 
                         hover:text-white hover:bg-brand-500/10"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10
                         text-white/70 transition-all duration-200 hover:border-brand-500/40 
                         hover:text-white hover:bg-brand-500/10"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* نموذج التواصل */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs text-white/50">
                {t({ en: "Name", ar: "الاسم" })}
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t({ en: "Your name", ar: "اسمك" })}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white
                           placeholder:text-white/30 outline-none transition-colors duration-200 
                           focus:border-brand-500/60 focus:bg-white/[0.07]"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs text-white/50">
                {t({ en: "Email", ar: "الإيميل" })}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white
                           placeholder:text-white/30 outline-none transition-colors duration-200 
                           focus:border-brand-500/60 focus:bg-white/[0.07]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs text-white/50">
                {t({ en: "Message", ar: "الرسالة" })}
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t({
                  en: "Tell me about your project...",
                  ar: "احكيلي عن مشروعك...",
                })}
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white
                           placeholder:text-white/30 outline-none transition-colors duration-200 
                           focus:border-brand-500/60 focus:bg-white/[0.07]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!isValid || status === "loading"}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3
                       text-sm font-medium text-white transition-all duration-200
                       hover:bg-brand-600 hover:scale-[1.02]
                       disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t({ en: "Sending...", ar: "جارِ الإرسال..." })}
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {t({ en: "Send message", ar: "إرسال الرسالة" })}
              </>
            )}
          </button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2 text-sm text-emerald-400"
            >
              <CheckCircle2 className="h-4 w-4" />
              {t({
                en: "Message sent — I'll get back to you soon.",
                ar: "تم إرسال رسالتك — رح أرد عليك قريباً.",
              })}
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2 text-sm text-red-400"
            >
              <AlertCircle className="h-4 w-4" />
              {t({
                en: "Something went wrong. Try emailing me directly.",
                ar: "صار في خطأ. جربي تراسليني مباشرة عبر الإيميل.",
              })}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}