import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SERVICES } from "@/lib/data";
import Image from "next/image";
import { SERVICE_IMAGES } from "@/lib/brand";

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
        {SERVICES.slice(0, VISIBLE).map((s) => (
          <RevealOnScroll key={s.id}>
            <Link
              href={`/services/${s.id}`}
              className="card-line group flex h-full flex-col p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="mono-label text-gold">{s.num}</span>
                {SERVICE_IMAGES[s.id] ? (
                  <figure className="relative h-24 w-24 shrink-0 border border-rule bg-panel">
                    <Image
                      src={SERVICE_IMAGES[s.id].src}
                      alt={SERVICE_IMAGES[s.id].alt}
                      fill
                      sizes="96px"
                      className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </figure>
                ) : null}
              </div>

              <h3 className="mt-5 text-2xl font-extrabold leading-tight text-ink transition-colors duration-300 group-hover:text-gold">
                {s.title}
              </h3>
              <p className="mt-2 font-mono text-xs text-muted">{s.tagline}</p>

              <div className="section-line mt-5" aria-hidden="true" />

              <p className="mt-5 flex-1 text-sm leading-7 text-muted">{s.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.deliverables.slice(0, 3).map((d) => (
                  <span key={d} className="tag-pill">
                    {d}
                  </span>
                ))}
              </div>
              <span className="link-arrow mt-6 text-xs">
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
