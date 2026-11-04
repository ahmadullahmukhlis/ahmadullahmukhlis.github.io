import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL } from "@/lib/google-reviews";

const AVATAR_COLORS = ["#2563eb", "#7c3aed", "#059669"];

export function Testimonials() {
  return (
    <section id="words" className="scroll-mt-24 border-y border-white/8 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <RevealOnScroll>
          <SectionHeading
            index="04"
            title="Client proof"
            hint="Words from people who have shared their experience with Mukhlis Software Solutions on Google."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {GOOGLE_REVIEWS.map((review, i) => (
            <RevealOnScroll key={review.id} delay={i * 90} variant={i === 1 ? "scale" : "up"}>
              <figure
                className="card-line glow-card stagger-card group relative flex h-full flex-col overflow-hidden p-7"
                style={{ "--card-delay": `${120 + i * 80}ms` } as CSSProperties}
              >
                <div className="relative flex items-center justify-between">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-bold text-charcoal ring-2 ring-white/10 transition-transform duration-300"
                    style={{ backgroundColor: AVATAR_COLORS[i] }}
                    aria-hidden="true"
                  >
                    {review.initials}
                  </span>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1 font-mono text-[11px] text-gold transition-colors hover:bg-gold/15"
                    aria-label={`View ${review.name}'s review on Google`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                    Google review
                  </a>
                </div>

                <svg className="mt-6 h-6 w-6 text-gold/40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.6 5C5.9 6.3 3.5 9.4 3.5 13.3c0 3 1.8 5.2 4.4 5.2 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.6.4-1.9 1.9-3.5 4-4.4L9.6 5Zm9.7 0c-3.7 1.3-6.1 4.4-6.1 8.3 0 3 1.8 5.2 4.4 5.2 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.6.4-1.9 1.9-3.5 4-4.4L19.3 5Z" />
                </svg>
                <blockquote className="relative mt-3 flex-1 text-[15px] leading-7 text-soft">
                  {review.text}
                </blockquote>

                <figcaption className="mt-7 border-t border-white/8 pt-5">
                  <p className="font-sans text-sm font-semibold text-ink">{review.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    <span className="text-gold/70">Google Business Profile</span>
                    {review.excerpt ? " · Excerpt" : ""}
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
