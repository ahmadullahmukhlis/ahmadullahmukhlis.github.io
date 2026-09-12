import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { PROFILE, SOCIALS } from "@/lib/data";

const STATS = [
  { value: "5+", label: "Years shipping software" },
  { value: "45+", label: "Projects across web, mobile, and APIs" },
  { value: "1M+", label: "Requests/min platform experience" },
];

const SPECIALTIES = [
  "Payment systems",
  "Admin dashboards",
  "API platforms",
  "Product UI",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 md:grid-cols-[1.05fr_0.95fr] md:pb-24">
        <div className="rise">
          <p className="motion-line mono-label flex max-w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-mint pulsate" />
            Available for remote and on-site work
          </p>

          <h1 className="motion-line mt-6 max-w-4xl font-sans text-4xl font-bold leading-[1.02] text-soft sm:text-5xl md:text-6xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
            Ahmadullah Mukhlis
          </h1>

          <p className="motion-line mt-4 max-w-2xl text-xl font-semibold leading-snug text-gold md:text-2xl" style={{ "--line-delay": "170ms" } as CSSProperties}>
            Full-stack engineer for secure systems and polished product interfaces.
          </p>

          <p className="motion-line mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg" style={{ "--line-delay": "250ms" } as CSSProperties}>
            {PROFILE.blurb}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {SPECIALTIES.map((item, i) => (
              <span
                key={item}
                className="motion-line tag-pill"
                style={{ "--line-delay": `${320 + i * 60}ms` } as CSSProperties}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="motion-line mt-9 flex flex-wrap items-center gap-3" style={{ "--line-delay": "580ms" } as CSSProperties}>
            <Link href="/projects" className="btn-solid-gold">
              Explore work
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/cv" className="btn-ghost">
              View CV
            </Link>
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
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            {SOCIALS.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="motion-line link-arrow"
                style={{ "--line-delay": `${660 + i * 55}ms` } as CSSProperties}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.d} />
                </svg>
                <span>{s.label}</span>
              </a>
            ))}
          </div>

          <dl className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="card-line glow-card stagger-card group relative p-5"
                style={{ "--card-delay": `${220 + i * 80}ms` } as CSSProperties}
              >
                <span
                  className="absolute left-0 top-0 h-0.5 w-0 rounded-full bg-gold/80 transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-3xl font-bold text-gold transition-colors duration-300">
                  {s.value}
                </dd>
                <dd className="mt-2 text-[13px] leading-5 text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise rise-2 relative mx-auto w-full max-w-[460px] md:justify-self-end">
          <div className="corners big-card hover-tilt overflow-hidden p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-panel">
              <Image
                src={PROFILE.avatar}
                alt={PROFILE.name}
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                priority
                className="image-zoom object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-charcoal/90 p-5 backdrop-blur">
                <p className="font-mono text-xs text-gold">{PROFILE.location}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{PROFILE.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-white/10">
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">Focus</p>
                <p className="mt-1.5 text-sm font-semibold text-soft">Banking and SaaS</p>
              </div>
              <div className="border-l border-white/10 p-5">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">Delivery</p>
                <p className="mt-1.5 text-sm font-semibold text-soft">Design to deploy</p>
              </div>
            </div>
          </div>

          <div className="stagger-card absolute -right-2 top-6 hidden rounded-xl border border-white/10 bg-charcoal/90 px-5 py-3.5 shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 sm:block md:-right-8">
            <p className="font-mono text-xs text-muted">Production systems</p>
            <p className="mt-1 text-sm font-semibold text-ink">Microservices, APIs, UI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
