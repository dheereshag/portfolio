import type { Metadata, Viewport } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import { CONTACT } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: CONTACT.NAME,
    template: `%s | ${CONTACT.NAME}`,
  },
  description:
    "Software engineer, learner, and amateur photographer. Portfolio showcasing projects and experience.",
  keywords: [
    "Dheeresh Agarwal",
    "Software Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: CONTACT.NAME, url: "https://dheereshagrwal.vercel.app" }],
  creator: CONTACT.NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dheereshagrwal.vercel.app",
    title: CONTACT.NAME,
    description: "Software engineer, learner, and amateur photographer",
    siteName: CONTACT.NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: CONTACT.NAME,
    description: "Software engineer, learner, and amateur photographer",
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
