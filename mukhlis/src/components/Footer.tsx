import type { CSSProperties } from "react";
import Link from "next/link";
import { PROFILE, SOCIALS } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  { href: "/services#fintech", label: "Fintech & Payments" },
  { href: "/services#web", label: "Web Applications" },
  { href: "/services#mobile", label: "Mobile & Desktop" },
  { href: "/services#enterprise", label: "Enterprise & APIs" },
  { href: "/services#cloud", label: "Cloud & DevOps" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-white/[0.012]">
      <RevealOnScroll>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
          <div>
            <p className="font-sans text-base font-bold text-ink">{PROFILE.name}</p>
            <p className="mt-1 font-mono text-xs text-muted">{PROFILE.role}</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Full-stack and fintech software engineer building secure web,
              mobile, desktop, online and offline applications, payments, and
              enterprise platforms.
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
              href={`mailto:${PROFILE.email}`}
              className="mt-5 block break-all font-mono text-xs text-muted transition-colors hover:text-gold"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-6 md:flex-row md:items-center">
            <p className="motion-line font-mono text-xs text-muted">
              © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.
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