"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { textRevealLines } from "../utils";

interface TextRevealOptions {
  stagger?: number;
  duration?: number;
  ease?: string;
  start?: string;
}

export function useTextReveal<T extends HTMLElement = HTMLHeadingElement>(
  options?: TextRevealOptions
) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      if (ref.current) {
        textRevealLines(ref.current, options);
      }
    },
    { scope: ref, dependencies: [] }
  );

  return ref;
}
