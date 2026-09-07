import Image from "next/image";
import { PROFILE, SOCIALS } from "@/lib/data";

const STATS = [
  { value: "5+", label: "yrs building for the web" },
  { value: "45+", label: "projects shipped" },
  { value: "100%", label: "upwork job success" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 md:grid-cols-[1.15fr_0.85fr] md:pb-24">
        {/* left */}
        <div className="rise">
          <p className="mono-label flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-mint pulsate" />
            hello-world — developer available for projects
          </p>

          <h1 className="mt-6 font-sans text-4xl font-bold leading-[1.05] tracking-tight text-soft sm:text-5xl md:text-6xl">
            Ahmadullah
            <br />
            <span className="gold-shimmer">Mukhlis</span>
          </h1>

          <p className="mt-4 font-mono text-sm text-gold caret">
            full-stack · creative technologist
          </p>

          <p className="mt-5 max-w-xl text-lg font-light leading-relaxed text-muted md:text-xl">
            {PROFILE.tagline}. {PROFILE.blurb}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-solid-gold shine">
              Explore work
              <span aria-hidden="true">→</span>
            </a>
            <a href="/cv" className="btn-ghost">
              View CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
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
                <span className="hidden lg:inline">{s.label}</span>
                <span className="arr hidden lg:inline" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-3xl font-bold text-gold">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right */}
        <div className="rise rise-2 relative mx-auto w-full max-w-sm md:justify-self-end">
          <div className="corners relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-surface">
            <Image
              src={PROFILE.avatar}
              alt={PROFILE.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              priority
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-5">
              <p className="font-mono text-xs text-ink/80">
                <span className="text-gold">~/</span>dev/portfolio
              </p>
            </div>
          </div>

          <div className="float-alt absolute -right-3 top-6 rounded-xl border border-white/10 bg-charcoal/90 px-4 py-3 backdrop-blur md:-right-8">
            <p className="flex items-center gap-2 font-mono text-xs text-ink/80">
              <span className="pulsate inline-block h-2 w-2 rounded-full bg-mint" />
              open to work
            </p>
          </div>

          <div className="float-alt absolute -left-3 bottom-10 rounded-xl border border-white/10 bg-charcoal/90 px-4 py-3 backdrop-blur md:-left-8" style={{ animationDelay: "1.4s" }}>
            <p className="font-mono text-xs text-ink/80">
              <span className="text-gold">●</span> Kabul — working worldwide
            </p>
          </div>

          <div className="absolute -top-5 -right-1 rotate-45 opacity-[0.08]" aria-hidden="true">
            <span className="font-mono text-7xl font-bold text-indigoglow">{"</>"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}