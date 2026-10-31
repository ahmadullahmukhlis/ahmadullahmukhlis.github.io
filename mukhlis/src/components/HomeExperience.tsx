import type { CSSProperties } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { EXPERIENCE } from "@/lib/data";

const VISIBLE = 3;

export function HomeExperience() {
  return (
    <section className="border-y border-white/8 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-24">
        <RevealOnScroll>
          <SectionHeading
            index="03"
            title="Career path"
            hint="From freelance delivery to banking infrastructure at Afghanistan's payment system."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-4">
          {EXPERIENCE.slice(0, VISIBLE).map((role, i) => (
            <RevealOnScroll key={role.key} delay={i * 80}>
              <div
                className="card-line glow-card stagger-card group grid gap-4 p-6 md:grid-cols-[180px_1fr] md:gap-7 md:p-7"
                style={{ "--card-delay": `${120 + i * 70}ms` } as CSSProperties}
              >
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2 md:border-r md:border-white/[0.07] md:pr-6">
                  <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold/80">
                    <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(240,184,92,0.6)]" aria-hidden="true" />
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs leading-5 text-muted">{role.period}</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-sans text-lg font-bold text-ink transition-colors duration-300 group-hover:text-gold">
                      {role.role}
                    </h3>
                    <p className="font-mono text-sm text-gold/80">{role.org}</p>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted transition-colors duration-300 group-hover:text-soft/90">
                    {role.detail}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={120}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/experience" className="btn-ghost !text-xs">
              Full career path
              <span className="arr" aria-hidden="true">→</span>
            </Link>
            <Link href="/cv" className="btn-ghost !text-xs">
              Print resume
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}