import Image from "next/image";
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
          <p className="mono-label flex max-w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-mint pulsate" />
            Available for remote and on-site work
          </p>

          <h1 className="mt-6 max-w-4xl font-sans text-4xl font-bold leading-[1.02] text-soft sm:text-5xl md:text-6xl">
            Ahmadullah Mukhlis
          </h1>

          <p className="mt-4 max-w-2xl text-xl font-semibold leading-snug text-gold md:text-2xl">
            Full-stack engineer for secure systems and polished product interfaces.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
            {PROFILE.blurb}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {SPECIALTIES.map((item) => (
              <span key={item} className="tag-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-solid-gold">
              Explore work
              <span aria-hidden="true">→</span>
            </a>
            <a href="/cv" className="btn-ghost">
              View CV
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="link-arrow"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.d} />
                </svg>
                <span>{s.label}</span>
              </a>
            ))}
          </div>

          <dl className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="card-line stagger-card p-4"
                style={{ "--card-delay": `${220 + i * 80}ms` } as CSSProperties}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-3xl font-bold text-gold">{s.value}</dd>
                <dd className="mt-2 text-xs leading-5 text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise rise-2 relative mx-auto w-full max-w-[460px] md:justify-self-end">
          <div className="corners big-card hover-tilt overflow-hidden p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-panel">
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
              <div className="p-4">
                <p className="font-mono text-[11px] uppercase text-muted">Focus</p>
                <p className="mt-1 text-sm font-semibold text-soft">Banking and SaaS</p>
              </div>
              <div className="border-l border-white/10 p-4">
                <p className="font-mono text-[11px] uppercase text-muted">Delivery</p>
                <p className="mt-1 text-sm font-semibold text-soft">Design to deploy</p>
              </div>
            </div>
          </div>

          <div className="stagger-card absolute -right-2 top-6 hidden rounded-lg border border-white/10 bg-charcoal/90 px-4 py-3 shadow-2xl backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:border-gold/40 sm:block md:-right-8">
            <p className="font-mono text-xs text-muted">Production systems</p>
            <p className="mt-1 text-sm font-semibold text-ink">Microservices, APIs, UI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
