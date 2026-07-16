"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutBand from "@/components/AboutBand";
import Monogram from "@/components/Monogram";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WordCloud from "@/components/WordCloud";
import Footer from "@/components/Footer";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 5350;

export default function Home() {
  const [scale, setScale] = useState(1);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const s = Math.min(1, document.documentElement.clientWidth / DESIGN_WIDTH);
      setScale(s);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      style={{ height: DESIGN_HEIGHT * scale, overflow: "hidden" }}
      className="bg-white"
    >
      <div
        ref={rootRef}
        className="design-root"
        style={{ transform: `scale(${scale})` }}
      >
        <Header />
        <Hero />
        <AboutBand />
        <Monogram />
        <Services />
        <Testimonials />
        <WordCloud />
        <Footer />
      </div>
    </div>
  );
}
