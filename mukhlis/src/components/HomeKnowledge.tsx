import Link from "next/link";
import { ARTICLES, BLOG_CATEGORIES } from "@/lib/blog";
import { SectionHeading } from "@/components/SectionHeading";

const featuredSlugs=["iso-8583-guide","payment-switch-architecture","laravel-production-architecture","flutter-application-architecture","nextjs-production-architecture","docker-production-guide"];
export function HomeKnowledge(){const articles=featuredSlugs.map(slug=>ARTICLES.find(a=>a.slug===slug)).filter(Boolean);return <section className="mx-auto max-w-6xl px-5 py-20"><SectionHeading index="02" title="Featured technical knowledge" hint="Deep, practical guides for payment systems and production software."/><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{articles.map(a=>a&&<Link key={a.slug} href={`/blog/${a.slug}`} className="card-line p-6"><span className="font-mono text-xs text-gold">{BLOG_CATEGORIES.find(c=>c.slug===a.category)?.name}</span><h3 className="mt-3 text-lg font-bold leading-snug text-ink">{a.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{a.excerpt}</p></Link>)}</div><div className="mt-8"><Link href="/knowledge" className="btn-ghost">Explore the knowledge base →</Link></div></section>}
