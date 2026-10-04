import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { EXPERIENCE } from "@/lib/data";

const VISIBLE = 3;

export function HomeExperience() {
  return (
    <section className="border-y border-rule bg-panel">
      <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-24">
        <RevealOnScroll>
          <SectionHeading
            index="03"
            title="Career path"
            hint="From freelance delivery to banking infrastructure at Afghanistan's payment system."
          />
        </RevealOnScroll>

        <ol className="mt-12 border-t border-rule">
          {EXPERIENCE.slice(0, VISIBLE).map((role, i) => (
            <RevealOnScroll key={role.key} delay={i * 60}>
              <li className="group grid gap-3 border-b border-rule py-7 md:grid-cols-[170px_1fr] md:gap-8">
                <div className="md:block">
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
                    <p className="font-mono text-sm text-gold">{role.org}</p>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                    {role.detail}
                  </p>
                </div>
              </li>
            </RevealOnScroll>
          ))}
        </ol>

        <RevealOnScroll delay={120}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/experience" className="btn-ghost !text-xs">
              Full career path
              <span className="arr" aria-hidden="true">→</span>
            </Link>
            <Link href="/cv" className="btn-ghost !text-xs">
              Print resume
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}