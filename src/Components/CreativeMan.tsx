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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

const LeftContent = styled(motion.div)`
  flex: 1;
  padding: 20px;
  color: #272827;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  

  & > div {
    text-align: center; 
  }

  @media (max-width: 768px) {
    height: 25vh;
    order: 1;
  }
`;

const LeftTitle = styled(motion.h1)`
  font-size: 85px;
  font-weight: 500;
  /* margin-bottom: 1rem; */
  letter-spacing: -0.025em; /* Equivalent to tracking-tighter */
  color: #272827;

  @media (max-width: 768px) {
      margin: 0;
      font-size: 50px;
    }
`

const LeftParagraph = styled(motion.p)`
  font-family: sans-serif;
  font-size: 0.875rem; 
  color: #272827;
  line-height: 1.5; 

  @media (max-width: 768px) {
    text-align: center;
  }
  
`;

const RightContent = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 25vh;
    order: 0;
    height: 20vh;

    & > img {
      width: 50%;
    }
  }
`;

const MovementImage = styled(motion.img)`
  width: 300px;
  border: 1px solid; 
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
      duration: 1,
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

function LetsDiveSection() {
  return (
    <>
      <DiveContainr>
        <TagContainer />
        <FullScreenOverlay>
          <LeftContent>
            <LeftTitle
              variants={slideLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              LetsDIVE
            </LeftTitle>

            <LeftParagraph
              variants={slideUp}
              initial="initial"
              animate="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              As a consultancy and creative agency <br />
              specialized in design and cultural projects with a <br />
              focus on crafts, heritage, and innovation
            </LeftParagraph>

          </LeftContent>
          <RightContent>
            <MovementImage variants={ironmanVariants} initial="initial" animate="animate" src={Movemen} alt="" />
          </RightContent>
        </FullScreenOverlay>
      </DiveContainr>
      <hr />
    </>
  );
}

export default LetsDiveSection;