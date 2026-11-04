import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL } from "@/lib/google-reviews";

export function Testimonials() {
  return (
    <section id="words" className="scroll-mt-24 border-y border-white/8 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <RevealOnScroll>
          <SectionHeading
            index="04"
            title="Client proof"
            hint="Real Google reviews for Mukhlis Software Solutions. Read feedback from clients in their own words."
          />
        </RevealOnScroll>

        {GOOGLE_REVIEWS.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GOOGLE_REVIEWS.map((review, i) => (
              <RevealOnScroll key={review.id} delay={(i % 3) * 90} variant={i % 3 === 1 ? "scale" : "up"}>
                <figure
                  className="card-line glow-card stagger-card group relative flex h-full flex-col overflow-hidden p-7"
                  style={{ "--card-delay": `${120 + (i % 3) * 80}ms` } as CSSProperties}
                >
                  <div className="relative flex items-center justify-between gap-3">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 font-mono text-sm font-bold text-gold ring-2 ring-white/10 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      {review.initials}
                    </span>
                    <span className="rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1 font-mono text-[11px] text-gold">
                      Google review
                    </span>
                  </div>

                  <div className="mt-6 flex gap-1 text-gold" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }, (_, star) => (
                      <span key={star} className={star < review.rating ? "opacity-100" : "opacity-25"} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <svg className="mt-5 h-6 w-6 text-gold/40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M9.6 5C5.9 6.3 3.5 9.4 3.5 13.3c0 3 1.8 5.2 4.4 5.2 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.6.4-1.9 1.9-3.5 4-4.4L9.6 5Zm9.7 0c-3.7 1.3-6.1 4.4-6.1 8.3 0 3 1.8 5.2 4.4 5.2 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.6.4-1.9 1.9-3.5 4-4.4L19.3 5Z" />
                  </svg>
                  <blockquote className="relative mt-3 flex-1 whitespace-pre-line text-[15px] leading-7 text-soft">
                    {review.text}
                  </blockquote>
                  <figcaption className="mt-7 border-t border-white/8 pt-5">
                    <p className="font-sans text-sm font-semibold text-ink">{review.name}</p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {review.date ? `${review.date} · ` : ""}<span className="text-gold/70">Google Business Profile</span>
                    </p>
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <RevealOnScroll>
            <div className="card-line glow-card mt-12 p-7 md:p-9">
              <h3 className="text-lg font-bold text-ink">Google client reviews</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-soft">
                Our Google Business Profile currently has 8 reviews, as reported on 4 November 2026.
                Original review names and text will appear here after they are confirmed from the source.
              </p>
              <a className="btn-ghost mt-6 inline-flex items-center gap-2" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                Read all reviews on Google <span aria-hidden="true">↗</span>
              </a>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
