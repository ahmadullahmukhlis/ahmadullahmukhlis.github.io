import type { ReactNode } from "react";
import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  highlight,
  lead,
  chips,
  actions,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  lead: string;
  chips?: string[];
  actions?: ReactNode;
}) {
  return (
    <section className="relative border-b border-rule">
      <div className="grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
        <nav className="mono-label flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="text-muted transition-colors hover:text-ink">
            Home
          </Link>
          <span className="text-gold" aria-hidden="true">
            /
          </span>
          <span className="text-ink">{eyebrow}</span>
        </nav>

        <h1 className="mt-6 max-w-4xl text-[clamp(2.2rem,6.4vw,4.2rem)] font-extrabold leading-[0.96] text-ink">
          {title} <span className="gold-shimmer">{highlight}</span>
        </h1>

        <div className="section-line mt-7" aria-hidden="true" />

        <p className="mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg">{lead}</p>

        {chips ? (
          <div className="mt-7 flex flex-wrap gap-2">
            {chips.map((item) => (
              <span key={item} className="tag-pill">
                {item}
              </span>
            ))}
          </div>
        ) : null}

        {actions ? <div className="mt-9 flex flex-wrap items-center gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
