import Link from "next/link";
import { PROFILE } from "@/lib/data";

export function CTABand() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="border border-ink bg-surface">
        <div className="flex flex-col items-start justify-between gap-8 p-8 md:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="mono-label flex items-center gap-3">
              <span className="pulsate inline-block h-2 w-2 bg-mint" aria-hidden="true" />
              Open to new projects
            </p>
            <h2 className="mt-5 text-2xl font-extrabold leading-tight text-ink sm:text-4xl">
              Have a platform, product, or payment{" "}
              <span className="gold-shimmer">system in mind?</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${PROFILE.email}`} className="btn-solid-gold">
              Start a conversation
            </a>
            <Link href="/contact" className="btn-ghost">
              Contact page
              <span className="arr" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
