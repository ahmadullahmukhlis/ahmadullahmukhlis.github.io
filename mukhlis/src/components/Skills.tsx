import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SKILL_GROUPS } from "@/lib/data";

export function Skills() {
  return (
    <section id="stack" className="scroll-mt-24 border-y border-white/8 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <RevealOnScroll>
          <SectionHeading
            index="01"
            title="Capability matrix"
            hint="A practical stack for building the interface, API, database, deployment, and product details together."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <RevealOnScroll variant="left">
            <div className="big-card hover-tilt h-full p-7 md:p-9">
              <p className="motion-line mono-label text-gold">Operating style</p>
              <h3 className="motion-line mt-5 text-2xl font-bold leading-tight text-ink" style={{ "--line-delay": "90ms" } as CSSProperties}>
                Product sense with production engineering discipline.
              </h3>
              <p className="motion-line mt-4 text-sm leading-7 text-muted" style={{ "--line-delay": "170ms" } as CSSProperties}>
                I keep interfaces clean, APIs predictable, and deployments repeatable. The goal is software that looks refined and behaves reliably after launch.
              </p>

              <div className="mt-8 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-3 lg:grid-cols-1">
                {["Design systems", "Secure backends", "Cloud deployment"].map((item, i) => (
                  <div
                    key={item}
                    className="stagger-card flex items-center gap-3"
                    style={{ "--card-delay": `${140 + i * 70}ms` } as CSSProperties}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-mint transition-transform duration-300 hover:scale-125" aria-hidden="true" />
                    <span className="font-mono text-xs text-soft">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid gap-4 md:grid-cols-2">
            {SKILL_GROUPS.map((group, gi) => (
              <RevealOnScroll key={group.id} delay={gi * 70}>
                <div
                  className="card-line glow-card stagger-card group h-full p-6"
                  style={{ "--card-delay": `${120 + gi * 70}ms` } as CSSProperties}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-sans text-base font-semibold text-ink transition-colors duration-300 group-hover:text-gold">
                      {group.title}
                    </h3>
                    <span className="font-mono text-xs text-gold/75">{group.id}</span>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="tag-pill">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}

            <RevealOnScroll delay={350}>
              <div className="card-line stagger-card flex h-full flex-col justify-between gap-6 border-dashed p-6">
                <p className="font-mono text-sm leading-7 text-muted">
                  {"// actively sharpening"}
                  <br />
                  <span className="text-soft/80">AI agents, edge apps, and system design</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI agents", "Edge computing", "System design"].map((t) => (
                    <span key={t} className="tag-pill !border-gold/40 !text-gold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
