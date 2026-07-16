"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { imageReveal } from "../utils";

interface ImageRevealOptions {
  duration?: number;
  ease?: string;
  start?: string;
  yOffset?: number;
}

export function useImageReveal<T extends HTMLElement = HTMLElement>(
  options?: ImageRevealOptions
) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      imageReveal(ref.current, options);
    },
    { scope: ref, dependencies: [] }
  );

  return ref;
}
