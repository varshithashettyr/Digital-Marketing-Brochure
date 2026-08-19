import { useEffect } from "react";
import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

/** Smooth-scroll to an element; works with Lenis when available. */
export function scrollToId(id: string, options?: { offset?: number }) {
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset: options?.offset ?? 0, duration: 1.2 });
    return;
  }

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function useLenis() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let destroy: (() => void) | undefined;

    (async () => {
      const { default: Lenis } = await import("lenis");
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      lenisInstance = lenis;
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      destroy = () => {
        lenis.destroy();
        if (lenisInstance === lenis) lenisInstance = null;
      };
    })();

    return () => {
      cancelAnimationFrame(raf);
      destroy?.();
    };
  }, []);
}
