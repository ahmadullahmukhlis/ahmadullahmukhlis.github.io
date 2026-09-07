import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-transparent">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 md:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {PROFILE.name} — built with Next.js
        </p>

        <p className="mono-label">design &amp; code in harmony</p>

        <a href="#home" className="link-arrow text-xs">
          back to top
          <span className="arr" aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}