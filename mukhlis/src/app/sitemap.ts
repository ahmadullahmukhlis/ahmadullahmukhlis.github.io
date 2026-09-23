import type { MetadataRoute } from "next";
import projectsData from "@/data/projects.json";
import type { Project } from "@/lib/types";
import { SERVICES } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

const PROJECTS = projectsData as Project[];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/experience`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cv`, changeFrequency: "monthly", priority: 0.7 },
  ];

  return [
    ...mainRoutes,
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...PROJECTS.map((project) => ({
      url: `${SITE_URL}/projects/${project.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
