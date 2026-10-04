import { ARTICLES } from "@/lib/blog";

export const slugifyTag = (tag: string) =>
  tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const BLOG_TAGS = [...new Set(ARTICLES.flatMap((article) => article.tags))];
