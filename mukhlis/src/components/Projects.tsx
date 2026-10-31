"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECT_CATEGORIES } from "@/lib/types";
import type { Project } from "@/lib/types";
import projectsData from "@/data/projects.json";

const PROJECTS = projectsData as Project[];
const PAGE_SIZE = 8;

export function Projects({
  title = "Selected work",
  index = "02",
  hint,
}: {
  title?: string;
  index?: string;
  hint?: string;
}) {
  const [filter, setFilter] = useState<string>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const filtered = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.categories.includes(filter)),
    [filter]
  );

  const shown = filtered.slice(0, visible);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-24">
      <RevealOnScroll>
        <SectionHeading
          index={index}
          title={title}
          hint={
            hint ??
            `A curated view across ${PROJECTS.length} shipped projects, including public repositories, private platforms, dashboards, APIs, and mobile work.`
          }
        />
      </RevealOnScroll>

      <div className="mt-12">
        <RevealOnScroll delay={80}>
          <div className="motion-panel stagger-card p-5" style={{ "--card-delay": "120ms" } as CSSProperties}>
            <p className="mb-4 font-mono text-xs text-muted">Filter work</p>
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

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {shown.map((p, i) => (
          <RevealOnScroll key={p.id} delay={i % 2 === 0 ? 0 : 90}>
            <ProjectCard project={p} index={i} />
          </RevealOnScroll>
        ))}
      </div>

      {filtered.length > visible ? (
        <div className="mt-12 flex justify-center">
          <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)} className="btn-ghost !text-xs">
            Show more ({filtered.length - visible} left)
          </button>
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className="mt-12 text-center font-mono text-sm text-muted">
          {"// nothing here yet in this category"}
        </p>
      ) : null}

    </section>
  );
}
