"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { createHeroTimeline } from "@/lib/animations/utils";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMutedState = !videoRef.current.muted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  // Hero entrance timeline — runs once on mount
  useGSAP(() => {
    createHeroTimeline({
      video: videoRef.current,
      button: buttonRef.current,
    });
  }, { dependencies: [] });

  return (
    <section className="relative h-[785px] w-[1440px] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/video-about.mp4"
        poster="/assets/hero.png"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        style={{ willChange: "transform, opacity" }}
      />

      {/* Sound Button */}
      <button
        ref={buttonRef}
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 rounded-full bg-black/70 px-5 py-3 text-sm font-medium text-white backdrop-blur-md btn-hover"
        style={{ willChange: "transform, opacity" }}
      >
        {isMuted ? "🔊" : "🔇"}
      </button>
    </section>
  );
}
