// ScrollObject.js
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollObject = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 400, 
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
    <div style={{ height: "200vh", background: "#111" }}>
      <div style={{ position: "relative", height: "100vh" }}>
        <img
          ref={imageRef}
          src="/your-image.png"
          alt="object"
          style={{ width: 150, position: "absolute", top: 100, left: "40%" }}
        />
      </div>
      <div
        style={{
          height: "100vh",
          background: "#222",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Next Section</h1>
      </div>
    </div>
  );
};

export default ScrollObject;
