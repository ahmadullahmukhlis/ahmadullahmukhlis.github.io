import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="words" className="scroll-mt-24 border-b border-rule bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <RevealOnScroll>
          <SectionHeading
            index="04"
            title="Client proof"
            hint="Short signals from collaborators who value clean execution, reliable delivery, and thoughtful product engineering."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <RevealOnScroll key={t.name}>
              <figure className="card-line group flex h-full flex-col bg-surface p-7">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center font-mono text-sm font-bold text-paper"
                    style={{ backgroundColor: t.color }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <span
                    className="flex items-center gap-2 border border-rule px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 bg-mint" />
                    Verified
                  </span>
                </div>

                <blockquote className="mt-6 flex-1 text-base leading-8 text-soft">
                  <span className="text-gold" aria-hidden="true">
                    &ldquo;
                  </span>
                  {t.quote}
                  <span className="text-gold" aria-hidden="true">
                    &rdquo;
                  </span>
                </blockquote>

                <figcaption className="mt-7 border-t border-rule pt-5">
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {t.role} · <span className="text-gold">{t.org}</span>
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
