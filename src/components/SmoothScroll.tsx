"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap.config";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Still set up ScrollTrigger but without Lenis
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    // Sync Lenis RAF with GSAP ticker for perfect ScrollTrigger integration
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}
