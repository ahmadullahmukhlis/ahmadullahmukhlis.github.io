import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/components/Contact";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, buildMetadata } from "@/lib/seo";
import { PROFILE } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Contact Ahmadullah Mukhlis | Hire a Full Stack & Fintech Engineer",
  description:
    "Contact Ahmadullah Mukhlis to hire a full stack and fintech software engineer for web, mobile, desktop, payment systems, banking platforms, enterprise software, and APIs. Available for remote and on-site work worldwide.",
  keywords: [
    "Contact Ahmadullah Mukhlis",
    "Hire full stack developer",
    "Hire fintech developer",
    "Hire software engineer",
    "Hire flutter developer",
    "Hire payment systems developer",
    "Freelance full stack developer contact",
    "Software engineer email",
    "Hire developer Afghanistan",
    "Full stack developer for hire",
    "Remote software engineer contact",
    "Payment gateway expert hire",
    "To hire enterprise software developer",
  ],
  path: "/contact",
});

const CONTACT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Person",
    name: SITE_NAME,
    email: `mailto:${PROFILE.email}`,
    telephone: `+${PROFILE.phone.replace(/\s/g, "")}`,
    jobTitle: "Full Stack, Fintech & Software Engineer",
  },
};

const COMMON = [
  { title: "Payment or banking platform", text: "Gateways, switches, ISO 8583, digital banking, USSD, and offline-first payments." },
  { title: "Enterprise or internal system", text: "ERP, MIS, HR, e-commerce, dashboards, and role-based admin platforms." },
  { title: "Web, mobile, or desktop app", text: "React, Next.js, Flutter, React Native, and Windows desktop with offline support." },
  { title: "APIs, microservices & cloud", text: "Backends, integrations, AWS/GCP/Azure, Docker, Kubernetes, and CI/CD." },
  { title: "Full-time engineering role", text: "Open to senior full-stack and fintech engineering positions worldwide." },
  { title: "Consulting & code reviews", text: "Architecture reviews, security audits, and delivery strategy for existing teams." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <JsonLd data={CONTACT_JSONLD} />
        <PageHero
          eyebrow="contact"
          title="Let's build something"
          highlight="worth shipping."
          lead="Whether it's a payment system, an enterprise platform, an app, or a role — I'm glad to talk. I usually reply within one day."
          chips={[PROFILE.location, "Remote · On-site", "WhatsApp · " + PROFILE.phone, "Replies within a day"]}
        />

        <Contact />

        <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:py-20">
          <RevealOnScroll>
            <div className="section-line mb-8">
              <span className="motion-line mono-label text-gold">{`// how I can help`}</span>
              <h2 className="motion-line text-2xl font-bold text-ink md:text-3xl" style={{ "--line-delay": "90ms" } as CSSProperties}>
                Best reached for
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {COMMON.map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 70}>
                <div className="card-line glow-card stagger-card h-full p-6" style={{ "--card-delay": `${120 + i * 70}ms` } as CSSProperties}>
                  <h3 className="font-sans text-base font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{c.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}