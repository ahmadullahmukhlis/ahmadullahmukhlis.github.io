import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECT_CATEGORIES, languageColor, privacyColor } from "@/lib/types";
import type { Project } from "@/lib/types";

const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  PROJECT_CATEGORIES.map((c) => [c.key, c.label])
);

function initials(title: string) {
  return title
    .split(/[\s-]+/)
    .filter((w) => /^[A-Za-z0-9]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

export function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const accent = languageColor(p.language);
  const preview = p.images?.[0];
  const category = CATEGORY_LABELS[p.categories[0] ?? ""] ?? "Software project";

  return (
    <Link
      href={`/projects/${p.id}`}
      className="card-line glow-card stagger-card group flex h-full w-full flex-col overflow-hidden text-left"
      style={{ "--card-delay": `${120 + index * 55}ms`, "--accent": accent } as CSSProperties}
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.07] bg-panel">
        {preview ? (
          <Image
            src={preview}
            alt={`${p.title} interface preview`}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="image-zoom object-cover object-top"
          />
        ) : (
          <div className="project-cover flex h-full flex-col justify-between p-5 md:p-6" aria-hidden="true">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{category}</span>
              <span className="font-mono text-[11px] text-muted/70">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex items-end justify-between gap-4">
              <span className="project-monogram">{initials(p.title)}</span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-charcoal/60 px-3 py-1 font-mono text-[11px] text-soft backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                {p.language}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="flex items-center gap-1.5" style={{ color: privacyColor(p.privacy) }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: privacyColor(p.privacy) }} />
            {p.privacy}
          </span>
          {preview ? (
            <>
              <span className="h-3 w-px bg-white/10" aria-hidden="true" />
              <span className="text-muted">{p.language}</span>
            </>
          ) : null}
        </div>

        <h3 className="mt-3 font-sans text-xl font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-gold">
          {p.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-muted">{p.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tech.slice(0, 3).map((t) => (
            <li key={t} className="tag-pill !px-2.5 !py-1 !text-[11px]">
              {t}
            </li>
          ))}
          {p.tech.length > 3 ? (
            <li className="tag-pill !px-2.5 !py-1 !text-[11px] !text-muted">+{p.tech.length - 3}</li>
          ) : null}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
          <span className="link-arrow text-xs group-hover:text-gold">
            View case study
            <span className="arr" aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
