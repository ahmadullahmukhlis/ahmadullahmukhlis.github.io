import type { CSSProperties } from "react";
import { PROFILE } from "@/lib/data";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-transparent">
      <RevealOnScroll>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5 py-8 md:flex-row md:items-center">
          <p className="motion-line font-mono text-xs text-muted">
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.
          </p>

          <p className="motion-line mono-label" style={{ "--line-delay": "80ms" } as CSSProperties}>Design, engineering, deployment</p>

          <a href="#home" className="motion-line link-arrow text-xs" style={{ "--line-delay": "160ms" } as CSSProperties}>
            Back to top
            <span className="arr" aria-hidden="true">↑</span>
          </a>
        </div>
      </RevealOnScroll>
    </footer>
  );
}
