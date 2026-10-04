import Link from "next/link";
import { PROFILE, SOCIALS } from "@/lib/data";
import type { Article, ArticleSection } from "@/lib/blog";
import { readingTime } from "@/lib/blog";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">{items.map((item, i) => <li key={`${item.label}-${i}`} className="flex items-center gap-2">{i > 0 && <span className="text-gold/50">/</span>}{item.href ? <Link href={item.href} className="hover:text-gold">{item.label}</Link> : <span aria-current="page" className="text-soft">{item.label}</span>}</li>)}</ol></nav>;
}

export function ArticleHeader({ article, categoryName }: { article: Article; categoryName: string }) {
  return <header className="border-b border-rule pb-10">
    <Link href={`/blog/${article.category}`} className="font-mono text-xs uppercase tracking-[.18em] text-gold">{categoryName}</Link>
    <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-tight text-ink md:text-6xl">{article.title}</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{article.excerpt}</p>
    <ArticleMetadata article={article} />
    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Article tags">{article.tags.map(tag => <li key={tag}><Link className="tag-pill" href={`/blog/tag/${tag.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}`}>{tag}</Link></li>)}</ul>
  </header>;
}

export function ArticleMetadata({ article }: { article: Article }) {
  return <dl className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
    <div><dt className="sr-only">Author</dt><dd>{PROFILE.name}</dd></div>
    <div><dt className="sr-only">Published</dt><dd>Published <time dateTime={article.published}>{article.published}</time></dd></div>
    <div><dt className="sr-only">Updated</dt><dd>Updated <time dateTime={article.updated}>{article.updated}</time></dd></div>
    <div><dt className="sr-only">Reading time</dt><dd>{readingTime(article)} min read</dd></div>
  </dl>;
}

export function TableOfContents({ sections }: { sections: ArticleSection[] }) {
  return <aside className="article-aside"><p className="mono-label text-gold">On this page</p><ol className="mt-4 space-y-2">{sections.map((s, i) => <li key={s.id}><a className="text-sm leading-5 text-muted hover:text-gold" href={`#${s.id}`}>{String(i + 1).padStart(2,"0")}. {s.title}</a></li>)}</ol></aside>;
}

export function CodeBlock({ language, value }: { language: string; value: string }) {
  return <figure className="my-8 border border-rule bg-panel"><figcaption className="flex items-center gap-2 border-b border-rule px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted"><span className="h-2 w-2 bg-gold" aria-hidden="true" />{language}</figcaption><pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-soft"><code>{value}</code></pre></figure>;
}

