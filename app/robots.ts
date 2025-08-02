import { MetadataRoute } from "next";
import { EXTERNAL_URLS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/", "/admin/"],
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/", "/admin/"],
        crawlDelay: 1,
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "TwitterBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${EXTERNAL_URLS.PORTFOLIO}/sitemap.xml`,
    host: EXTERNAL_URLS.PORTFOLIO,
  };
}
