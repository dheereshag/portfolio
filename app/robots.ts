import { MetadataRoute } from "next";
import { EXTERNAL_URLS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${EXTERNAL_URLS.PORTFOLIO}/sitemap.xml`,
    host: EXTERNAL_URLS.PORTFOLIO,
  };
}
