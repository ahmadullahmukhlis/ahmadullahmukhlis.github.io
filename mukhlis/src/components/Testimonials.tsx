import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";

// Owner-reported count on 4 November 2026. See Google for the latest count.
const REVIEW_COUNT = 8;
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=5007930972502664073";

export function Testimonials() {
  return (
    <section id="words" className="scroll-mt-24 border-y border-white/8 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <RevealOnScroll>
          <SectionHeading
            index="04"
            title="Client proof"
            hint="Feedback about Mukhlis Software Solutions (MSS), directly from our public Google Business Profile."
          />
        </RevealOnScroll>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <RevealOnScroll variant="scale" className="h-full">
            <div className="card-line glow-card flex h-full flex-col overflow-hidden p-7 md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.13em] text-soft">
                  Google Business Profile
                </span>
                <span className="rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1 font-mono text-[11px] text-gold">
                  Public reviews
                </span>
              </div>

              <div className="mt-10 flex flex-wrap items-end gap-5">
                <span className="font-sans text-7xl font-bold leading-none tracking-tight text-ink md:text-8xl">
                  {REVIEW_COUNT}
                </span>
                <div className="pb-1">
                  <h3 className="font-sans text-2xl font-bold text-ink">Google reviews</h3>
                  <p className="mt-2 font-mono text-xs text-muted">Mukhlis Software Solutions</p>
                </div>
              </div>

              <p className="mt-7 max-w-lg text-sm leading-7 text-soft">
                Read the original customer feedback on Google, including reviewer names
                and the full text of each review.
              </p>
              <div className="mt-auto pt-8">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid-gold inline-flex items-center gap-2"
                >
                  Read reviews on Google <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120} className="h-full">
            <div className="card-line glow-card flex h-full flex-col overflow-hidden p-7 md:p-9">
              <p className="mono-label text-gold">From the source</p>
              <h3 className="mt-5 font-sans text-2xl font-bold leading-tight text-ink md:text-3xl">
                Real feedback. In their own words.
              </h3>
              <p className="mt-5 text-sm leading-7 text-soft">
                We link directly to the MSS Google Business Profile rather than
                publishing unattributed quotes or unconfirmed star ratings.
                Explore the reviews and judge the feedback for yourself.
              </p>
              <div className="mt-auto border-t border-white/8 pt-7">
                <p className="font-mono text-xs uppercase tracking-[0.13em] text-muted">
                  Have you worked with MSS?
                </p>
                <p className="mt-2 text-sm leading-6 text-soft">
                  Your honest feedback helps other customers.
                </p>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-5 inline-flex items-center gap-2"
                >
                  Visit our Google profile <span className="arr" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <p className="mt-5 text-xs leading-5 text-muted">
          8 reviews reported on 4 November 2026; check Google for the latest count.
        </p>
      </div>
    </section>
  );
}
