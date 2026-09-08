"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = [
  "a",
  "button",
  ".card-line",
  ".big-card",
  ".motion-panel",
  ".tag-pill",
  "[role='button']",
].join(",");

export function CursorHalo() {
  const haloRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const halo = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const haloNode = haloRef.current;
    const dotNode = dotRef.current;

    if (!haloNode || !dotNode || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let frame = 0;

    const move = (event: PointerEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY };
      dotNode.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      document.body.classList.add("cursor-ready");
    };

    const animate = () => {
      halo.current.x += (pointer.current.x - halo.current.x) * 0.18;
      halo.current.y += (pointer.current.y - halo.current.y) * 0.18;
      haloNode.style.transform = `translate3d(${halo.current.x}px, ${halo.current.y}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    const over = (event: PointerEvent) => {
      if ((event.target as Element | null)?.closest(HOVER_SELECTOR)) {
        document.body.classList.add("cursor-hovering");
      }
    };

    const out = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest(HOVER_SELECTOR);
      const nextTarget = (event.relatedTarget as Element | null)?.closest(HOVER_SELECTOR);

      if (target && target !== nextTarget) {
        document.body.classList.remove("cursor-hovering");
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerout", out, { passive: true });
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerout", out);
      document.body.classList.remove("cursor-ready", "cursor-hovering");
    };
  }, []);

  return (
    <>
      <div ref={haloRef} className="cursor-halo" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
