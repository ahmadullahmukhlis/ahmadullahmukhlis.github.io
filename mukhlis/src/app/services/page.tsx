import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, buildMetadata } from "@/lib/seo";
import { SERVICES, PROCESS_STEPS } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Software Engineering Services | Fintech, Web, Mobile, Enterprise & Cloud",
  description:
    "Software engineering services by Ahmadullah Mukhlis: fintech and payment systems, web and mobile applications, desktop software, enterprise platforms, APIs, cloud, and DevOps — built secure and production-ready.",
  keywords: [
    "Software development services",
    "Fintech development services",
    "Payment system integration services",
    "Digital banking development",
    "Web application development services",
    "Mobile app development services",
    "Desktop application development services",
    "Enterprise software development",
    "ERP development services",
    "MIS development services",
    "API development services",
    "Microservices consulting",
    "Cloud migration services",
    "AWS development services",
    "DevOps consulting services",
    "Hire full stack developer",
    "Hire fintech developer",
    "Offline first app development",
    "Payment gateway integration service",
  ],
  path: "/services",
});

const SERVICES_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: `${SITE_URL}/services`,
  description: "Software engineering services across fintech, web, mobile, desktop, enterprise, and cloud.",
  provider: { "@type": "Person", name: SITE_NAME },
  areaServed: "Worldwide",
  priceRange: "$$",
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.description },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <JsonLd data={SERVICES_JSONLD} />
        <PageHero
          eyebrow="services"
          title="Software engineering services built to"
          highlight="ship and scale."
          lead="From fintech and payment systems to web, mobile, desktop, enterprise platforms, APIs, and cloud — engineered with security and production discipline."
          chips={["Fintech & payments", "Web & mobile", "Enterprise & APIs", "Cloud & DevOps"]}
          actions={
            <>
              <a href="mailto:ahmadullahmukhlis2025@gmail.com" className="btn-solid-gold">
                Request a proposal
              </a>
              <Link href="/projects" className="btn-ghost">
                See delivered work
                <span className="arr" aria-hidden="true">→</span>
              </Link>
            </>
          }
        />

        <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-10 md:py-14">
          <div className="grid gap-5">
            {SERVICES.map((s, i) => (
              <RevealOnScroll key={s.id} variant={i % 2 === 0 ? "left" : "right"}>
                <div
                  id={s.id}
                  className="card-line glow-card stagger-card group grid scroll-mt-28 gap-6 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-9"
                  style={{ "--card-delay": `${120 + i * 70}ms` } as CSSProperties}
                >
                  <div>
                    <span className="font-mono text-xs text-gold/75">{s.num}/</span>
                    <h2 className="mt-3 text-xl font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-gold md:text-2xl">
                      {s.title}
                    </h2>
                    <p className="mt-1 font-mono text-xs text-gold">{s.tagline}</p>
                    <p className="mt-4 text-sm leading-7 text-muted">{s.description}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="mono-label">What&apos;s included</p>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-1">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 rounded-xl border border-white/8 bg-white/[0.02] p-3 font-mono text-xs text-muted transition-colors duration-200 group-hover:border-gold/15 hover:text-soft">
                          <span className="text-gold" aria-hidden="true">+</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.015]">
          <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:py-20">
            <RevealOnScroll>
              <div className="section-line mb-10">
                <span className="motion-line mono-label text-gold">{`// process`}</span>
                <h2 className="motion-line text-2xl font-bold text-ink md:text-3xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
                  How a project runs
                </h2>
              </div>
            </RevealOnScroll>
            <div className="grid gap-4 md:grid-cols-5">
              {PROCESS_STEPS.map((step, i) => (
                <RevealOnScroll key={step.num} delay={i * 70}>
                  <div className="card-line hover-tilt relative h-full p-6" style={{ "--card-delay": `${120 + i * 70}ms` } as CSSProperties}>
                    <span className="font-mono text-2xl font-bold text-gold/70">{step.num}</span>
                    <h3 className="mt-4 font-sans text-base font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted">{step.text}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}