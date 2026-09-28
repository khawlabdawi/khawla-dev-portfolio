// src/app/opengraph-image.tsx

import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

// ⚠️ مهم: nodejs بدل edge (نحتاج fs)
export const runtime = "nodejs";
export const alt = "Khawla Dev — Fullstack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // قراءة الشعار من public/logo.png
  const logoData = await readFile(
    join(process.cwd(), "public", "logo.png")
  );
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 20%, #1E73B3 0%, #060A12 45%, #060608 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* نسيج الأصفار والواحدات */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            fontSize: 12,
            color: "#649FC8",
            fontFamily: "monospace",
            display: "flex",
            flexWrap: "wrap",
            overflow: "hidden",
            lineHeight: 1.4,
            padding: 20,
          }}
        >
          {Array.from({ length: 400 })
            .map(() => (Math.random() > 0.5 ? "1" : "0"))
            .join(" ")}
        </div>

        {/* ✅ الشعار (base64) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 180,
            height: 180,
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid rgba(100,159,200,0.4)",
            marginBottom: 40,
            boxShadow: "0 0 80px rgba(30,115,179,0.6)",
            zIndex: 1,
            background: "#060608",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="Khawla Dev Logo"
            width={180}
            height={180}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* الاسم */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: -2,
            zIndex: 1,
            display: "flex",
          }}
        >
          Khawla
          <span style={{ color: "#649FC8" }}>.dev</span>
        </div>

        {/* التخصص */}
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "rgba(255,255,255,0.7)",
            zIndex: 1,
            display: "flex",
          }}
        >
          Fullstack Software Engineer
        </div>

        {/* التقنيات */}
        <div
          style={{
            marginTop: 32,
            display: "flex",
            gap: 12,
            zIndex: 1,
          }}
        >
          {["React", "Next.js", "Laravel", "PHP"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                background: "rgba(30,115,179,0.2)",
                border: "1px solid rgba(100,159,200,0.3)",
                color: "#649FC8",
                fontSize: 20,
                fontFamily: "monospace",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* شريط سفلي */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background:
              "linear-gradient(90deg, #1E73B3 0%, #649FC8 50%, #1E73B3 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}