import { ARTICLES } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";
export const dynamic = "force-static";
const esc=(s:string)=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]!));
export function GET(){ const items=ARTICLES.slice(0,20).map(a=>`<item><title>${esc(a.title)}</title><link>${SITE_URL}/blog/${a.slug}</link><guid>${SITE_URL}/blog/${a.slug}</guid><pubDate>${new Date(a.published).toUTCString()}</pubDate><description>${esc(a.excerpt)}</description></item>`).join(""); const xml=`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Ahmadullah Mukhlis — Engineering Articles</title><link>${SITE_URL}/blog</link><description>Payment systems, fintech and software engineering guides.</description><language>en</language>${items}</channel></rss>`; return new Response(xml,{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=3600"}}); }
