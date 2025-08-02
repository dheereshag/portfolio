import { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { EXTERNAL_URLS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = EXTERNAL_URLS.PORTFOLIO;
  const lastModified = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}#about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // External project pages - only include your own projects, not external ones
  const ownProjectPages: MetadataRoute.Sitemap = projects
    .filter(
      (project) =>
        project.link.href.includes("dheereshagrwal") ||
        project.link.href.includes("vercel.app")
    )
    .map((project) => ({
      url: project.link.href,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...ownProjectPages];
}
