"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { PROJECT_CATEGORIES, languageColor, privacyColor } from "@/lib/types";
import type { Project } from "@/lib/types";
import projectsData from "@/data/projects.json";

const PROJECTS = projectsData as Project[];
const PAGE_SIZE = 8;

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [selected]);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.categories.includes(filter)),
    [filter]
  );

  const shown = filtered.slice(0, visible);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <RevealOnScroll>
        <SectionHeading
          index="02"
          title="Selected work"
          hint={`A curated view across ${PROJECTS.length} shipped projects, including public repositories, private platforms, dashboards, APIs, and mobile work.`}
        />
      </RevealOnScroll>

      <div className="mt-10">
        <RevealOnScroll delay={80}>
          <div className="motion-panel stagger-card p-4" style={{ "--card-delay": "120ms" } as CSSProperties}>
            <p className="mb-3 font-mono text-xs text-muted">Filter work</p>
            <div className="flex flex-wrap gap-2.5">
              {PROJECT_CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => {
                    setFilter(c.key);
                    setVisible(PAGE_SIZE);
                  }}
                  className={`tag-pill ${filter === c.key ? "pill-active" : ""}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {shown.map((p, i) => {
          const dot = languageColor(p.language);
          const preview = p.images?.[0];
          return (
            <RevealOnScroll key={p.id} delay={(i % 2) * 80}>
              <button
                type="button"
                onClick={() => setSelected(p)}
                className="card-line glow-card stagger-card group flex h-full w-full flex-col overflow-hidden text-left"
                style={{ "--card-delay": `${120 + i * 55}ms` } as CSSProperties}
                aria-label={`Open details for ${p.title}`}
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
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: dot }}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-gold">Case study</p>
                        <p className="mt-2 max-w-sm text-xl font-bold text-ink">{p.title}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
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
                    <span className="font-mono text-xs text-muted">Case study</span>
                  </div>

                  <h3 className="mt-4 font-sans text-xl font-bold text-ink transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted">
                    Updated {p.updated}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                    {p.summary}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.slice(0, 3).map((t) => (
                      <li key={t} className="tag-pill !px-3 !py-1 !text-xs">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4">
                    <span className="link-arrow text-xs">
                      Details
                      <span className="arr" aria-hidden="true">→</span>
                    </span>
                    <span
                      className="font-mono text-xs"
                      style={{ color: dot }}
                      aria-hidden="true"
                    >
                      ●
                    </span>
                  </div>
                </div>
              </button>
            </RevealOnScroll>
          );
        })}
      </div>

      {filtered.length > visible ? (
        <div className="mt-10 flex justify-center">
          <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)} className="btn-ghost !text-xs">
            Show more ({filtered.length - visible} left)
          </button>
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className="mt-10 text-center font-mono text-sm text-muted">
          {"// nothing here yet in this category"}
        </p>
      ) : null}

      {selected ? (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/80 p-0 backdrop-blur-sm md:items-center md:p-6"
      onClick={onClose}
    >
      <div
        className="card-line stagger-card max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-b-none p-6 md:rounded-lg md:p-8"
        style={{ "--card-delay": "40ms" } as CSSProperties}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-gold">Project detail</span>
              <span className="font-mono text-xs text-muted">·</span>
              <span className="font-mono text-xs text-muted">{project.privacy}</span>
              <span className="font-mono text-xs text-muted">·</span>
              <span className="font-mono text-xs text-muted">updated {project.updated}</span>
            </div>
            <h3 className="mt-2 font-sans text-2xl font-bold text-ink">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 font-mono text-muted transition-colors hover:border-gold hover:text-gold"
          >
            ✕
          </button>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-ink/90">{project.details}</p>

        {project.images && project.images.length > 0 ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {project.images.map((src) => (
              <div key={src} className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-panel">
                <Image src={src} alt={`${project.title} screenshot`} fill sizes="256px" className="image-zoom object-cover" />
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-6">
          <p className="mono-label">key features</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 font-mono text-xs text-muted">
                <span className="mt-0.5 text-gold" aria-hidden="true">+</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-white/8 pt-5">
          <p className="mono-label">stack</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="tag-pill !text-xs !px-3 !py-1">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
