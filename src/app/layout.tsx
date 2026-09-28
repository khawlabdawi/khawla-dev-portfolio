// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import PersonJsonLd from "@/components/PersonJsonLd";
import WebSiteJsonLd from "@/components/WebSiteJsonLd";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://khawla-dev.vercel.app";
const SITE_NAME = "Khawla Dev";
const SITE_TITLE = "Khawla Dev | Fullstack Software Engineer";
const SITE_DESCRIPTION =
  "Fullstack Software Engineer specialized in PHP, Laravel, and React. Building complete web applications from idea to deployment.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Khawla Dev",
    "Fullstack Developer",
    "Software Engineer",
    "Laravel Developer",
    "React Developer",
    "PHP Developer",
    "Next.js Developer",
    "Web Development",
    "Graduation Projects",
  ],
  authors: [{ name: "Khawla", url: SITE_URL }],
  creator: "Khawla Dev",
  publisher: "Khawla Dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SY"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@khawla_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060A12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-ink-900 text-gray-100`}
      >
        <LanguageProvider>
          <ScrollToTop />
          <PersonJsonLd />
          <WebSiteJsonLd />
          <OrganizationJsonLd />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}