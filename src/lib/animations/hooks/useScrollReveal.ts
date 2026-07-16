"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { revealSection } from "../utils";

interface ScrollRevealOptions {
  yOffset?: number;
  duration?: number;
  ease?: string;
  start?: string;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options?: ScrollRevealOptions
) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      revealSection(ref.current, options);
    },
    { scope: ref, dependencies: [] }
  );

  return ref;
}
