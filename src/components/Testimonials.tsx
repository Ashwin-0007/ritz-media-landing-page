"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { textRevealLines, revealSection, imageReveal, parallaxElement } from "@/lib/animations/utils";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (headingRef.current) {
      textRevealLines(headingRef.current, { start: "top 85%" });
    }
    if (quoteRef.current) {
      revealSection(quoteRef.current, { start: "top 80%", yOffset: 30 });
    }
    if (imageContainerRef.current) {
      imageReveal(imageContainerRef.current, { start: "top 80%", yOffset: 30 });
      if (imageRef.current) {
        parallaxElement(imageRef.current, sectionRef.current, 0.15);
      }
    }
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section ref={sectionRef} className="relative h-[700px] w-[1440px] bg-[#fafafa] overflow-hidden">
      {/* Heading @ x157 y73 (rel) */}
      <div className="absolute left-[157px] top-[73px] w-[753px] flex flex-col gap-[16px]">
        <h2
          ref={headingRef}
          className="font-spartan font-bold text-[56px] leading-[52px] text-black"
        >
          WHAT CLIENTS SAY
        </h2>
        <p className="font-montserrat font-normal text-[18px] leading-[29px] text-black">
          The world&rsquo;s largest independent brand agency. We drive growth.
        </p>
      </div>

      {/* Quote icon @ x146 y211 (rel) */}
      <div className="absolute left-[146px] top-[200px]">
        <svg width="88" height="70" viewBox="0 0 88 70" fill="none">
          <path
            d="M11 70C4.5 61 1 51 1 40C1 18 16 3 38 0L41 12C28 15 20 23 19 33C20 33 22 33 23 33C33 33 40 40 40 51C40 61 32 70 21 70H11ZM58 70C51.5 61 48 51 48 40C48 18 63 3 85 0L88 12C75 15 67 23 66 33C67 33 69 33 70 33C80 33 87 40 87 51C87 61 79 70 68 70H58Z"
            fill="#631c09"
          />
        </svg>
      </div>

      {/* Quote text + attribution @ x157 y211 (rel) */}
      <div
        ref={quoteRef}
        className="absolute left-[157px] top-[294px] w-[791px] flex flex-col gap-[57px]"
        style={{ willChange: "transform, opacity" }}
      >
        <p className="font-montserrat font-medium text-[22px] leading-[30px] text-black">
          They not only make sure that they deliver on their promises, but also
          educate you on what exactly is needed to be done for your brand,
          thereby preventing you from under or over spending your precious money.
        </p>
        <div className="flex flex-col gap-[10px]">
          <p className="uppercase font-spartan font-semibold text-[28px] leading-[26px] text-black">
            ELDECO GROUP
          </p>
          <p className="uppercase font-spartan font-medium text-[18px] leading-[17px] text-black/60">
            MANAGING DIRECTOR
          </p>
        </div>
      </div>

      {/* Image @ x1020 y211 (rel), 265x366 */}
      <div
        ref={imageContainerRef}
        className="absolute left-[1020px] top-[211px] h-[366px] w-[265px] overflow-hidden"
        style={{ willChange: "transform, opacity" }}
      >
        <img
          ref={imageRef}
          src="/assets/testimonial-building.png"
          alt="Eldeco project"
          className="h-full w-full object-cover"
          style={{ willChange: "transform" }}
        />
        <img
          src="/assets/eldeco-logo.png"
          alt="Eldeco"
          className="absolute left-[171px] top-[20px] h-[13px] w-[76px] object-contain z-10"
        />
      </div>

      {/* Pagination dots @ x157 y588 (rel) */}
      <div className="absolute left-[157px] top-[588px] flex items-center gap-[3px]">
        <span className="h-[10px] w-[10px] rounded-full bg-[#bfbfbf]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#bfbfbf]" />
        <span className="h-[10px] w-[65px] rounded-full bg-[#d8d6d6] border border-[#a8a6a6]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#bfbfbf]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#bfbfbf]" />
      </div>
    </section>
  );
}
