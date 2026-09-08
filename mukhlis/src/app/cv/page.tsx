import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Navbar } from "@/components/Navbar";
import { PrintButton } from "@/components/PrintButton";
import { PROFILE, SOCIALS, EXPERIENCE, EDUCATION, CV_SKILLS } from "@/lib/data";
import projectsData from "@/data/projects.json";
import type { Project } from "@/lib/types";

export const metadata: Metadata = {
  title: "CV · Ahmadullah Mukhlis",
  description: "Resume and cover letter of Ahmadullah Mukhlis.",
};

const PROJECTS = projectsData as Project[];
const FEATURED_PROJECT_IDS = [
  "api-gateway",
  "erp",
  "vidbuddy-desktop",
  "course",
  "hr-laravel",
  "sarafi-laravel",
  "tax-system",
  "donor-project",
];
const featured = FEATURED_PROJECT_IDS.map(
  (id) => PROJECTS.find((p) => p.id === id)
).filter(Boolean) as Project[];

function CvSection({ title }: { title: string }) {
  return (
    <div className="section-line mb-4">
      <h2 className="font-sans text-sm font-bold uppercase text-gold">
        {title}
      </h2>
    </div>
  );
}

export default function CvPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 pt-28 pb-20 md:pt-32">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="link-arrow text-xs">
            ← back to portfolio
          </Link>
          <PrintButton />
        </div>

        <div className="big-card stagger-card grid overflow-hidden p-0 md:grid-cols-[310px_1fr]">
          <aside className="border-b border-white/8 bg-charcoal/35 p-7 md:border-b-0 md:border-r md:p-8">
            <div className="mx-auto h-32 w-24 overflow-hidden rounded-lg border border-gold/60 bg-panel">
              <Image
                src={PROFILE.avatar}
                alt={PROFILE.name}
                width={144}
                height={180}
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="mt-5 text-center font-sans text-2xl font-bold leading-tight text-ink">
              {PROFILE.name}
            </h1>
            <p className="mt-2 text-center font-mono text-xs text-gold">
              {PROFILE.role}
            </p>
            <p className="mt-3 text-center font-mono text-xs text-muted">
              {PROFILE.location} · Working worldwide
            </p>

            <div className="mt-8">
              <CvSection title="Contact" />
              <ul className="space-y-2.5 font-mono text-xs text-muted">
                <li className="break-all">
                  <a href={`mailto:${PROFILE.email}`} className="hover:text-gold">
                    {PROFILE.email}
                  </a>
                </li>
                <li className="flex flex-wrap gap-x-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold"
                      aria-label={s.label}
                    >
                      {s.label}
                    </a>
                  ))}
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <CvSection title="Skills" />
              <ul className="flex flex-wrap gap-2">
                {CV_SKILLS.map((s) => (
                  <li key={s} className="tag-pill !px-2.5 !py-1 !text-[11px]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <CvSection title="Education" />
              <ul className="space-y-4">
                {EDUCATION.map((e) => (
                  <li key={e.title}>
                    <p className="text-sm font-semibold text-ink">{e.title}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted">
                      {e.org} · {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="p-7 md:p-10">
            <div className="mb-9 border-b border-white/10 pb-7">
              <p className="mono-label text-gold">Resume</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-ink">
                Full-stack engineer focused on secure platforms, modern interfaces, and reliable delivery.
              </h2>
            </div>

            <CvSection title="Profile" />
            <p className="text-sm leading-relaxed text-muted">
              Experienced in developing secure and high-performance solutions for
              banking, digital payment systems, enterprise management platforms,
              healthcare systems, MIS platforms, e-commerce applications, and
              multi-country digital platforms. Strong understanding of software
              architecture, API integrations, DevOps practices, CI/CD pipelines,
              cloud deployment, database optimization, and modern UI/UX
              principles.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Currently contributing to AFPS (Afghanistan Payment System) and
              banking gateway integrations — including offline banking
              integrations, digital payment infrastructure, enterprise APIs, and
              secure financial transaction systems.
            </p>

            <div className="mt-10">
              <CvSection title="Experience" />
              <div className="space-y-7">
                {EXPERIENCE.map((r, i) => (
                  <div
                    key={r.role}
                    className="stagger-card border-l border-gold/35 pl-5 transition-colors duration-300 hover:border-gold"
                    style={{ "--card-delay": `${120 + i * 70}ms` } as CSSProperties}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-sans text-base font-bold text-ink">
                        {r.role}
                      </h3>
                      <span className="font-mono text-[11px] text-muted">
                        {r.period}
                      </span>
                    </div>
                    <p className="mt-0.5 font-mono text-xs text-gold/80">
                      {r.org}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {r.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <CvSection title="Selected projects" />
              <ul className="grid gap-4">
                {featured.map((p, i) => (
                  <li
                    key={p.id}
                    className="card-line stagger-card grid gap-1 p-4"
                    style={{ "--card-delay": `${180 + i * 55}ms` } as CSSProperties}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-sans text-sm font-semibold text-ink">
                        {p.title}
                      </p>
                      <span className="font-mono text-[11px] text-muted">
                        {p.privacy} · {p.updated}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted">{p.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
