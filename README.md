# Ritz Media World — Premium Homepage

A pixel-faithful, high-end React build of the **Ritz Media World** homepage, migrated to **Next.js (App Router) + TypeScript** with custom **GSAP cinematic animations** and **Lenis smooth scrolling**.

---

## Stack
- **Next.js** (React) — Server & Client-side rendering (App Router)
- **TypeScript** — Full type safety across components and animation utilities
- **Tailwind CSS** — Styling with exact Figma specs (colors, spacing, typography)
- **GSAP & GSAP ScrollTrigger** — Advanced page reveals, staggers, and parallax timelines
- **Lenis** — Smooth scroll engine synchronized directly with GSAP's global ticker
- **Fonts** — League Spartan (headings) + Montserrat (body), loaded from Google Fonts

---

## Getting Started
To run the project locally, install the dependencies and launch the Next.js development server:

```bash
npm install
npm run dev      # http://localhost:3000
```

To build and check the production outputs:

```bash
npm run build    # creates production build inside .next/
npm run start    # runs the production server
```

---

## Animation & Interaction System
This application features a custom, high-end interaction layer built on top of the original layout structures:

1. **Lenis Scroll Engine**: Custom momentum scroll wrapper ([SmoothScroll.tsx](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/components/SmoothScroll.tsx)) linked with the GSAP ScrollTrigger update loops. Animations reset and replay dynamically as you scroll back and forth through the page.
2. **Custom Cinematic Cursor Follower**: An elegant hardware-accelerated circular cursor ([CursorFollower.tsx](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/components/CursorFollower.tsx)) that tracks mouse movements with sub-frame precision. It features a backdrop-difference blend mode and scales dynamically on hover over links, buttons, cards, and images.
3. **Magnetic Hover Snapping**: A spring-based elastic snapping hook ([useMagnetic.ts](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/lib/animations/hooks/useMagnetic.ts)) that draws elements slightly towards the cursor when hovered and snaps them back on mouse leave. Applied to the header menu, hero sound toggle, and About US buttons.
4. **Heading Text Reveals**: Custom slide-up line masking transitions ([utils.ts](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/lib/animations/utils.ts)) that hide text lines using `overflow-hidden` wraps and trigger clean cascading fades as headings scroll into view.
5. **Image Reveals & Parallax**: Scale-down parallax transitions ([utils.ts](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/lib/animations/utils.ts)) applied to background overlays, testimonial assets, and watermarks to create subtle visual depth.

---

## Workspace Structure
The design layout is authored on a fixed **1440px** viewport. `page.tsx` dynamically scales this root container down to match tablet, laptop, and mobile widths (`transform: scale`) while keeping all proportions pixel-faithful.

Sections (top → bottom) located in `src/components/`:

| Component | File Path | Interaction & Animation Notes |
|---|---|---|
| `Header` | [Header.tsx](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/components/Header.tsx) | Solid navy brand bar with magnetic menu toggle button and underline link slides. |
| `Hero` | [Hero.tsx](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/components/Hero.tsx) | Timeline-based scale entrance (1.06 → 1.0) on background video with a magnetic sound switch. |
| `AboutBand` | [AboutBand.tsx](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/components/AboutBand.tsx) | Line-by-line slide heading reveal, staggered copy text, and magnetic "About US" pill. |
| `Monogram` | [Monogram.tsx](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/components/Monogram.tsx) | Scroll-triggered entrance fade and zoom-out on the crisp "R" monogram card. |
| `Services` | [Services.tsx](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/components/Services.tsx) | Staggered rows sliding entrance, zoom-in on hover rows, and scale-in reveal on the model graphic. |
| `Testimonials` | [Testimonials.tsx](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/components/Testimonials.tsx) | Cascade reveal on testimonial quotes, scroll-linked parallax on the building image. |
| `WordCloud` | [WordCloud.tsx](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/components/WordCloud.tsx) | Scattered service tags staggering in on viewport entry, parallax background watermark depth. |
| `Footer` | [Footer.tsx](file:///c:/Users/Dell/Desktop/projects/ritz-media-landing-page/Ashwin/src/components/Footer.tsx) | Staggered fade reveals on text link columns, partner badges, and final legal copyright text. |

---

## Development Standards
- **Performance**: Animations are restricted strictly to `transform` and `opacity` to maintain 60 FPS GPU-accelerated performance.
- **Cleanup**: All ScrollTrigger instances and event listeners are properly disposed of using React-compliant lifecycle cleanup inside standard GSAP Context scopes.
- **Accessibility**: Support for `prefers-reduced-motion` is built directly into all custom hooks and scroll controllers, falling back gracefully to static layout styling when requested by the OS.
