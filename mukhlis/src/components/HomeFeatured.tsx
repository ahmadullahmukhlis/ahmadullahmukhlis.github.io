import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { languageColor, privacyColor } from "@/lib/types";
import type { Project } from "@/lib/types";
import projectsData from "@/data/projects.json";

const PROJECTS = projectsData as Project[];

const FEATURED_REPO_IDS = [
  "api-gateway",
  "erp",
  "vidbuddy-desktop",
  "course",
  "hr-laravel",
  "sarafi-laravel",
  "tax-system",
  "donor-project",
];

const featured = FEATURED_REPO_IDS.map((id) => PROJECTS.find((p) => p.id === id))
  .filter(Boolean)
  .slice(0, 4) as Project[];

export function HomeFeatured() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-24">
      <RevealOnScroll>
        <SectionHeading
          index="02"
          title="Featured work"
          hint="A selection of platforms, dashboards, mobile apps, and APIs shipped across 45+ projects."
        />
      </RevealOnScroll>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => {
          const preview = p.images?.[0];
          return (
            <RevealOnScroll key={p.id} delay={i % 2 === 0 ? 0 : 90}>
              <Link
                href="/projects"
                className="card-line glow-card stagger-card group flex h-full w-full flex-col overflow-hidden"
                style={{ "--card-delay": `${120 + i * 55}ms` } as CSSProperties}
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-panel">
                  {preview ? (
                    <Image
                      src={preview}
                      alt={`${p.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="image-zoom object-cover"
                    />
                  ) : (
                    <div className="project-visual flex h-full flex-col justify-between p-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-muted">
                          {String(i + 1).padStart(2, "0")}/
                        </span>
                        <span
                          className="h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-125"
                          style={{ backgroundColor: languageColor(p.language) }}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-gold">Case study</p>
                        <p className="mt-2 font-sans text-xl font-bold text-ink">{p.title}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="flex items-center gap-2 font-mono text-xs"
                      style={{ color: privacyColor(p.privacy) }}
                    >
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: privacyColor(p.privacy) }}
                      />
                      {p.privacy}
                    </span>
                    <span className="font-mono text-xs text-muted">{p.language}</span>
                  </div>
                  <h3 className="mt-4 font-sans text-xl font-bold text-ink transition-colors duration-300 group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted">{p.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.slice(0, 3).map((t) => (
                      <li key={t} className="tag-pill !px-3 !py-1 !text-xs">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </RevealOnScroll>
          );
        })}
      </div>

      <RevealOnScroll delay={120}>
        <div className="mt-10 flex justify-center">
          <Link href="/projects" className="btn-solid-gold !text-xs">
            View all {PROJECTS.length}+ projects
            <span className="arr" aria-hidden="true">→</span>
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}