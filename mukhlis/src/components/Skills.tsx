import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SKILL_GROUPS } from "@/lib/data";

export function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-20">
      <RevealOnScroll>
        <SectionHeading
          index="01"
          title="Toolbox"
          hint="The stack I reach for to ship ideas end to end."
        />
      </RevealOnScroll>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, gi) => (
          <RevealOnScroll key={group.id} delay={gi * 70}>
            <div className="card-line glow-card p-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-gold/70">{group.id}</span>
                <h3 className="font-sans text-sm font-semibold tracking-wide text-ink">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="tag-pill">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}

        <RevealOnScroll delay={350}>
          <div className="card-line flex h-full flex-col justify-between gap-6 border-dashed p-6">
            <p className="font-mono text-sm leading-relaxed text-muted">
              {"// constantly learning"}
              <br />
              <span className="text-soft/70">currently exploring</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {["AI agents", "Edge computing", "System design"].map((t) => (
                <span key={t} className="tag-pill !border-gold/40 !text-gold">
                  {t}
                  <span className="pulsate text-xs">✦</span>
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}