export interface Project {
  id: string;
  repo: string;
  title: string;
  privacy: string;
  language: string;
  updated: string;
  categories: string[];
  local?: string;
  summary: string;
  details: string;
  tech: string[];
   features: string[];
  images?: string[];
  video?: string;
}

export const PROJECT_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "mobile", label: "Mobile products" },
  { key: "spring", label: "Platform services" },
  { key: "vue", label: "Interactive web apps" },
  { key: "laravel", label: "Business systems" },
  { key: "website", label: "Website" },
  { key: "fullstack", label: "Full-stack platforms" },
] as const;

export type CategoryKey = (typeof PROJECT_CATEGORIES)[number]["key"];

const LANGUAGE_COLORS: Record<string, string> = {
  Kotlin: "#5b3cc4",
  Vue: "#2f7d5c",
  JavaScript: "#8a6d00",
  Blade: "#c22a1f",
  TypeScript: "#255f9e",
  HTML: "#b03a17",
  PHP: "#5a5d8a",
  Dart: "#0d5a95",
  CSS: "#553080",
  Markdown: "#6f6f6f",
  "Vue/PHP": "#2f7d5c",
  Less: "#1d365d",
};

const PRIVACY_COLORS: Record<string, string> = {
  Public: "#2f6b4f",
  Private: "#6d6659",
};

export function languageColor(lang: string): string {
  return LANGUAGE_COLORS[lang] ?? "#6d6659";
}

export function privacyColor(priv: string): string {
  return PRIVACY_COLORS[priv] ?? "#6d6659";
}
