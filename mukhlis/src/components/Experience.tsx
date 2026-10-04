import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { EXPERIENCE } from "@/lib/data";

const ACCENT_DOT: Record<string, string> = {
  gold: "bg-gold",
  indigo: "bg-indigoglow",
  mint: "bg-mint",
  amber: "bg-[#a8761a]",
  green: "bg-mint",
};

const ACCENT_TEXT: Record<string, string> = {
  gold: "text-gold",
  indigo: "text-indigoglow",
  mint: "text-mint",
  amber: "text-[#a8761a]",
  green: "text-mint",
};

export function Experience() {
  return (
    <section id="path" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-24">
      <RevealOnScroll>
        <SectionHeading
          index="03"
          title="Career path"
          hint="Experience across banking infrastructure, enterprise dashboards, client platforms, and freelance product delivery."
        />
      </RevealOnScroll>

      <ol className="mt-12 border-t border-rule">
        {EXPERIENCE.map((role, i) => (
          <RevealOnScroll key={role.key} delay={i * 60}>
            <li className="group grid gap-3 border-b border-rule py-7 md:grid-cols-[190px_1fr] md:gap-8">
              <div className="flex items-center gap-3 md:block">
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs text-muted md:mt-2 md:block">
                  {role.period}
                </span>
              </div>

              <div className="border-l-2 border-rule pl-5 transition-colors duration-300 group-hover:border-gold">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-sans text-xl font-extrabold text-ink">{role.role}</h3>
                  <p
                    className={`font-mono text-sm ${ACCENT_TEXT[role.accent] ?? "text-gold"}`}
                  >
                    {role.org}
                  </p>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                  {role.detail}
                </p>
                <span
                  className={`mt-4 block h-2 w-2 ${ACCENT_DOT[role.accent] ?? "bg-gold"}`}
                  aria-hidden="true"
                />
              </div>
            </li>
          </RevealOnScroll>
        ))}
      </ol>
    </section>
  );
}
