import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { languageColor, privacyColor } from "@/lib/types";
import type { Project } from "@/lib/types";
import projectsData from "@/data/projects.json";
import { SITE_NAME, SITE_URL, buildMetadata } from "@/lib/seo";

const PROJECTS = projectsData as Project[];

function getProject(slug: string) {
  return PROJECTS.find((project) => project.id === slug);
}

function buildCaseStudySections(project: Project) {
  const category = project.categories.join(" and ");
  const firstFeature = project.features[0]?.toLowerCase() ?? "the primary workflow";
  const stack = project.tech.slice(0, 3).join(", ");

  return {
    context: `${project.title} is a ${category} product created for a clear operational need: ${project.summary.toLowerCase()} The product context calls for an interface that is easy to understand, dependable in daily use, and structured around the people and workflows it serves.`,
    approach: `The implementation combines ${stack} to create a practical foundation for the product. The experience is organized around ${firstFeature}, with the wider feature set supporting a consistent path from input to review, action, and ongoing management.`,
    outcome: `The result is a focused ${project.language} solution that brings the project requirements into one coherent experience. Its screens, data flows, and controls are shaped to give users a clear next step while leaving room for the product to grow with future operational needs.`,
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return buildMetadata({
      title: "Project not found",
      description: "The requested project could not be found.",
      keywords: ["project not found"],
      path: `/projects/${slug}`,
    });
  }

  return buildMetadata({
    title: `${project.title} | Project Case Study`,
    description: project.summary,
    keywords: project.tech,
    path: `/projects/${project.id}`,
    image: project.images?.[0],
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const projectIndex = PROJECTS.findIndex((item) => item.id === project.id);
  const previous = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const dot = languageColor(project.language);
  const caseStudy = buildCaseStudySections(project);

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.details,
    url: `${SITE_URL}/projects/${project.id}`,
    creator: { "@type": "Person", name: SITE_NAME },
    keywords: project.tech.join(", "),
    image: project.images?.map((image) => `${SITE_URL}${image}`),
  };

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <JsonLd data={projectJsonLd} />

        <section className="relative overflow-hidden pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="grid-faint pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5">
            <nav className="mono-label flex items-center gap-2" aria-label="Breadcrumb">
              <Link href="/" className="text-muted transition-colors hover:text-gold">home</Link>
              <span className="text-gold/60" aria-hidden="true">/</span>
              <Link href="/projects" className="text-muted transition-colors hover:text-gold">projects</Link>
              <span className="text-gold/60" aria-hidden="true">/</span>
              <span className="truncate text-soft">{project.id}</span>
            </nav>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="flex items-center gap-2" style={{ color: privacyColor(project.privacy) }}>
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: privacyColor(project.privacy) }} />
                    {project.privacy}
                  </span>
                  <span className="text-muted">·</span>
                  <span className="text-muted">{project.language}</span>
                  <span className="text-muted">·</span>
                  <span className="text-muted">updated {project.updated}</span>
                </div>
                <h1 className="mt-5 max-w-4xl font-sans text-4xl font-bold leading-[1.04] text-ink sm:text-5xl md:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">{project.summary}</p>
              </div>

              <div className="motion-panel p-5 lg:justify-self-end lg:max-w-sm">
                <p className="mono-label">project profile</p>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-mono text-xs text-muted">Type</p>
                    <p className="mt-1 text-sm text-ink">{project.categories.join(" / ")}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted">Primary stack</p>
                    <p className="mt-1 text-sm text-ink">{project.tech[0]}</p>
                  </div>
                </div>
                {project.video ? (
                  <a href={project.video} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6 inline-flex w-full items-center justify-center gap-2 !text-xs">
                    <span aria-hidden="true">▶</span> Watch demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mono-label">executive overview</p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-soft">{project.details}</p>
            </div>
            <div>
              <p className="mono-label">technology</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {project.tech.map((item) => <li key={item} className="tag-pill" style={{ borderColor: `${dot}55` }}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <article className="card-line p-6">
              <p className="mono-label">01 / context</p>
              <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.context}</p>
            </article>
            <article className="card-line p-6">
              <p className="mono-label">02 / approach</p>
              <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.approach}</p>
            </article>
            <article className="card-line p-6">
              <p className="mono-label">03 / delivery</p>
              <p className="mt-4 text-sm leading-7 text-muted">{caseStudy.outcome}</p>
            </article>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="mono-label">product capabilities</p>
              <ul className="mt-5 grid gap-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4 text-sm leading-6 text-muted">
                    <span className="mt-0.5 font-mono text-gold" aria-hidden="true">+</span>{feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mono-label">screens & interface</p>
              {project.images?.length ? (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.images.map((src, index) => (
                    <div key={src} className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-panel ${index === 0 ? "sm:col-span-2 aspect-[16/8]" : "aspect-[4/3]"}`}>
                      <Image src={src} alt={`${project.title} screen ${index + 1}`} fill sizes={index === 0 ? "(max-width: 640px) 100vw, 760px" : "(max-width: 640px) 100vw, 380px"} className="image-zoom object-cover" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="project-visual mt-5 flex min-h-64 flex-col justify-between rounded-2xl border border-white/10 p-6">
                  <span className="font-mono text-xs text-muted">visual documentation</span>
                  <div><p className="font-mono text-xs text-gold">{project.language} build</p><p className="mt-2 text-2xl font-bold text-ink">A focused interface for real work.</p></div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-20 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
            <Link href={`/projects/${previous.id}`} className="card-line group p-5">
              <span className="mono-label">← previous project</span>
              <span className="mt-3 block text-lg font-bold text-ink transition-colors group-hover:text-gold">{previous.title}</span>
            </Link>
            <Link href={`/projects/${next.id}`} className="card-line p-5 text-left sm:text-right">
              <span className="mono-label">next project →</span>
              <span className="mt-3 block text-lg font-bold text-ink transition-colors hover:text-gold">{next.title}</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
