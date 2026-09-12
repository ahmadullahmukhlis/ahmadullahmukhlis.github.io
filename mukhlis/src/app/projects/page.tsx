import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Projects } from "@/components/Projects";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, buildMetadata } from "@/lib/seo";
import projectsData from "@/data/projects.json";
import type { Project } from "@/lib/types";

const PROJECTS = projectsData as Project[];

export const metadata: Metadata = buildMetadata({
  title: "Projects & Portfolio | Fintech, Web, Mobile & API Work",
  description:
    "Explore the portfolio of Ahmadullah Mukhlis: 45+ fintech, payment, web, mobile, desktop, enterprise, and API projects including banking platforms, ERP systems, mobile apps, and more.",
  keywords: [
    "Full stack developer portfolio",
    "Fintech projects portfolio",
    "Payment system projects",
    "Banking software projects",
    "Mobile app portfolio",
    "Web application portfolio",
    "ERP developer projects",
    "MIS system projects",
    "Software engineer projects Afghanistan",
    "Microservices projects",
    "Flutter projects",
    "Laravel projects",
    "Spring Boot projects",
    "Vue.js projects",
    "Next.js projects",
    "USSD banking project",
    "Payment gateway projects",
    "E-commerce development projects",
  ],
  path: "/projects",
});

const PROJECTS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: SITE_NAME,
  url: `${SITE_URL}/projects`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      description: p.summary,
      keywords: p.tech.join(", "),
    })),
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <JsonLd data={PROJECTS_JSONLD} />
        <PageHero
          eyebrow="projects"
          title="A portfolio of"
          highlight="shipped work."
          lead={`${PROJECTS.length} projects across fintech, payments, web, mobile, desktop, enterprise systems, APIs, and full-stack platforms — public and private.`}
          chips={["Fintech & banking", "Web apps", "Mobile & desktop", "APIs & microservices"]}
        />
        <Projects
          title="Full portfolio"
          index="01"
          hint={`Explore all ${PROJECTS.length} projects. Filter by product type, open any project for full details, stack, and features.`}
        />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}