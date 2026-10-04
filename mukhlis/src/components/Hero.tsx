import Image from "next/image";
import Link from "next/link";
import { PROFILE, SOCIALS } from "@/lib/data";

const SPECIALTIES = [
  "Payment systems",
  "Admin dashboards",
  "API platforms",
  "Product UI",
];

const FACTS = [
  { label: "Based in", value: PROFILE.location },
  { label: "Focus", value: "Banking & SaaS platforms" },
  { label: "Delivery", value: "Design through deploy" },
  { label: "Status", value: "Open to new work" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-rule">
      <div className="grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule py-3">
          <p className="mono-label flex items-center gap-2">
            <span className="pulsate inline-block h-2 w-2 bg-mint" aria-hidden="true" />
            Available for remote and on-site work
          </p>
          <p className="mono-label">{PROFILE.email}</p>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.35fr_0.65fr] md:gap-14 md:py-16">
          <div>
            <p className="mono-label text-gold">01 — Full-Stack &amp; Fintech Engineer</p>

            <h1 className="mt-5 text-[clamp(2.6rem,8.2vw,5.4rem)] font-extrabold leading-[0.92] text-ink">
              Ahmadullah
              <br />
              Mukhlis
            </h1>

            <p className="mt-6 max-w-xl text-xl font-bold leading-snug text-gold md:text-2xl">
              Secure systems, clear architecture, and production-ready delivery.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
              {PROFILE.blurb}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {SPECIALTIES.map((item) => (
                <span key={item} className="tag-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
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

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="link-arrow"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <figure className="corners border border-ink bg-surface p-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-panel">
                <Image
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                  className="image-zoom object-cover"
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-3 px-2 py-3">
                <span className="font-mono text-[11px] text-ink">{PROFILE.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  Portrait
                </span>
              </figcaption>
            </figure>

            <dl className="border-t border-rule">
              {FACTS.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline justify-between gap-4 border-b border-rule py-3"
                >
                  <dt className="mono-label">{f.label}</dt>
                  <dd className="text-right text-sm font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
