"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { imageReveal } from "@/lib/animations/utils";

export default function Monogram() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    imageReveal(imgRef.current, { start: "top 80%", yOffset: 30 });
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section ref={sectionRef} className="relative h-[963px] w-[1440px] bg-white overflow-hidden">
      {/* Crisp R outline */}
      <img
        ref={imgRef}
        src="/assets/monogram.png"
        alt="Monogram"
        className="absolute left-0 top-0 h-[841px] w-full object-contain pointer-events-none"
        style={{ willChange: "transform, opacity" }}
      />
    </section>
  );
}
