import type { MetadataRoute } from "next";
import projectsData from "@/data/projects.json";
import type { Project } from "@/lib/types";
import { SERVICES } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";
import { ARTICLES, BLOG_CATEGORIES } from "@/lib/blog";

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
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/knowledge`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/case-studies`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/author/ahmadullah-mukhlis`, changeFrequency: "monthly", priority: 0.7 },
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
    ...PROJECTS.map((project) => ({ url: `${SITE_URL}/case-studies/${project.id}`, changeFrequency: "monthly" as const, priority: 0.75 })),
    ...BLOG_CATEGORIES.map((category) => ({ url: `${SITE_URL}/blog/${category.slug}`, lastModified: new Date("2026-09-27"), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...ARTICLES.map((article) => ({ url: `${SITE_URL}/blog/${article.slug}`, lastModified: new Date(article.updated), changeFrequency: "monthly" as const, priority: article.featured ? 0.95 : 0.8 })),
  ];
}
