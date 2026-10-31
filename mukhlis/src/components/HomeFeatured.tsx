import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ProjectCard } from "@/components/ProjectCard";
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
        {featured.map((p, i) => (
          <RevealOnScroll key={p.id} delay={i % 2 === 0 ? 0 : 90}>
            <ProjectCard project={p} index={i} />
          </RevealOnScroll>
        ))}
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
