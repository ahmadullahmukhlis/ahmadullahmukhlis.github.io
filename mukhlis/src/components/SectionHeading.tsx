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
        <span className="mono-label text-gold">{`// ${index}`}</span>
        <h2 className="text-2xl font-bold text-ink md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="section-line" aria-hidden="true" />
      {hint ? <p className="-mt-1 max-w-2xl text-sm leading-6 text-muted">{hint}</p> : null}
      <span className="sr-only">{`${PROFILE.name} — ${title}`}</span>
    </div>
  );
}
