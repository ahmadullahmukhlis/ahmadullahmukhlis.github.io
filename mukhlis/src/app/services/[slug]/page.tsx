import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/CTABand";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { PROCESS_STEPS, SERVICES } from "@/lib/data";
import { SITE_NAME, SITE_URL, buildMetadata } from "@/lib/seo";

const getService = (slug: string) => SERVICES.find((service) => service.id === slug);

function buildServiceNarrative(service: (typeof SERVICES)[number]) {
  const firstDeliverable = service.deliverables[0]?.toLowerCase() ?? "the core product workflow";
  return {
    context: `${service.title} is designed for teams that need dependable software around ${service.description.toLowerCase().replace(/\.$/, "")}. The service starts with the business context, existing systems, users, and operational constraints so the solution is practical from its first release.`,
    approach: `Delivery is structured around a clear architecture, a maintainable interface, and measurable release milestones. The work can begin with ${firstDeliverable}, then expand into the supporting workflows, integrations, security controls, and operational tooling needed for a production-ready system.`,
    outcome: `The goal is a durable product foundation: a solution that is easier to use, safer to operate, and ready for the next stage of growth. Every engagement is shaped to leave the team with clear documentation, a reliable delivery path, and software that can be supported after launch.`,
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return buildMetadata({
      title: "Service not found",
      description: "The requested software engineering service could not be found.",
      keywords: ["software engineering service"],
      path: `/services/${slug}`,
    });
  }

  return buildMetadata({
    title: `${service.title} | ${SITE_NAME}`,
    description: service.description,
    keywords: service.keywords.split(", "),
    path: `/services/${service.id}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = SERVICES.findIndex((item) => item.id === service.id);
  const previous = SERVICES[(index - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(index + 1) % SERVICES.length];
  const narrative = buildServiceNarrative(service);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.id}`,
    provider: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
    areaServed: "Worldwide",
    serviceType: service.title,
    category: service.keywords,
  };

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <JsonLd data={serviceJsonLd} />

        <section className="relative overflow-hidden pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5">
            <nav className="mono-label flex items-center gap-2" aria-label="Breadcrumb">
              <Link href="/" className="text-muted transition-colors hover:text-gold">home</Link>
              <span className="text-gold/60" aria-hidden="true">/</span>
              <Link href="/services" className="text-muted transition-colors hover:text-gold">services</Link>
              <span className="text-gold/60" aria-hidden="true">/</span>
              <span className="truncate text-soft">{service.id}</span>
            </nav>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <span className="font-mono text-xs text-gold">{service.num} / {service.tagline}</span>
                <h1 className="mt-5 max-w-4xl font-sans text-4xl font-bold leading-[1.04] text-ink sm:text-5xl md:text-7xl">{service.title}</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">{service.description}</p>
              </div>
              <div className="motion-panel p-5 lg:justify-self-end lg:max-w-sm">
                <p className="mono-label">engagement profile</p>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div><p className="font-mono text-xs text-muted">Delivery</p><p className="mt-1 text-sm text-ink">End to end</p></div>
                  <div><p className="font-mono text-xs text-muted">Focus</p><p className="mt-1 text-sm text-ink">Production ready</p></div>
                </div>
                <a href="mailto:ahmadullahmukhlis2025@gmail.com" className="btn-solid-gold mt-6 inline-flex w-full justify-center !text-xs">Request a proposal <span className="arr" aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="card-line p-6"><p className="mono-label">01 / context</p><p className="mt-4 text-sm leading-7 text-muted">{narrative.context}</p></article>
            <article className="card-line p-6"><p className="mono-label">02 / approach</p><p className="mt-4 text-sm leading-7 text-muted">{narrative.approach}</p></article>
            <article className="card-line p-6"><p className="mono-label">03 / outcome</p><p className="mt-4 text-sm leading-7 text-muted">{narrative.outcome}</p></article>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mono-label">what&apos;s included</p>
              <ul className="mt-5 grid gap-3">
                {service.deliverables.map((deliverable) => <li key={deliverable} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-6 text-muted"><span className="font-mono text-gold" aria-hidden="true">+</span>{deliverable}</li>)}
              </ul>
            </div>
            <div>
              <p className="mono-label">delivery process</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {PROCESS_STEPS.map((step) => <div key={step.num} className="card-line p-5"><span className="font-mono text-xs text-gold">{step.num}</span><h2 className="mt-2 font-bold text-ink">{step.title}</h2><p className="mt-2 text-sm leading-6 text-muted">{step.text}</p></div>)}
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
            <Link href={`/services/${previous.id}`} className="card-line group p-5"><span className="mono-label">← previous service</span><span className="mt-3 block text-lg font-bold text-ink transition-colors group-hover:text-gold">{previous.title}</span></Link>
            <Link href={`/services/${next.id}`} className="card-line p-5 text-left sm:text-right"><span className="mono-label">next service →</span><span className="mt-3 block text-lg font-bold text-ink transition-colors hover:text-gold">{next.title}</span></Link>
          </div>
        </section>
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
