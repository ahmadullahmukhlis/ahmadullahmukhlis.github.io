import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { EXPERIENCE } from "@/lib/data";

const ACCENT_DOT: Record<string, string> = {
  gold: "bg-gold",
  indigo: "bg-indigoglow",
  mint: "bg-mint",
  amber: "bg-[#f0a028]",
  green: "bg-[#34d399]",
};

const ACCENT_TEXT: Record<string, string> = {
  gold: "text-gold/80",
  indigo: "text-indigoglow/80",
  mint: "text-mint/80",
  amber: "text-[#f0a028]/80",
  green: "text-[#34d399]/80",
};

export function Experience() {
  return (
    <section id="path" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-20">
      <RevealOnScroll>
        <SectionHeading
          index="03"
          title="Career path"
          hint="Where I've been and what I've been building."
        />
      </RevealOnScroll>

      <div className="mt-10">
        {EXPERIENCE.map((role, i) => (
          <RevealOnScroll key={role.key} delay={i * 80}>
            <div className="group relative border-l border-white/10 pb-10 pl-8 last:pb-0 md:pl-12">
              <span
                className={`absolute -left-[7px] top-1.5 h-[13px] w-[13px] rounded-full border-2 border-charcoal transition-transform duration-300 group-hover:scale-125 ${ACCENT_DOT[role.accent] ?? "bg-gold"}`}
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-sans text-lg font-bold text-ink transition-colors duration-300 group-hover:text-gold">
                  {role.role}
                </h3>
                <span className="font-mono text-xs tracking-wide text-muted">
                  {role.period}
                </span>
              </div>
              <p className={`mt-1 font-mono text-sm ${ACCENT_TEXT[role.accent] ?? "text-gold/80"}`}>
                {role.org}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {role.detail}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}