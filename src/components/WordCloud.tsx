"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { staggerReveal, parallaxElement } from "@/lib/animations/utils";

interface WordItem {
  t: string;
  x: number;
  y: number;
  active?: boolean;
}

const WORDS: WordItem[] = [
  { t: 'Creative Service', x: 731, y: 67 },
  { t: 'Digital Marketing', x: 44, y: 57 },
  { t: 'Print Advertisement', x: 149, y: 156, active: true },
  { t: 'Radio Advertisement', x: 846, y: 156 },
  { t: 'Content Marketing', x: 182, y: 255 },
  { t: 'Web Development', x: 846, y: 255 },
  { t: 'Influencer Marketing', x: 0, y: 337 },
  { t: 'Celebrity Endorsement', x: 684, y: 337 },
  { t: 'Creative Service', x: 245, y: 436 },
  { t: 'Print Advertisement', x: 767, y: 436 },
  { t: 'Celebrity Endorsement', x: 70, y: 562 },
  { t: 'Radio Advertisement', x: 797, y: 562 },
  { t: 'Influencer Marketing', x: 0, y: 661 },
  { t: 'Digital Marketing', x: 721, y: 710 },
];

export default function WordCloud() {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Stagger reveal for scattered words
    const wordEls = sectionRef.current?.querySelectorAll(".word-item");
    if (wordEls && sectionRef.current) {
      staggerReveal(wordEls, sectionRef.current, {
        stagger: 0.08,
        yOffset: 20,
        start: "top 80%",
        duration: 0.7,
      });
    }

    // Parallax watermark
    if (watermarkRef.current) {
      parallaxElement(watermarkRef.current, sectionRef.current, 0.2);
    }
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section ref={sectionRef} className="relative h-[822px] w-[1440px] overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/wordcloud-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Red wash overlay */}
      <div className="absolute inset-0 bg-[rgba(53,10,10,0.70)]" />

      {/* Centered faint R watermark */}
      <img
        ref={watermarkRef}
        src="/assets/logo-r-watermark.png"
        alt=""
        className="absolute left-[451px] top-[82px] h-[603px] w-[538px] object-contain opacity-[0.12] mix-blend-overlay"
        style={{ willChange: "transform" }}
      />

      {/* Scattered words */}
      {WORDS.map((w, i) => (
        <span
          key={i}
          className={`word-item absolute font-spartan font-semibold text-[60px] leading-[55px] uppercase whitespace-nowrap ${
            w.active ? 'text-white' : 'text-white/30'
          }`}
          style={{ left: w.x, top: w.y, willChange: "transform, opacity" }}
        >
          {w.t}
        </span>
      ))}
    </section>
  );
}
