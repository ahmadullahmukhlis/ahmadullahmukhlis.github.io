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
    <div>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className="mono-label text-gold">{index}</span>
        <h2 className="text-3xl font-extrabold leading-none text-ink md:text-4xl">{title}</h2>
      </div>
      <div className="section-line mt-5" aria-hidden="true" />
      {hint ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">{hint}</p>
      ) : null}
      <span className="sr-only">{`${PROFILE.name} — ${title}`}</span>
    </div>
  );
}
