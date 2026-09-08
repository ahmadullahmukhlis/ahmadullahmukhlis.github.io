import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="words" className="scroll-mt-24 border-y border-white/8 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <RevealOnScroll>
        <SectionHeading
          index="04"
          title="Client proof"
          hint="Short signals from collaborators who value clean execution, reliable delivery, and thoughtful product engineering."
        />
      </RevealOnScroll>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <RevealOnScroll key={t.name} delay={i * 90}>
            <figure className="card-line glow-card relative flex h-full flex-col overflow-hidden p-6">
              <span
                className="pointer-events-none absolute right-5 top-4 font-mono text-5xl font-bold leading-none text-gold/10"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="relative flex items-center justify-between">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full font-mono text-sm font-bold text-charcoal"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-gold" aria-hidden="true">
                  Verified
                </span>
              </div>

              <blockquote className="relative mt-6 flex-1 text-sm leading-7 text-soft">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 border-t border-white/8 pt-4">
                <p className="font-sans text-sm font-semibold text-ink">{t.name}</p>
                <p className="font-mono text-xs text-muted">
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
