import Link from "next/link";
import type { CSSProperties } from "react";
import { PROFILE } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function CTABand() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <RevealOnScroll variant="scale">
        <div className="big-card hover-tilt overflow-hidden p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="motion-line mono-label flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-mint pulsate" aria-hidden="true" />
                open to new projects
              </p>
              <h2 className="motion-line mt-4 font-sans text-2xl font-bold leading-tight text-ink sm:text-4xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
                Have a platform, product, or payment
                <span className="gold-shimmer"> system in mind?</span>
              </h2>
            </div>

            <div className="motion-line flex flex-wrap gap-3" style={{ "--line-delay": "200ms" } as CSSProperties}>
              <a href={`mailto:${PROFILE.email}`} className="btn-solid-gold">
                Start a conversation
              </a>
              <Link href="/contact" className="btn-ghost">
                Contact page
                <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}