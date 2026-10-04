import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ArticleBody, ArticleHeader, ArticleNavigation, AuthorBox, Breadcrumbs, FAQ, RelatedArticles, RelatedServices, ShareButtons, TableOfContents } from "@/components/article/ArticleComponents";
import { ARTICLES, BLOG_CATEGORIES, getArticle, getCategory, readingTime } from "@/lib/blog";
import { SITE_URL, PERSON_ID, ORGANIZATION_ID, OG_IMAGE, buildMetadata } from "@/lib/seo";

export function generateStaticParams(){ return [...ARTICLES.map(a=>({slug:a.slug})),...BLOG_CATEGORIES.map(c=>({slug:c.slug}))]; }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (article) return buildMetadata({
    title: article.title,
    description: article.description,
    keywords: article.tags,
    path: `/blog/${article.slug}`,
    article: { publishedTime: article.published, modifiedTime: article.updated, tags: article.tags },
  });
  const category = getCategory(slug);
  if (category) return buildMetadata({ title: `${category.name} Engineering Articles | Ahmadullah Mukhlis`, description: category.description, keywords: [category.name, "software engineering"], path: `/blog/${category.slug}` });
  notFound();
}

export default async function BlogSlugPage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const category=getCategory(slug); if(category){ const items=ARTICLES.filter(a=>a.category===category.slug); return <><Navbar/><main className="page-shell"><section className="mx-auto max-w-6xl px-5 pb-24 pt-32"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Articles",href:"/blog"},{label:category.name}]}/><h1 className="mt-10 text-5xl font-bold text-ink">{category.name}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{category.description}</p><div className="mt-12 grid gap-5 md:grid-cols-2">{items.map(a=><Link key={a.slug} href={`/blog/${a.slug}`} className="card-line p-6"><span className="font-mono text-xs text-gold">{readingTime(a)} min read</span><h2 className="mt-3 text-xl font-bold text-ink">{a.title}</h2><p className="mt-3 text-sm leading-7 text-muted">{a.excerpt}</p></Link>)}</div></section></main><Footer/></>; }
  const article=getArticle(slug); if(!article) notFound(); const categoryInfo=getCategory(article.category)!; const index=ARTICLES.findIndex(a=>a.slug===article.slug); const related=ARTICLES.filter(a=>a.slug!==article.slug&&a.category===article.category).slice(0,3); const url=`${SITE_URL}/blog/${article.slug}`; const breadcrumb=[{"@type":"ListItem",position:1,name:"Home",item:SITE_URL},{"@type":"ListItem",position:2,name:"Articles",item:`${SITE_URL}/blog`},{"@type":"ListItem",position:3,name:article.title,item:url}]; const schema={"@context":"https://schema.org","@graph":[{"@type":"BlogPosting",headline:article.title,description:article.description,datePublished:article.published,dateModified:article.updated,mainEntityOfPage:url,author:{"@id":PERSON_ID},publisher:{"@id":ORGANIZATION_ID},image:OG_IMAGE,keywords:article.tags.join(", "),articleSection:categoryInfo.name,inLanguage:"en"},{"@type":"BreadcrumbList",itemListElement:breadcrumb},{"@type":"FAQPage",mainEntity:article.faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}]};
  return <><Navbar/><main className="page-shell"><JsonLd data={schema}/><article className="mx-auto max-w-6xl px-5 pb-24 pt-28"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Articles",href:"/blog"},{label:categoryInfo.name,href:`/blog/${categoryInfo.slug}`},{label:article.title}]}/><div className="mt-10"><ArticleHeader article={article} categoryName={categoryInfo.name}/></div><div className="mt-10 grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]"><div><div className="sticky top-24"><TableOfContents sections={article.sections}/></div></div><div className="min-w-0"><ArticleBody article={article}/><FAQ items={article.faqs}/><ShareButtons article={article}/><RelatedServices slug={article.relatedService}/><AuthorBox/><RelatedArticles articles={related}/><section className="mt-12 rounded-2xl border border-white/10 p-6"><h2 className="text-xl font-bold">Building a payment platform, enterprise application, mobile app, or web system?</h2><p className="mt-3 text-sm leading-7 text-muted">Explore my engineering services or <Link className="text-gold" href="/contact">get in touch</Link> to discuss your software requirements.</p></section><ArticleNavigation previous={ARTICLES[index-1]} next={ARTICLES[index+1]}/></div></div></article></main><Footer/></>;
}
