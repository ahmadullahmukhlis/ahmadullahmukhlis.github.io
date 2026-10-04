import Link from "next/link";
import { PROFILE, SOCIALS } from "@/lib/data";
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
    <footer className="border-t border-rule bg-panel">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 border-b border-rule py-12 md:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block h-11 w-11 shrink-0">
                <Image
                  src={BRAND.mark}
                  alt=""
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col gap-1.5">
                <span className="wordmark text-2xl">Mukhlis</span>
                <span className="wordmark-sub">Software Solution</span>
              </span>
            </div>
            <p className="mt-5 font-mono text-xs text-muted">
              Software engineering by {PROFILE.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Professional software engineering for fintech, payment systems, web,
              mobile, desktop, APIs, ERP, cloud, and enterprise platforms.
            </p>
          </div>

          <nav aria-label="Pages">
            <p className="mono-label text-ink">Index</p>
            <ul className="mt-5 space-y-2.5">
              {PAGES.map((p, i) => (
                <li key={p.href}>
                  <Link href={p.href} className="link-arrow text-xs">
                    <span className="text-[10px] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <p className="mono-label text-ink">Services</p>
            <ul className="mt-5 space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="link-arrow text-xs">
                    {s.label}
                    <span className="arr" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mono-label text-ink">Connect</p>
            <ul className="mt-5 space-y-2.5">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-xs"
                  >
                    {s.label}
                    <span className="arr" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={PROFILE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block font-mono text-xs text-ink transition-colors hover:text-gold"
            >
              WhatsApp · {PROFILE.phone}
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-2 block break-all font-mono text-xs text-ink transition-colors hover:text-gold"
            >
              {PROFILE.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 py-6 md:flex-row md:items-center">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Mukhlis Software Solution · {PROFILE.name}.
          </p>
          <p className="mono-label">Design, engineering, deployment</p>
          <Link href="/" className="link-arrow text-xs">
            Back to top
            <span className="arr" aria-hidden="true">
              ↑
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
