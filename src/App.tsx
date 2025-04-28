
import LetsDiveSection from "./Components/CreativeMan";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import MouseTrail from "./Components/MouseLine";
import ThreeDesign from "./Components/ThreeD";
import Vision from "./Components/Vision";
import WebComp from "./Components/WebComp";
import WebComp2 from "./Components/WebComp2";
import "./App.css";
import LetsDiveSection2 from "./Components/CreativeMan2";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar /> 
      <MouseTrail />
      <div className="snap-scroll-container">
        <div className="snap-section"><Hero /></div>
        <div className="snap-section"><Vision /></div>
        <div className="snap-section"><Mission /></div>
        <div className="snap-section"><LetsDiveSection /></div>
        <div className="snap-section"><LetsDiveSection2 /></div>
        <div className="snap-section"><WebComp /></div>
        <div className="snap-section"><WebComp2 /></div>
        <div className="snap-section"><ThreeDesign /></div>
      </div>
    </>
  );
}

export default App;
