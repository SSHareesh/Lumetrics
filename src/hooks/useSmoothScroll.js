import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initialises Lenis smooth scrolling.
 * Using autoRaf: true so Lenis manages its own RAF loop.
 * Framer Motion's useScroll listens to native scroll events
 * that Lenis dispatches, so no GSAP bridge needed.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      autoRaf: true,   // Lenis manages its own RAF — no GSAP needed
    });

    return () => lenis.destroy();
  }, []);
}
