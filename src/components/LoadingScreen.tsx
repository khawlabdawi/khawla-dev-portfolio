// src/components/LoadingScreen.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 backdrop-blur-xl"
    >
      {/* خلفية متوهجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-ink-950 to-ink-900" />

      {/* المحتوى */}
      <div className="relative flex flex-col items-center gap-6">
        {/* دائرة اللوغو */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
          {/* الحلقة الدوارة (Spinner) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(
                from 0deg,
                transparent 0deg,
                transparent 200deg,
                #1E73B3 280deg,
                #649FC8 340deg,
                transparent 360deg
              )`,
              padding: "3px",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
            }}
          />

          {/* حلقة إضافية معاكسة */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-2 rounded-full"
            style={{
              background: `conic-gradient(
                from 0deg,
                transparent 0deg,
                transparent 240deg,
                #649FC8 320deg,
                transparent 360deg
              )`,
              padding: "2px",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
            }}
          />

          {/* اللوغو */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-brand-500/40"
          >
            <Image
              src="/logo.png"
              alt="Khawla Dev"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* توهج أزرق */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-brand-500/30 blur-2xl -z-10"
          />
        </div>

        {/* نص التحميل */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-brand-400 text-sm font-mono">
            Loading...
          </p>

          {/* نقاط متحركة */}
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 rounded-full bg-brand-500"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}