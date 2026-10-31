import type { CSSProperties } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SERVICES } from "@/lib/data";
import { ServiceImage } from "@/components/ServiceImage";

const VISIBLE = 4;
export function HomeServices() {
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-24">
      <RevealOnScroll>
        <SectionHeading
          index="01"
          title="What I build"
          hint="Secure, production-grade software across fintech, web, mobile, desktop, enterprise, and cloud."
        />
      </RevealOnScroll>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {SERVICES.slice(0, VISIBLE).map((s, i) => (
          <RevealOnScroll key={s.id} delay={i * 70}>
            <Link
              href={`/services/${s.id}`}
              className="card-line glow-card stagger-card group flex h-full flex-col overflow-hidden p-6 md:p-7"
              style={{ "--card-delay": `${120 + i * 70}ms` } as CSSProperties}
            >
              <ServiceImage id={s.id} sizes="(max-width: 768px) 100vw, 550px" className="-mx-6 -mt-6 mb-6 aspect-[16/10] border-b border-white/[0.07] md:-mx-7 md:-mt-7" />
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-sans text-xl font-bold text-ink transition-colors duration-300 group-hover:text-gold">
                  {s.title}
                </h3>
                <span className="font-mono text-xs text-gold/75">{s.num}</span>
              </div>
              <p className="mt-1 font-mono text-xs text-gold">{s.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted">{s.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.deliverables.slice(0, 3).map((d) => (
                  <span key={d} className="tag-pill !px-3 !py-1 !text-xs">
                    {d}
                  </span>
                ))}
              </div>
              <span className="link-arrow mt-6 border-t border-white/[0.07] pt-4 text-xs group-hover:text-gold">
                View service
                <span className="arr" aria-hidden="true">→</span>
              </span>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={120}>
        <div className="mt-10 flex justify-center">
          <Link href="/services" className="btn-ghost !text-xs">
            Explore all services
            <span className="arr" aria-hidden="true">→</span>
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
