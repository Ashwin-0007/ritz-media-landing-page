import { gsap, ScrollTrigger } from "./gsap.config";

// ─── Reduced Motion Check ─────────────────────────────────────────────────────
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ─── Section Reveal ───────────────────────────────────────────────────────────
// Fades in + translates up — used for every section entry
export function revealSection(
  el: Element | null,
  options?: {
    yOffset?: number;
    duration?: number;
    ease?: string;
    start?: string;
    delay?: number;
  }
) {
  if (!el || prefersReducedMotion()) return;
  const {
    yOffset = 50,
    duration = 0.9,
    ease = "power3.out",
    start = "top 85%",
    delay = 0,
  } = options ?? {};

  gsap.fromTo(
    el,
    { opacity: 0, y: yOffset },
    {
      opacity: 1,
      y: 0,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play reset play reset",
        once: false,
      },
    }
  );
}

// ─── Stagger Reveal ───────────────────────────────────────────────────────────
// Animates children one-by-one with a stagger delay
export function staggerReveal(
  els: Element[] | NodeListOf<Element> | null,
  trigger: Element | null,
  options?: {
    stagger?: number;
    yOffset?: number;
    duration?: number;
    ease?: string;
    start?: string;
  }
) {
  if (!els || !trigger || prefersReducedMotion()) return;
  const {
    stagger = 0.12,
    yOffset = 40,
    duration = 0.8,
    ease = "power3.out",
    start = "top 85%",
  } = options ?? {};

  gsap.fromTo(
    Array.from(els),
    { opacity: 0, y: yOffset },
    {
      opacity: 1,
      y: 0,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play reset play reset",
        once: false,
      },
    }
  );
}

// ─── Text Reveal (line-by-line) ────────────────────────────────────────────────
// Wraps text in overflow-hidden spans and animates Y: 100% → 0
export function textRevealLines(
  el: HTMLElement | null,
  options?: {
    stagger?: number;
    duration?: number;
    ease?: string;
    start?: string;
  }
) {
  if (!el || prefersReducedMotion()) return;
  const {
    stagger = 0.1,
    duration = 0.85,
    ease = "power4.out",
    start = "top 85%",
  } = options ?? {};

  // Split text into word spans wrapped in overflow-hidden lines
  const text = el.innerText;
  const words = text.split(" ");
  el.innerHTML = words
    .map(
      (word) =>
        `<span class="inline-block overflow-hidden leading-none"><span class="inline-block word-reveal">${word}&nbsp;</span></span>`
    )
    .join("");

  const wordEls = el.querySelectorAll(".word-reveal");

  gsap.fromTo(
    wordEls,
    { y: "105%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play reset play reset",
        once: false,
      },
    }
  );
}

// ─── Image Reveal ─────────────────────────────────────────────────────────────
// Scale 1.08→1 + fade in + slight upward movement
export function imageReveal(
  el: Element | null,
  options?: {
    duration?: number;
    ease?: string;
    start?: string;
    yOffset?: number;
  }
) {
  if (!el || prefersReducedMotion()) return;
  const {
    duration = 1.2,
    ease = "power3.out",
    start = "top 85%",
    yOffset = 20,
  } = options ?? {};

  gsap.fromTo(
    el,
    { opacity: 0, scale: 1.08, y: yOffset },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play reset play reset",
        once: false,
      },
    }
  );
}

// ─── Parallax ─────────────────────────────────────────────────────────────────
// Moves element slower than scroll — decorative depth effect
export function parallaxElement(
  el: Element | null,
  trigger: Element | null,
  speed: number = 0.3
) {
  if (!el || !trigger || prefersReducedMotion()) return;

  gsap.to(el, {
    y: () => -(ScrollTrigger.maxScroll(window) * speed * 0.1),
    ease: "none",
    scrollTrigger: {
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    },
  });
}

// ─── Hero Entrance Timeline ───────────────────────────────────────────────────
// Returns a GSAP timeline for the hero section entrance
export function createHeroTimeline(elements: {
  video?: Element | null;
  button?: Element | null;
}) {
  if (prefersReducedMotion()) return null;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  if (elements.video) {
    tl.fromTo(
      elements.video,
      { scale: 1.06, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" },
      0
    );
  }

  if (elements.button) {
    tl.fromTo(
      elements.button,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7 },
      1.2
    );
  }

  return tl;
}
