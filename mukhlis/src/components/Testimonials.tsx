import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="words" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-20">
      <RevealOnScroll>
        <SectionHeading
          index="04"
          title="Words"
          hint="What people I've worked with say."
        />
      </RevealOnScroll>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <RevealOnScroll key={t.name} delay={i * 90}>
            <figure className="card-line glow-card relative overflow-hidden p-7">
              <span
                className="pointer-events-none absolute -right-2 -top-6 font-mono text-[7rem] font-bold leading-none text-gold/10"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="flex items-center justify-between">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full font-mono text-sm font-bold text-charcoal"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <span className="font-mono text-xs text-gold" aria-hidden="true">
                  ★★★★★
                </span>
              </div>

              <blockquote className="mt-5 text-sm italic leading-relaxed text-soft">
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
    </section>
  );
}