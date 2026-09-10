import type { CSSProperties } from "react";
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

const ACCENT_GLOW: Record<string, string> = {
  gold: "shadow-[0_0_12px_rgba(240,184,92,0.7)]",
  indigo: "shadow-[0_0_12px_rgba(121,167,255,0.7)]",
  mint: "shadow-[0_0_12px_rgba(54,211,153,0.7)]",
  amber: "shadow-[0_0_12px_rgba(240,160,40,0.7)]",
  green: "shadow-[0_0_12px_rgba(52,211,153,0.7)]",
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
    <section id="path" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-24">
      <RevealOnScroll>
        <SectionHeading
          index="03"
          title="Career path"
          hint="Experience across banking infrastructure, enterprise dashboards, client platforms, and freelance product delivery."
        />
      </RevealOnScroll>

      <div className="mt-12 grid gap-5">
        {EXPERIENCE.map((role, i) => (
          <RevealOnScroll key={role.key} delay={i * 80} variant={i % 2 === 0 ? "left" : "right"}>
            <div
              className="card-line glow-card stagger-card group grid gap-5 p-6 md:grid-cols-[160px_1fr] md:p-7"
              style={{ "--card-delay": `${120 + i * 70}ms` } as CSSProperties}
            >
              <div className="flex items-center gap-3 md:block">
                <span
                  className={`block h-3 w-3 rounded-full ${ACCENT_DOT[role.accent] ?? "bg-gold"} ${ACCENT_GLOW[role.accent] ?? "shadow-[0_0_12px_rgba(240,184,92,0.7)]"} transition-transform duration-300 group-hover:scale-125`}
                  aria-hidden="true"
                />
                <span className="font-mono text-xs text-muted md:mt-4 md:block">
                  {String(i + 1).padStart(2, "0")} / {role.period}
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-sans text-lg font-bold text-ink transition-colors duration-300 group-hover:text-gold">
                    {role.role}
                  </h3>
                  <p className={`font-mono text-sm ${ACCENT_TEXT[role.accent] ?? "text-gold/80"}`}>
                    {role.org}
                  </p>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted transition-colors duration-300 group-hover:text-soft/90">
                  {role.detail}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
