import type { CSSProperties } from "react";
import { PROFILE, SOCIALS } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-20">
      <RevealOnScroll>
        <div className="big-card hover-tilt overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <p className="motion-line mono-label flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-mint pulsate" />
                currently available
              </p>

              <h2 className="motion-line mt-5 max-w-2xl font-sans text-3xl font-bold leading-tight text-ink sm:text-5xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
                Let&apos;s build something{" "}
                <span className="gold-shimmer">
                  worth shipping.
                </span>
              </h2>

              <p className="motion-line mt-4 max-w-xl text-muted" style={{ "--line-delay": "170ms" } as CSSProperties}>
                Got a project, a role, or just an idea worth exploring? My inbox is
                always open — I usually reply within a day.
              </p>

              <div className="motion-line mt-9 flex flex-wrap items-center gap-4" style={{ "--line-delay": "260ms" } as CSSProperties}>
                <a href={`mailto:${PROFILE.email}`} className="btn-solid-gold max-w-full break-all">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 6 10-6" />
                  </svg>
                  <span className="min-w-0 break-all">{PROFILE.email}</span>
                </a>
                <a
                  href="https://github.com/ahmadullahmukhlis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  GitHub →
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 bg-charcoal/35 p-7 md:p-10 lg:border-l lg:border-t-0">
              <p className="motion-line mono-label text-gold">Contact routes</p>
              <div className="mt-6 grid gap-4">
                <div className="motion-line" style={{ "--line-delay": "90ms" } as CSSProperties}>
                  <p className="font-mono text-xs text-muted">Email</p>
                  <a href={`mailto:${PROFILE.email}`} className="mt-1 block break-all text-sm font-semibold text-ink hover:text-gold">
                    {PROFILE.email}
                  </a>
                </div>
                <div className="motion-line" style={{ "--line-delay": "160ms" } as CSSProperties}>
                  <p className="font-mono text-xs text-muted">Location</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{PROFILE.location}</p>
                </div>
                <div className="motion-line" style={{ "--line-delay": "230ms" } as CSSProperties}>
                  <p className="font-mono text-xs text-muted">Response</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Usually within one day</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6">
                {SOCIALS.map((s, i) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="motion-line link-arrow text-xs"
                    style={{ "--line-delay": `${300 + i * 50}ms` } as CSSProperties}
                  >
                    {s.label}
                    <span className="arr" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
