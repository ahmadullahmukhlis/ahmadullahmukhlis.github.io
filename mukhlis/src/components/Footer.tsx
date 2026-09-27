import type { CSSProperties } from "react";
import Link from "next/link";
import { PROFILE, SOCIALS } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import Image from "next/image";
import { BRAND } from "@/lib/brand";

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Articles" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/services/fintech", label: "Fintech & Payments" },
  { href: "/services/web-development", label: "Web Applications" },
  { href: "/services/mobile-development", label: "Mobile Applications" },
  { href: "/services/enterprise-software", label: "Enterprise Software" },
  { href: "/services/cloud-devops", label: "Cloud & DevOps" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-white/[0.012]">
      <RevealOnScroll>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
          <div>
            <div className="max-w-[240px] rounded-xl border border-white/10 bg-white p-2"><Image src={BRAND.logo} alt="Mukhlis Software Solution" width={360} height={90} className="h-auto w-full object-contain"/></div>
            <p className="mt-3 font-mono text-xs text-muted">Software engineering by {PROFILE.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Professional software engineering for fintech, payment systems,
              web, mobile, desktop, APIs, ERP, cloud, and enterprise platforms.
            </p>
          </div>

          <div>
            <p className="mono-label text-gold">Pages</p>
            <ul className="mt-4 space-y-2.5">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="link-arrow text-xs">
                    {p.label}
                    <span className="arr" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-gold">Services</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="link-arrow text-xs">
                    {s.label}
                    <span className="arr" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-gold">Connect</p>
            <ul className="mt-4 space-y-2.5">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-xs"
                  >
                    {s.label}
                    <span className="arr" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={PROFILE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block font-mono text-xs text-muted transition-colors hover:text-gold"
            >
              WhatsApp · {PROFILE.phone}
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-2 block break-all font-mono text-xs text-muted transition-colors hover:text-gold"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-6 md:flex-row md:items-center">
            <p className="motion-line font-mono text-xs text-muted">
              © {new Date().getFullYear()} Mukhlis Software Solution · {PROFILE.name}.
            </p>
            <p className="motion-line mono-label" style={{ "--line-delay": "80ms" } as CSSProperties}>
              Design, engineering, deployment
            </p>
            <Link href="/" className="motion-line link-arrow text-xs" style={{ "--line-delay": "160ms" } as CSSProperties}>
              Back to top
              <span className="arr" aria-hidden="true">↑</span>
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </footer>
  );
}
