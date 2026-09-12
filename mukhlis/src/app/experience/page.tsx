import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Experience } from "@/components/Experience";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, buildMetadata } from "@/lib/seo";
import { PROFILE, EDUCATION } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Work Experience & Career | Full Stack & Fintech Software Engineer",
  description:
    "The career path of Ahmadullah Mukhlis: full stack developer at Da Afghanistan Bank's payment system (AFPS), Baheer Group, and freelance engineering — banking, payments, enterprise, and product software.",
  keywords: [
    "Ahmadullah Mukhlis work experience",
    "Full stack developer career",
    "Fintech engineer experience",
    "Da Afghanistan Bank developer",
    "AFPS Afghanistan payment system",
    "Banking software engineer career",
    "Full stack developer resume",
    "Software engineer employment history",
    "Baheer Group developer",
    "Upwork full stack developer",
    "Microservices engineer experience",
    "Payment systems engineer career",
    "Enterprise software engineer career",
    "Full stack developer Afghanistan experience",
  ],
  path: "/experience",
});

const EXPERIENCE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${PROFILE.name} — Work Experience`,
  url: `${SITE_URL}/experience`,
  mainEntity: {
    "@type": "Person",
    name: SITE_NAME,
    jobTitle: "Full Stack, Fintech & Software Engineer",
    worksFor: SITE_NAME,
  },
};

const HIGHLIGHTS = [
  { value: "5+", label: "Years shipping software" },
  { value: "45+", label: "Projects across web, mobile & APIs" },
  { value: "1M+", label: "Requests/min platform experience" },
  { value: "100%", label: "Upwork job success score" },
];

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <JsonLd data={EXPERIENCE_JSONLD} />
        <PageHero
          eyebrow="experience"
          title="A career built on"
          highlight="real systems."
          lead="From freelance delivery to national payment infrastructure — experience across banking, fintech, enterprise platforms, and product engineering, working worldwide."
          chips={["Da Afghanistan Bank", "AFPS payments", "Baheer Group", "Freelance"]}
        />

        <section className="mx-auto max-w-6xl px-5 pb-4 md:pb-8">
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 70}>
                <div className="card-line glow-card stagger-card group relative p-5" style={{ "--card-delay": `${120 + i * 70}ms` } as CSSProperties}>
                  <span className="absolute left-0 top-0 h-0.5 w-0 rounded-full bg-gold/80 transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                  <dd className="font-mono text-3xl font-bold text-gold">{s.value}</dd>
                  <dd className="mt-2 text-[13px] leading-5 text-muted">{s.label}</dd>
                </div>
              </RevealOnScroll>
            ))}
          </dl>
        </section>

        <Experience />

        <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:py-20">
          <RevealOnScroll>
            <div className="section-line mb-8">
              <span className="motion-line mono-label text-gold">{`// education`}</span>
              <h2 className="motion-line text-2xl font-bold text-ink md:text-3xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
                Education & certifications
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid gap-4 md:grid-cols-2">
            {EDUCATION.map((e, i) => (
              <RevealOnScroll key={e.title} delay={i * 70}>
                <div className="card-line glow-card stagger-card p-6" style={{ "--card-delay": `${120 + i * 70}ms` } as CSSProperties}>
                  <h3 className="text-base font-semibold text-ink">{e.title}</h3>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {e.org} · {e.period}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={120}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/cv" className="btn-solid-gold !text-xs">
                View printable CV
                <span className="arr" aria-hidden="true">→</span>
              </Link>
              <Link href="/about" className="btn-ghost !text-xs">
                Read my story
              </Link>
            </div>
          </RevealOnScroll>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}