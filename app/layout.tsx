import type { Metadata, Viewport } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import { CONTACT, ASSET_PATHS, EXTERNAL_URLS } from "@/lib/constants";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(EXTERNAL_URLS.PORTFOLIO),
  title: {
    default: `${CONTACT.NAME} - Software Engineer & Full Stack Developer`,
    template: `%s | ${CONTACT.NAME}`,
  },
  description:
    "Dheeresh Agarwal is a software engineer and full-stack developer specializing in React, Next.js, TypeScript, and Node.js. Experience at RingCentral and TaxHoa. Portfolio showcasing projects and expertise.",
  keywords: [
    "Dheeresh Agarwal",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "JavaScript",
    "Portfolio",
    "RingCentral",
    "TaxHoa",
    "IIT Bhubaneswar",
    "Indian Institute of Technology Bhubaneswar",
    "Indian Institute of Technology",
    "IITBBS",
    "IIT",
    "India",
    "Agra",
    "Software Development",
    "Web Applications",
    "Open Source",
  ],
  authors: [{ name: CONTACT.NAME, url: EXTERNAL_URLS.PORTFOLIO }],
  creator: CONTACT.NAME,
  publisher: CONTACT.NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: EXTERNAL_URLS.PORTFOLIO,
    title: `${CONTACT.NAME} - Software Engineer & Full Stack Developer`,
    description:
      "Software engineer specializing in React, Next.js, TypeScript, and Node.js. Experience at RingCentral and TaxHoa.",
    siteName: `${CONTACT.NAME} Portfolio`,
    images: [
      {
        url: ASSET_PATHS.LOGOS.PORTFOLIO,
        width: 1200,
        height: 630,
        alt: `${CONTACT.NAME} - Software Engineer Portfolio`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONTACT.NAME} - Software Engineer & Full Stack Developer`,
    description:
      "Software engineer specializing in React, Next.js, TypeScript, and Node.js. Experience at RingCentral and TaxHoa.",
    images: [ASSET_PATHS.LOGOS.PORTFOLIO],
    creator: "@dheereshagrwal",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "portfolio",
  classification: "Personal Portfolio Website",
  referrer: "origin-when-cross-origin",
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
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
