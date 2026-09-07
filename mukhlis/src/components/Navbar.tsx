"use client";

import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/data";

const LINKS = [
  { href: "#home", label: "Home", num: "00" },
  { href: "#stack", label: "Stack", num: "01" },
  { href: "#projects", label: "Work", num: "02" },
  { href: "#path", label: "Path", num: "03" },
  { href: "#words", label: "Words", num: "04" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-charcoal/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="group flex items-center gap-3" aria-label="Home">
          <span className="flex h-9 w-9 items-center justify-center border border-gold/60 font-mono text-sm font-bold text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
            {PROFILE.initials}
          </span>
          <span className="font-mono text-sm tracking-wide text-ink/90">
            {PROFILE.firstName.toLowerCase()}.<span className="text-gold">dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-sweep group font-mono text-xs tracking-widest text-muted transition-colors hover:text-gold"
            >
              <span className="text-ink/35 group-hover:text-gold/50">{l.num}/</span>{" "}
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-solid-gold hidden !px-4 !py-2 !text-xs sm:inline-flex">
            Hire me
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border border-white/15 text-ink transition-colors hover:border-gold hover:text-gold md:hidden"
          >
            {open ? <span className="font-mono">✕</span> : <span className="font-mono">☰</span>}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-charcoal/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm tracking-widest text-muted transition-colors hover:text-gold"
              >
                <span className="text-gold">{l.num}/</span> {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-solid-gold !text-sm"
            >
              Hire me
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}