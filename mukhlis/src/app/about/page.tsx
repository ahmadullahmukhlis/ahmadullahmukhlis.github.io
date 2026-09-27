import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, buildMetadata } from "@/lib/seo";
import { PROFILE, EDUCATION, CV_SKILLS, SKILL_GROUPS } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "About Ahmadullah Mukhlis | Full Stack & Fintech Software Engineer",
  description:
    "Learn about Ahmadullah Mukhlis — a full stack software engineer from Afghanistan working on fintech, payment systems, digital banking, web, mobile, desktop apps, and enterprise platforms worldwide.",
  keywords: [
    "About Ahmadullah Mukhlis",
    "Ahmadullah Mukhlis biography",
    "Full Stack Developer Afghanistan",
    "Fintech Software Engineer profile",
    "Software engineer Kabul Afghanistan",
    "Payment systems engineer biography",
    "Da Afghanistan Bank developer",
    "Afghanistan payment system engineer",
    "Full Stack Engineer story",
    "Software engineer education and career",
  ],
  path: "/about",
});

const ABOUT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Ahmadullah Mukhlis",
  url: `${SITE_URL}/about`,
  about: {
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: "Full Stack, Fintech & Software Engineer",
    description: PROFILE.blurb,
  },
};

const VALUES = [
  {
    num: "01",
    title: "Secure by default",
    text: "Financial systems handle real money and real users. Every layer — from authentication to transactions — is built with security, auditability, and compliance in mind.",
  },
  {
    num: "02",
    title: "Clean interfaces",
    text: "A polished UI is not decoration. Thoughtful design systems, consistent components, and fast interactions make complex software feel simple and trustworthy.",
  },
  {
    num: "03",
    title: "Reliable delivery",
    text: "Shipping means deploying safely and supporting what you launch. I favor repeatable pipelines, monitoring, backups, and honest communication over heroics.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <JsonLd data={ABOUT_JSONLD} />
        <PageHero
          eyebrow="about"
          title="Engineer with a builder's"
          highlight="mindset."
          lead="A full-stack and fintech software engineer turning complex financial and enterprise problems into secure, polished, production-ready software."
          chips={["Kabul, Afghanistan", "Fintech & payments", "Full-stack engineering"]}
        />

        <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <RevealOnScroll variant="left">
              <div className="corners big-card hover-tilt overflow-hidden p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-panel">
                  <Image
                    src={PROFILE.avatar}
                    alt={`Portrait of ${PROFILE.name}, full stack and fintech software engineer`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="image-zoom object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-charcoal/90 p-5 backdrop-blur">
                    <p className="font-mono text-xs text-gold">{PROFILE.location}</p>
                    <p className="mt-1 text-sm font-semibold text-ink">{PROFILE.role}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="right">
              <p className="motion-line mono-label text-gold">{`// biography`}</p>
              <h2 className="motion-line mt-4 text-2xl font-bold leading-tight text-ink md:text-4xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
                Architecture and hands-on development for
                <span className="gold-shimmer"> dependable production software.</span>
              </h2>
              <div className="motion-line mt-6 space-y-5 text-sm leading-7 text-muted md:text-base md:leading-8" style={{ "--line-delay": "170ms" } as CSSProperties}>
                <p>
                  I am Ahmadullah Mukhlis, a full-stack software engineer focused on building
                  reliable applications, financial technology systems, enterprise software,
                  mobile applications, desktop solutions, APIs, and cloud-deployed platforms.
                </p>
                <p>
                  My work combines software architecture with hands-on development. I enjoy
                  solving problems that involve multiple systems, complex business rules,
                  integrations, transaction processing, real-time communication, data
                  consistency, reliability, and maintainable software design.
                </p>
                <p>
                  Across web, mobile, desktop, APIs, and infrastructure, I favor maintainable
                  code, explicit security boundaries, correctness, testing, observability,
                  thoughtful user experience, and production reliability. These principles
                  matter most when software coordinates financial or operational data.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:py-20">
          <RevealOnScroll>
            <div className="section-line mb-10">
              <span className="motion-line mono-label text-gold">{`// principles`}</span>
              <h2 className="motion-line text-2xl font-bold text-ink md:text-3xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
                How I work
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid gap-4 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <RevealOnScroll key={v.num} delay={i * 80}>
                <div className="card-line glow-card stagger-card group h-full p-6 md:p-7" style={{ "--card-delay": `${120 + i * 70}ms` } as CSSProperties}>
                  <span className="font-mono text-xs text-gold/75">{v.num}/</span>
                  <h3 className="mt-4 font-sans text-lg font-bold text-ink transition-colors duration-300 group-hover:text-gold">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{v.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.015]">
          <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:py-20">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <RevealOnScroll>
                  <div className="section-line mb-8">
                    <span className="motion-line mono-label text-gold">{`// education`}</span>
                    <h2 className="motion-line text-2xl font-bold text-ink md:text-3xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
                      Education
                    </h2>
                  </div>
                </RevealOnScroll>
                <div className="space-y-4">
                  {EDUCATION.map((e, i) => (
                    <RevealOnScroll key={e.title} delay={i * 70}>
                      <div className="card-line p-6" style={{ "--card-delay": "120ms" } as CSSProperties}>
                        <h3 className="text-base font-semibold text-ink">{e.title}</h3>
                        <p className="mt-1 font-mono text-xs text-muted">
                          {e.org} · {e.period}
                        </p>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>

              <div>
                <RevealOnScroll>
                  <div className="section-line mb-8">
                    <span className="motion-line mono-label text-gold">{`// toolkit`}</span>
                    <h2 className="motion-line text-2xl font-bold text-ink md:text-3xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
                      Core skills
                    </h2>
                  </div>
                </RevealOnScroll>
                <ul className="flex flex-wrap gap-2">
                  {CV_SKILLS.map((s, i) => (
                    <RevealOnScroll key={s} delay={i * 30}>
                      <li className="tag-pill">{s}</li>
                    </RevealOnScroll>
                  ))}
                </ul>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {SKILL_GROUPS.slice(0, 4).map((g, gi) => (
                    <RevealOnScroll key={g.id} delay={gi * 70}>
                      <div className="card-line p-5" style={{ "--card-delay": "120ms" } as CSSProperties}>
                        <p className="font-mono text-xs text-gold/75">{g.id}/ {g.title}</p>
                        <p className="mt-2 text-sm leading-6 text-muted">{g.items.join(" · ")}</p>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