export function Callout({ children }: { children: React.ReactNode }) { return <aside className="my-7 border-l-2 border-gold bg-panel px-5 py-4 text-sm leading-7 text-soft"><strong className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold">Engineering note. </strong>{children}</aside>; }

export function TechnicalDiagram({ category }: { category: Article["category"] }) {
  const payment = category === "iso-8583" || category === "payment-systems" || category === "fintech";
  const nodes = payment ? ["Channel", "Gateway / Acquirer", "Switch / Network", "Issuer", "Response"] : ["Client", "Application boundary", "Domain services", "Data / Queue / Cache", "Observability"];
  return <figure className="my-9 border border-rule bg-panel p-5" aria-label={`${category} architecture flow`}><div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">{nodes.map((n,i) => <div key={n} className="contents"><div className="flex-1 border border-rule bg-surface px-3 py-4 text-center font-mono text-xs text-soft">{n}</div>{i < nodes.length-1 && <span className="text-center text-gold" aria-hidden="true">→</span>}</div>)}</div><figcaption className="mt-4 border-t border-rule pt-3 text-xs text-muted">Conceptual flow; production boundaries and protocols depend on the integration contract.</figcaption></figure>;
}

export function ArticleBody({ article }: { article: Article }) {
  return <div className="article-copy"><TechnicalDiagram category={article.category}/>{article.slug==="iso-8583-mti"&&<ComparisonTable headers={["MTI","Typical meaning","Direction"]} rows={[["0100","Authorization request","To authorizer"],["0110","Authorization response","From authorizer"],["0200","Financial request","To authorizer"],["0210","Financial response","From authorizer"],["0400","Reversal request","To original decision path"],["0410","Reversal response","From decision path"],["0800","Network management request","Between participants"],["0810","Network management response","Between participants"]]}/>} {article.slug==="iso-8583-stan-vs-rrn"&&<ComparisonTable headers={["Concern","STAN (DE11)","RRN (DE37)"]} rows={[["Typical length","6 numeric","Often 12 characters"],["Scope","Usually local or participant-specific","Often broader transaction path"],["Rollover","Frequent","Format-specific"],["Best use","Short-window trace","Retrieval and reconciliation"],["Global uniqueness","No","Do not assume"]]}/>} {article.sections.map((s) => <section id={s.id} key={s.id} className="scroll-mt-28 py-5"><h2>{s.title}</h2>{s.paragraphs.map((p) => <p key={p}>{p}</p>)}{s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}{s.code && <CodeBlock {...s.code} />}{s.callout && <Callout>{s.callout}</Callout>}</section>)}</div>;
}

export function ComparisonTable({headers,rows}:{headers:string[];rows:string[][]}){return <div className="my-8 overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr>{headers.map(h=><th key={h} className="border-b-2 border-ink px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">{h}</th>)}</tr></thead><tbody>{rows.map((row,i)=><tr key={i}>{row.map((cell,j)=><td key={j} className="border-b border-rule px-3 py-2.5 text-muted">{cell}</td>)}</tr>)}</tbody></table></div>}

export function FAQ({ items }: { items: Article["faqs"] }) { return <section className="mt-14 border-t border-rule pt-10"><p className="mono-label text-gold">FAQ</p><h2 className="mt-3 text-3xl font-extrabold">Frequently asked questions</h2><div className="mt-6 border-t border-rule">{items.map((f) => <details key={f.question} className="group border-b border-rule bg-surface px-5 py-4"><summary className="cursor-pointer font-bold text-ink marker:text-gold">{f.question}</summary><p className="mt-3 text-sm leading-7 text-muted">{f.answer}</p></details>)}</div></section>; }

export function AuthorBox() { return <section className="mt-12 border border-rule bg-surface p-6"><p className="mono-label text-gold">About the author</p><h2 className="mt-3 text-xl font-extrabold">About {PROFILE.name}</h2><p className="mt-3 text-sm leading-7 text-muted">Ahmadullah Mukhlis is a full-stack and fintech software engineer working across payment systems, enterprise applications, mobile development, web platforms, APIs, cloud infrastructure, and production software architecture.</p><div className="mt-4 flex flex-wrap gap-4">{SOCIALS.slice(0,3).map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="link-arrow text-xs">{s.label}<span className="arr" aria-hidden="true">↗</span></a>)}</div></section>; }

export function ShareButtons({ article }: { article: Article }) { const url = `https://ahmadullahmukhlis.com/blog/${article.slug}`; return <div className="mt-8 flex flex-wrap items-center gap-3"><span className="mono-label">Share</span><a className="tag-pill" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">LinkedIn</a><a className="tag-pill" href={`https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer">X</a></div>; }

export function RelatedServices({ slug }: { slug: string }) { const labels: Record<string,string> = { fintech: "Fintech & Payment Systems Engineering", "api-development":"API Development", "cloud-devops":"Cloud & DevOps", "mobile-development":"Mobile Development", "desktop-development":"Desktop Development", "enterprise-software":"Enterprise Software", "web-development":"Web Development" }; return <Link href={`/services/${slug}`} className="card-line mt-8 block p-5"><span className="mono-label text-gold">Related service</span><strong className="mt-2 block text-lg text-ink">{labels[slug] ?? "Software Engineering"} <span aria-hidden="true">→</span></strong></Link>; }

export function ArticleNavigation({ previous, next }: { previous?: Article; next?: Article }) { return <nav aria-label="Article navigation" className="mt-12 grid gap-3 sm:grid-cols-2">{previous ? <Link href={`/blog/${previous.slug}`} className="card-line p-5"><span className="mono-label">← Previous</span><strong className="mt-2 block text-ink">{previous.title}</strong></Link> : <span />}{next && <Link href={`/blog/${next.slug}`} className="card-line p-5 sm:text-right"><span className="mono-label">Next →</span><strong className="mt-2 block text-ink">{next.title}</strong></Link>}</nav>; }

export function RelatedArticles({ articles }: { articles: Article[] }) { return <section className="mt-14"><p className="mono-label text-gold">Continue reading</p><h2 className="mt-3 text-2xl font-extrabold">Related articles</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{articles.map(a => <Link key={a.slug} href={`/blog/${a.slug}`} className="card-line p-5"><span className="font-mono text-xs text-gold">{a.category}</span><strong className="mt-3 block text-ink">{a.title}</strong><p className="mt-3 text-sm leading-6 text-muted">{a.excerpt}</p></Link>)}</div></section>; }
