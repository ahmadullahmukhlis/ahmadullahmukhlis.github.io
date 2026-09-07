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
      <div className="flex items-baseline gap-3">
        <span className="mono-label text-gold">{`// ${index}`}</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
          {title}
        </h2>
      </div>
      <div className="section-line" aria-hidden="true" />
      {hint ? <p className="text-sm text-muted -mt-1">{hint}</p> : null}
      <span className="sr-only">{`${PROFILE.name} — ${title}`}</span>
    </div>
  );
}