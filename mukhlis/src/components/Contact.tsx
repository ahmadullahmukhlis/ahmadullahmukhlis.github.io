import type { CSSProperties } from "react";
import { PROFILE, SOCIALS } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-24">
      <RevealOnScroll variant="scale">
        <div className="big-card hover-tilt overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 md:p-11 lg:p-12">
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

              <p className="motion-line mt-5 max-w-xl leading-7 text-muted" style={{ "--line-delay": "170ms" } as CSSProperties}>
                Got a project, a role, or just an idea worth exploring? My inbox is
                always open — I usually reply within a day.
              </p>

              <div className="motion-line mt-10 flex flex-wrap items-center gap-4" style={{ "--line-delay": "260ms" } as CSSProperties}>
                <a href={`mailto:${PROFILE.email}`} className="btn-solid-gold max-w-full break-all">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 6 10-6" />
                  </svg>
                  <span className="min-w-0 break-all">{PROFILE.email}</span>
                </a>
                <a
                  href={PROFILE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.44 4.43-9.87 9.89-9.87a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 7 9.89 9.89 0 0 1-9.89 9.86Zm8.42-18.3A11.78 11.78 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.07 24l6.32-1.66a11.87 11.87 0 0 0 5.66 1.44h.01c6.54 0 11.88-5.34 11.88-11.89 0-3.18-1.24-6.16-3.47-8.4Z" />
                  </svg>
                  WhatsApp
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

            <div className="border-t border-white/10 bg-charcoal/35 p-8 md:p-11 lg:border-l lg:border-t-0 lg:p-12">
              <p className="motion-line mono-label text-gold">Contact routes</p>
              <div className="mt-7 grid gap-5">
                <div className="motion-line" style={{ "--line-delay": "90ms" } as CSSProperties}>
                  <p className="font-mono text-xs text-muted">Email</p>
                  <a href={`mailto:${PROFILE.email}`} className="mt-1.5 block break-all text-sm font-semibold text-ink transition-colors hover:text-gold">
                    {PROFILE.email}
                  </a>
                </div>
                <div className="motion-line" style={{ "--line-delay": "160ms" } as CSSProperties}>
                  <p className="font-mono text-xs text-muted">Location</p>
                  <p className="mt-1.5 text-sm font-semibold text-ink">{PROFILE.location}</p>
                </div>
                <div className="motion-line" style={{ "--line-delay": "230ms" } as CSSProperties}>
                  <p className="font-mono text-xs text-muted">Phone / WhatsApp</p>
                  <a
                    href={PROFILE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 block text-sm font-semibold text-ink transition-colors hover:text-gold"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
                <div className="motion-line" style={{ "--line-delay": "300ms" } as CSSProperties}>
                  <p className="font-mono text-xs text-muted">Response</p>
                  <p className="mt-1.5 text-sm font-semibold text-ink">Usually within one day</p>
                </div>
                <div className="motion-line" style={{ "--line-delay": "370ms" } as CSSProperties}>
                  <p className="font-mono text-xs text-muted">Best reached for</p>
                  <p className="mt-1.5 text-sm font-semibold text-ink">New projects, roles, and consultations</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-7">
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
