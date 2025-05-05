import styled from "styled-components";
import bgimg from "../assets/images/letsdrivebg.jpg";
import Tagbg from "../assets/images/assissination.png";
import Movemen from "../assets/images/movemen.png"
import { motion } from "framer-motion";

const DiveContainr = styled.div`
  height: 100vh;
  width: 100%;
  background: url('${bgimg}');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const FullScreenOverlay = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  flex-direction: row; /* Default to row on larger screens */

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const LeftContent = styled(motion.div)`
  flex: 1;
  padding: 20px;

  /* border: 2px solid red; */
  color: #272827;
  display: flex;
  
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 10vh;
    margin-bottom: 10%;
  }
  
`;

const AnimatedImage = styled(motion.img)`
  width: 100px;
  /* border: 1px solid red; */
  position: absolute;
  top: 22%;
  left: 10%;

  @media (max-width: 768px) {
    width: 120px;
   top: 25%;
   left: 35%;
  }
`;

const TextContainer = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 0.8;

  @media (max-width: 768px) {
    /* align-items: flex-start; */
  }
`;

const LeftTitle = styled(motion.h1)`
  font-size: 85px;
  font-weight: 500;
  margin-bottom: 0.6rem;
  letter-spacing: -0.025em;
  color: #272827;
  text-align: center; 

  & > span {
    font-size: 70px;
  }

  @media (max-width: 768px) {
    /* border: 2px solid red; */
    font-size: 50px;
    text-align: center; 
  }
`;

const LeftParagraph = styled(motion.p)`
  font-family: sans-serif;
  font-size: 0.875rem;
  color: #272827;
  line-height: 1.5;
  text-align: center; 

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px; 
  }
`;

const RightContent = styled.div`
  flex: 1;
  padding: 20px;
  color: #272827; 
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
    align-items: flex-start; 
    margin-top: 30vh; 
  }
`;

const ServiceList = styled(motion.pre)`
  color: #272827;
  text-transform: capitalize;
  margin-bottom: 40px;
  font-family: sans-serif; 
  white-space: pre-wrap; 
  text-align: left; 

  @media (max-width: 768px) {
    display: none; }

`;

const TagContainer = styled.div`
  position: absolute;
  width: 600px;
  height: 400px;
  background: url('${Tagbg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    aspect-ratio: 6 / 4;
  }
`;

const ironmanVariants = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: [0, -20, 0],
    opacity: 1,
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
      opacity: { duration: 0.5 },
      delay: 0.1,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const slideUp = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
};

const slideLeft = {
  initial: { x: -200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
};

function LetsDiveSection2() {
  return (
    <>
      <DiveContainr>
        <TagContainer />
        <FullScreenOverlay>
          <LeftContent>
            <AnimatedImage variants={ironmanVariants} initial="initial" animate="animate" src={Movemen} alt="" />
            <TextContainer>
              <LeftTitle variants={slideLeft} initial="initial" whileInView="animate"><span className="tracking-tight text-[70px]">graphics</span> <br/>Designing</LeftTitle>
              <LeftParagraph variants={slideUp} initial="initial" animate="animate">
                As a consultancy and creative agency <br /> specialized in design and cultural projects with a <br />focus on crafts, heritage, and innovation
              </LeftParagraph>
            </TextContainer>
          </LeftContent>
          <RightContent className="hidden">
            <ServiceList variants={slideLeft} initial="initial" animate="animate">
              branding <br />
              logo design <br />
              illustration <br />
              billboard <br />
              printing stuff <br />
              brochure
            </ServiceList>
          </RightContent>
        </FullScreenOverlay>
      </DiveContainr>
      <hr />
    </>
  );
}

export default LetsDiveSection2;