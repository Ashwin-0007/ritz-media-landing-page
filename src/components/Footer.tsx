"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { staggerReveal } from "@/lib/animations/utils";

const CONNECT = ['Get In Touch', 'Instagram', 'Linkedin', 'Twitter', 'Youtube'];
const NAV = ['Home', 'Work', 'About', 'Services'];
const TAGS_ROW1 = ['Digital Marketing', 'Content Marketing', 'Influencer Marketing'];
const TAGS_ROW2 = ['Web Development', 'Creative Services', 'Print Advertisement'];

function TagRow({ items }: { items: string[] }) {
  return (
    <div className="flex items-center gap-[11px]">
      {items.map((t, i) => (
        <span key={t} className="flex items-center gap-[11px]">
          {i > 0 && <span className="h-[7px] w-[7px] rounded-full bg-[#d9d9d9]" />}
          <span className="font-montserrat font-semibold text-[18px] leading-[22px] text-white/60 whitespace-nowrap">
            {t}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cols = footerRef.current?.querySelectorAll(".footer-col");
    if (cols && footerRef.current) {
      staggerReveal(cols, footerRef.current, {
        stagger: 0.15,
        yOffset: 35,
        start: "top 95%",
        duration: 0.8,
      });
    }
  }, { scope: footerRef, dependencies: [] });

  return (
    <footer ref={footerRef} className="relative h-[657px] w-[1440px] overflow-hidden bg-navy-dark">
      {/* Faint R watermark */}
      <img
        src="/assets/logo-r-watermark.png"
        alt=""
        className="absolute left-[451px] top-[20px] h-[603px] w-[538px] object-contain opacity-[0.06]"
      />

      {/* Three columns */}
      <div className="absolute left-0 top-[44px] flex w-full items-start justify-between">
        {/* Connect */}
        <div className="footer-col flex w-[480px] flex-col items-center gap-[19px]" style={{ willChange: "transform, opacity" }}>
          <p className="font-montserrat font-medium text-[18px] leading-[22px] text-white/60">
            Connect
          </p>
          <div className="flex flex-col items-center gap-[9px]">
            {CONNECT.map((c) => (
              <a
                key={c}
                href="#"
                className="font-montserrat font-bold text-[18px] leading-[22px] uppercase text-white/60 hover:text-white transition-colors"
              >
                {c}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="footer-col flex w-[480px] flex-col items-center gap-[19px]" style={{ willChange: "transform, opacity" }}>
          {NAV.map((n) => (
            <a
              key={n}
              href="#"
              className="font-spartan font-semibold text-[40px] leading-[37px] uppercase text-white/60 hover:text-white transition-colors"
            >
              {n}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="footer-col flex w-[480px] flex-col items-center gap-[17px]" style={{ willChange: "transform, opacity" }}>
          <div className="flex flex-col items-center gap-[17px]">
            <p className="font-montserrat font-medium text-[18px] leading-[22px] text-white/60">
              Email
            </p>
            <a
              href="mailto:info@ritzmediaworld.com"
              className="font-montserrat font-bold text-[18px] leading-[22px] text-white/60 hover:text-white transition-colors"
            >
              info@ritzmediaworld.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-[17px]">
            <p className="font-montserrat font-medium text-[18px] leading-[22px] text-white/60">
              Phone No.
            </p>
            <p className="flex items-center gap-[11px] font-montserrat font-bold text-[18px] leading-[22px] text-white/60">
              <span>+919220516777</span>
              <span className="text-white/40">|</span>
              <span>+917290002168</span>
            </p>
          </div>
        </div>
      </div>

      {/* Partner logos */}
      <div className="absolute left-[504px] top-[334px] flex h-[60px] w-[432px] items-center justify-center gap-[36px] rounded-[10px] bg-white/[0.08] px-[16px] backdrop-blur-sm">
        <img src="/assets/partner-ins.png" alt="INS" className="h-[35px] object-contain text-white" />
        <span className="flex items-center rounded-[3px] bg-white px-[6px] py-[4px]">
          <img src="/assets/partner-meta.png" alt="Meta Business Partner" className="h-[24px] object-contain" />
        </span>
        <img src="/assets/partner-google.png" alt="Google Partner" className="h-[35px] object-contain" />
        <span className="flex items-center rounded-[3px] bg-white px-[6px] py-[4px]">
          <img src="/assets/partner-msme.png" alt="MSME" className="h-[26px] object-contain" />
        </span>
      </div>

      {/* Divider top */}
      <div className="absolute left-0 top-[457px] h-px w-[1440px] bg-white/10" />

      {/* Wordmark row */}
      <div className="absolute left-0 top-[476px] w-[1440px]">
        <span className="absolute left-[56px] top-[6px] font-spartan font-bold text-[56px] leading-[52px] text-white">
          RITZ
        </span>
        <span className="absolute right-[50px] top-[6px] font-spartan font-bold text-[56px] leading-[52px] text-white whitespace-nowrap">
          MEDIAWORLD
        </span>
        <div className="absolute left-1/2 top-[12px] flex -translate-x-1/2 flex-col items-center gap-[10px]">
          <TagRow items={TAGS_ROW1} />
          <TagRow items={TAGS_ROW2} />
        </div>
      </div>

      {/* Divider bottom */}
      <div className="absolute left-0 top-[586px] h-px w-[1440px] bg-white/10" />

      {/* Copyright */}
      <p className="absolute left-0 top-[615px] w-[1440px] text-center font-montserrat font-medium text-[18px] leading-[22px] text-white/40">
        &copy; 2026 Ritz Media World. All rights reserved.
      </p>
    </footer>
  );
}
