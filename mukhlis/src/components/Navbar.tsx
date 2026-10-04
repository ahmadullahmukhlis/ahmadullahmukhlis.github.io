"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BRAND } from "@/lib/brand";

const LINKS = [
  { href: "/", label: "Home", num: "01" },
  { href: "/about", label: "About", num: "02" },
  { href: "/services", label: "Services", num: "03" },
  { href: "/projects", label: "Work", num: "04" },
  { href: "/blog", label: "Writing", num: "05" },
  { href: "/contact", label: "Contact", num: "06" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`no-print sticky top-0 z-50 bg-paper transition-[border-color] duration-300 ${
        scrolled ? "border-b-2 border-ink" : "border-b border-rule"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-3"
          aria-label="Mukhlis Software Solution — home"
        >
          <span className="relative block h-9 w-9 shrink-0">
            <Image
              src={BRAND.mark}
              alt=""
              fill
              sizes="36px"
              className="object-contain"
              priority
            />
          </span>
          <span className="flex flex-col gap-1">
            <span className="wordmark text-[15px]">Mukhlis</span>
            <span className="wordmark-sub hidden sm:block">Software Solution</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`nav-sweep font-mono text-[11px] uppercase tracking-[0.12em] ${
                  active ? "active text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <span className={active ? "text-gold" : "text-gold/60"}>{l.num}</span>
                <span className="ml-1.5">{l.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-solid-gold hidden !min-h-9 !px-4 !py-2 !text-[11px] !uppercase !tracking-[0.12em] sm:inline-flex"
          >
            Hire me
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-paper md:hidden"
          >
            {open ? <span className="font-mono text-xs">✕</span> : <span className="font-mono text-xs">☰</span>}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="menu-drop border-t border-rule bg-paper md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-3 border-b border-rule py-4 font-mono text-sm ${
                    active ? "text-ink" : "text-muted"
                  }`}
                >
                  <span className="text-[10px] text-gold">{l.num}</span>
                  <span>{l.label}</span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-solid-gold my-5 !text-sm"
            >
              Hire me
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
