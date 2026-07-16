import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register all GSAP plugins once here
gsap.registerPlugin(ScrollTrigger);

// Default GSAP config for premium feel
gsap.config({
  nullTargetWarn: false,
});

export { gsap, ScrollTrigger };
