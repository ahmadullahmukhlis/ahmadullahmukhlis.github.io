"use client";

import { useEffect, useMemo, useState } from "react";
import type { ArticleSection } from "@/lib/blog";

export function ArticleToc({ sections }: { sections: ArticleSection[] }) {
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.28;
      let nextActiveId = sectionIds[0];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (section.getBoundingClientRect().top <= viewportAnchor) {
          nextActiveId = id;
        }
      }

      setActiveId(nextActiveId);
    };

    updateActiveSection();

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: "-18% 0px -64% 0px",
      threshold: [0, 0.2, 0.55, 1],
    });

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return (
    <aside className="article-aside" aria-label="Article table of contents">
      <p className="mono-label text-gold">On this page</p>
      <ol className="article-toc mt-4">
        {sections.map((section, index) => {
          const isActive = section.id === activeId;

          return (
            <li key={section.id}>
              <a
                aria-current={isActive ? "location" : undefined}
                className="article-toc-link"
                data-active={isActive ? "true" : undefined}
                href={`#${section.id}`}
                onClick={() => setActiveId(section.id)}
              >
                <span className="article-toc-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="article-toc-title">{section.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
