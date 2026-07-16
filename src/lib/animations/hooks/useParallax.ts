"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { parallaxElement } from "../utils";

export function useParallax<T extends HTMLElement = HTMLElement>(
  speed: number = 0.3
) {
  const elRef = useRef<T>(null);
  const triggerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      parallaxElement(elRef.current, triggerRef.current, speed);
    },
    { dependencies: [speed] }
  );

  return { elRef, triggerRef };
}
