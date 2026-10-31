import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="words" className="scroll-mt-24 border-y border-white/8 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <RevealOnScroll>
        <SectionHeading
          index="04"
          title="Client proof"
          hint="Short signals from collaborators who value clean execution, reliable delivery, and thoughtful product engineering."
        />
      </RevealOnScroll>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <RevealOnScroll key={t.name} delay={i * 90} variant={i % 3 === 1 ? "scale" : "up"}>
            <figure
              className="card-line glow-card stagger-card group relative flex h-full flex-col overflow-hidden p-7"
              style={{ "--card-delay": `${120 + i * 80}ms` } as CSSProperties}
            >
              <div className="relative flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-bold text-charcoal ring-2 ring-white/10 transition-transform duration-300 "
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1 font-mono text-[11px] text-gold" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  Verified
                </span>
              </div>

              <svg className="mt-6 h-6 w-6 text-gold/40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9.6 5C5.9 6.3 3.5 9.4 3.5 13.3c0 3 1.8 5.2 4.4 5.2 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.6.4-1.9 1.9-3.5 4-4.4L9.6 5Zm9.7 0c-3.7 1.3-6.1 4.4-6.1 8.3 0 3 1.8 5.2 4.4 5.2 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.6.4-1.9 1.9-3.5 4-4.4L19.3 5Z" />
              </svg>
              <blockquote className="relative mt-3 flex-1 text-[15px] leading-7 text-soft">
                {t.quote}
              </blockquote>

              <figcaption className="mt-7 border-t border-white/8 pt-5">
                <p className="font-sans text-sm font-semibold text-ink">{t.name}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {t.role} · <span className="text-gold/70">{t.org}</span>
                </p>
              </figcaption>
            </figure>
          </RevealOnScroll>
        ))}
      </div>
      </div>
    </section>
  );
}
