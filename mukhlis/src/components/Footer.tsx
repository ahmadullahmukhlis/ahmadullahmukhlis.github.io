import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-transparent">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5 py-8 md:flex-row md:items-center">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.
        </p>

        <p className="mono-label">Design, engineering, deployment</p>

        <a href="#home" className="link-arrow text-xs">
          Back to top
          <span className="arr" aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
