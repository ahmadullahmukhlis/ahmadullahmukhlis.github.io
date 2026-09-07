import { PROFILE, SOCIALS } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-20">
      <RevealOnScroll>
        <div className="big-card relative overflow-hidden p-8 md:p-14">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-indigoglow/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="mono-label flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-mint pulsate" />
              currently available
            </p>

            <h2 className="mt-5 max-w-2xl font-sans text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Let&apos;s build something{" "}
              <span className="gold-shimmer">
                worth shipping.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-muted">
              Got a project, a role, or just an idea worth exploring? My inbox is
              always open — I usually reply within a day.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={`mailto:${PROFILE.email}`} className="btn-solid-gold shine">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
                {PROFILE.email}
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

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow text-xs"
                >
                  {s.label}
                  <span className="arr" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}