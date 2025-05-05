import { useEffect, useRef } from "react";
import LetsDiveSection from "./Components/CreativeMan";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import MouseTrail from "./Components/MouseLine";
import ThreeDesign from "./Components/ThreeD";
import Vision from "./Components/Vision";
import WebComp from "./Components/WebComp";
import WebComp2 from "./Components/WebComp2";
import LetsDiveSection2 from "./Components/CreativeMan2";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Footer";
import "./App.css";

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let isScrolling = false;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll<HTMLDivElement>(".snap-section");
    let currentIndex = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        currentIndex++;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      } else {
        return;
      }

      isScrolling = true;
      sections[currentIndex].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false;
      }, 1000);
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
