"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROFILE } from "@/lib/data";

const LINKS = [
  { href: "/", label: "Home", num: "00" },
  { href: "/about", label: "About", num: "01" },
  { href: "/services", label: "Services", num: "02" },
  { href: "/projects", label: "Work", num: "03" },
  { href: "/experience", label: "Path", num: "04" },
  { href: "/contact", label: "Contact", num: "05" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`nav-enter no-print fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-charcoal/90 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl"
          : "border-white/5 bg-charcoal/55 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" onClick={close} className="group flex items-center gap-3" aria-label="Ahmadullah Mukhlis — home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/50 bg-gold/10 font-mono text-sm font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
            {PROFILE.initials}
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold text-ink">{PROFILE.name}</span>
            <span className="block font-mono text-[11px] text-muted">Full-stack · Fintech · Engineer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`nav-sweep group font-mono text-xs transition-colors hover:text-gold ${
                  active ? "active text-gold" : "text-muted"
                }`}
              >
                <span className={`${active ? "text-gold" : "text-ink/35 group-hover:text-gold/50"}`}>{l.num}/</span>
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
            className="hidden h-9 items-center gap-2 rounded-lg border border-[#25d366]/40 bg-[#25d366]/10 px-3 font-mono text-xs text-[#4ade80] transition-colors hover:bg-[#25d366]/20 hover:text-[#6ee7a0] sm:inline-flex"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <Link href="/contact" className="btn-solid-gold hidden !min-h-9 !px-3.5 !py-2 !text-xs sm:inline-flex">
            Hire me
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-ink transition-colors hover:border-gold hover:text-gold md:hidden"
          >
            {open ? <span className="font-mono">✕</span> : <span className="font-mono">☰</span>}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="menu-drop border-t border-white/10 bg-charcoal/95 px-5 py-4 shadow-[0_22px_48px_-32px_rgba(0,0,0,0.9)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-sm transition-colors hover:text-gold ${active ? "text-gold" : "text-muted"}`}
                >
                  <span className="text-gold">{l.num}/</span> {l.label}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-solid-gold !text-sm">
              Hire me
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.44 4.43-9.87 9.89-9.87a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 7 9.89 9.89 0 0 1-9.89 9.86Zm8.42-18.3A11.78 11.78 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.07 24l6.32-1.66a11.87 11.87 0 0 0 5.66 1.44h.01c6.54 0 11.88-5.34 11.88-11.89 0-3.18-1.24-6.16-3.47-8.4Z" />
    </svg>
  );
}