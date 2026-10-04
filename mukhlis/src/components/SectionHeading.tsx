import type { CSSProperties } from "react";
import { PROFILE } from "@/lib/data";

export function SectionHeading({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="motion-line mono-label text-gold">{`// ${index}`}</span>
        <h2 className="motion-line text-2xl font-bold text-ink md:text-3xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
          {title}
        </h2>
      </div>
      <div className="motion-line section-line" style={{ "--line-delay": "170ms" } as CSSProperties} aria-hidden="true" />
      {hint ? (
        <p className="motion-line -mt-1 max-w-2xl text-sm leading-6 text-muted" style={{ "--line-delay": "250ms" } as CSSProperties}>
          {hint}
        </p>
      ) : null}
      <span className="sr-only">{`${PROFILE.name} — ${title}`}</span>
    </div>
  );
}
