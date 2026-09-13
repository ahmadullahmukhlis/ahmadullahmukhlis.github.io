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
  Kotlin: "#7f52ff",
  Vue: "#42b883",
  JavaScript: "#f7df1e",
  Blade: "#ff2d20",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  PHP: "#777bb4",
  Dart: "#0175c2",
  CSS: "#663399",
  Markdown: "#a6a6a6",
  "Vue/PHP": "#42b883",
  Less: "#1d365d",
};

const PRIVACY_COLORS: Record<string, string> = {
  Public: "#3dd68c",
  Private: "#98a1b9",
};

export function languageColor(lang: string): string {
  return LANGUAGE_COLORS[lang] ?? "#98a1b9";
}

export function privacyColor(priv: string): string {
  return PRIVACY_COLORS[priv] ?? "#98a1b9";
}
