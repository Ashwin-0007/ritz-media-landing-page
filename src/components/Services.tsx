"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap.config";
import { imageReveal, prefersReducedMotion } from "@/lib/animations/utils";

interface ServiceItem {
  n: string;
  label: string;
  active?: boolean;
  numX: number;
  numY: number;
  txtX: number;
  txtY: number;
}

const SERVICES: ServiceItem[] = [
  { n: '01', label: 'Digital Marketing', active: true, numX: 266, numY: 191, txtX: 320, txtY: 138 },
  { n: '02', label: 'Creative Services', numX: 272, numY: 338, txtX: 326, txtY: 285 },
  { n: '03', label: 'Print Advertising', numX: 272, numY: 485, txtX: 326, txtY: 432 },
  { n: '04', label: 'Radio Advertising', numX: 264, numY: 632, txtX: 318, txtY: 579 },
  { n: '05', label: 'Content Marketing', numX: 221, numY: 779, txtX: 275, txtY: 726 },
  { n: '06', label: 'Celebrity Endorsements', numX: 108, numY: 938, txtX: 162, txtY: 885 },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const modelRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    // Stagger reveal for each service row pair
    const rows = sectionRef.current?.querySelectorAll(".service-row");
    if (rows && sectionRef.current) {
      gsap.fromTo(
        Array.from(rows),
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }

    // Model image reveal
    imageReveal(modelRef.current, { start: "top 85%", yOffset: 25 });
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section ref={sectionRef} className="relative h-[1123px] w-[1440px] bg-white overflow-visible">
      {SERVICES.map((s) => (
        <div key={s.n} className="service-row card-hover">
          <span
            className={`absolute font-spartan font-semibold text-[36px] leading-[33px] ${
              s.active ? 'text-black' : 'text-black/20'
            }`}
            style={{ left: s.numX, top: s.numY, willChange: "transform, opacity" }}
          >
            {s.n}
          </span>
          <span
            className={`absolute font-spartan font-semibold text-[96px] leading-[88px] whitespace-nowrap ${
              s.active ? 'text-black' : 'text-black/20'
            }`}
            style={{ left: s.txtX, top: s.txtY, willChange: "transform, opacity" }}
          >
            {s.label}
          </span>
        </div>
      ))}

      {/* Overlapping model image */}
      <img
        ref={modelRef}
        src="/assets/services-model.png"
        alt=""
        className="img-hover absolute left-[721px] top-[-115px] z-20 h-[578px] w-[420px] object-cover object-top"
        style={{ willChange: "transform, opacity" }}
      />
    </section>
  );
}
