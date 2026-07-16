"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { textRevealLines, staggerReveal } from "@/lib/animations/utils";

export default function AboutBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    // Text reveal on heading
    if (headingRef.current) {
      textRevealLines(headingRef.current, { start: "top 90%" });
    }
    // Stagger: paragraph + button
    const targets = [paraRef.current, btnRef.current].filter(Boolean) as Element[];
    if (targets.length && sectionRef.current) {
      staggerReveal(targets, sectionRef.current, {
        yOffset: 30,
        stagger: 0.2,
        start: "top 80%",
        duration: 0.9,
      });
    }
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section ref={sectionRef} className="relative h-[217px] w-[1440px] overflow-hidden">
      {/* Topographic tiled background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/topo-strip.png)',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
        }}
      />
      {/* Light wash overlay */}
      <div className="absolute inset-0 bg-[rgba(216,216,217,0.68)]" />
      {/* Faint dark overlay */}
      <div className="absolute inset-0 bg-[rgba(13,14,21,0.16)]" />

      {/* Copy block */}
      <div className="absolute left-[85px] top-[52px] w-[1192px] flex flex-col gap-[10px]">
        <h2
          ref={headingRef}
          className="font-spartan font-bold text-[48px] leading-[44px] text-black uppercase"
        >
          WE create desire through
        </h2>
        <p
          ref={paraRef}
          className="font-montserrat font-normal text-[22px] leading-[30px] text-black"
          style={{ willChange: "transform, opacity" }}
        >
          The world&rsquo;s largest independent brand agency. We drive growth,
          standout and fandom for&nbsp; the world&rsquo;s most desirable brands.
        </p>
      </div>

      {/* About US pill */}
      <a
        ref={btnRef}
        href="#"
        className="btn-hover absolute left-[1240px] top-[31px] h-[46px] w-[155px] rounded-[50px] bg-white flex items-center justify-center gap-[12px] pr-[7px] pl-[24px]"
        style={{ willChange: "transform, opacity" }}
      >
        <span className="font-montserrat font-bold text-[16px] leading-[20px] text-black whitespace-nowrap">
          About US
        </span>
        <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-black btn-arrow">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 12L12 4M12 4H5M12 4V11"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </section>
  );
}
