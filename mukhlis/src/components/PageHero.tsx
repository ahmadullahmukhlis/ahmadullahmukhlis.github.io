import type { ReactNode } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";

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
    <section className="relative overflow-hidden pt-28 pb-10 md:pt-36 md:pb-12">
      <div className="grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5">
        <nav className="motion-line mono-label flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="text-muted transition-colors hover:text-gold">home</Link>
          <span className="text-gold/60" aria-hidden="true">/</span>
          <span className="text-soft"> {eyebrow}</span>
        </nav>

        <h1 className="motion-line mt-6 max-w-4xl font-sans text-4xl font-bold leading-[1.04] text-ink sm:text-5xl md:text-6xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
          {title} <span className="gold-shimmer">{highlight}</span>
        </h1>

        <p className="motion-line mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg" style={{ "--line-delay": "170ms" } as CSSProperties}>
          {lead}
        </p>

        {chips ? (
          <div className="mt-7 flex flex-wrap gap-2.5">
            {chips.map((item, i) => (
              <span key={item} className="motion-line tag-pill" style={{ "--line-delay": `${260 + i * 55}ms` } as CSSProperties}>
                {item}
              </span>
            ))}
          </div>
        ) : null}

        {actions ? (
          <div className="motion-line mt-9 flex flex-wrap items-center gap-3" style={{ "--line-delay": "480ms" } as CSSProperties}>
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}