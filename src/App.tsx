import { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import MouseTrail from "./Components/MouseLine";
import Hero from "./Components/Hero";
import Vision from "./Components/Vision";
import Mission from "./Components/Mission";
import LetsDiveSection from "./Components/CreativeMan";
import LetsDiveSection2 from "./Components/CreativeMan2";
import WebComp from "./Components/WebComp";
import WebComp2 from "./Components/WebComp2";
import ThreeDesign from "./Components/ThreeD";
import Testimonials from "./Components/Footer";
import "./App.css";

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll<HTMLDivElement>(".snap-section");
    let currentIndex = 0;

    const scrollToSection = (targetIndex: number) => {
      if (!container) return;

      const targetY = sections[targetIndex].offsetTop;
      const startY = container.scrollTop;
      const distance = targetY - startY;
      const duration = 800; // slow scroll duration (ms)
      let startTime: number | null = null;

      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;
        const ease = easeInOutQuad(Math.min(progress, 1));
        container.scrollTop = startY + distance * ease;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          isScrolling.current = false;
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        currentIndex++;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      } else {
        return;
      }

      isScrolling.current = true;
      scrollToSection(currentIndex);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <Navbar />
      <MouseTrail />
      <div className="snap-scroll-container" ref={containerRef}>
        <div className="snap-section"><Hero /></div>
        <div className="snap-section"><Vision /></div>
        <div className="snap-section"><Mission /></div>
        <div className="snap-section"><LetsDiveSection /></div>
        <div className="snap-section"><LetsDiveSection2 /></div>
        <div className="snap-section"><WebComp /></div>
        <div className="snap-section"><WebComp2 /></div>
        <div className="snap-section"><ThreeDesign /></div>
        <div className="snap-section"><Testimonials /></div>
      </div>
    </>
  );
}

export default App;
