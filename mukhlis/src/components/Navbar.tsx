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