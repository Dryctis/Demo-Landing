// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 SEO global de tu landing
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Landing veloz y moderna | Clyvert (Demo)",
    template: "%s | Clyvert (Demo)",
  },
  description:
    "Landing pages dark, rápidas y optimizadas para SEO. Next.js + Tailwind + animaciones sutiles.",
  keywords: [
    "landing pages",
    "next.js",
    "tailwindcss",
    "desarrollo web",
    "vercel",
    "seo",
  ],
  authors: [{ name: "Clyvert" }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Clyvert",
    title: "Landing veloz y moderna | Clyvert (Demo)",
    description:
      "Landing pages dark, rápidas y optimizadas para SEO. Next.js + Tailwind + animaciones sutiles.",
    locale: "es_ES",
    images: [
      {
        url: "/og.jpg", // súbelo a /public
        width: 1200,
        height: 630,
        alt: "Clyvert Demo - Landing moderna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing veloz y moderna | Clyvert (Demo)",
    description:
      "Landing pages dark, rápidas y optimizadas para SEO. Next.js + Tailwind + animaciones sutiles.",
    images: ["/og.jpg"],
    creator: "@tuusuario",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
