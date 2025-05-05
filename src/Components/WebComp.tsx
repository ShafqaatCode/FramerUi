import styled from "styled-components";
import bgimg from "../assets/images/letsdrivebg.jpg";
import Tagbg from "../assets/images/seoupper.png";
import Movemen from "../assets/images/movemen.png";
import { motion } from "framer-motion";

// Animation Variants
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

const slideRight = {
  initial: { x: 200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 2,
    },
  },
};

const slideUp = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

// Styled Components
const DiveContainr = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #212529;
  position: relative;
`;

const FullScreenOverlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const LeftContent = styled(motion.div)`
  flex: 1;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-end;
    padding: 40px 10px;
    margin-bottom: 20%;
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
    display: none;
  }
`;

const AnimatedImg = styled(motion.img)`
  width: 100px;
  position: absolute;
  top: 22%;
  left: 10%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  line-height: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const MainTitle = styled(motion.h1)`
  font-size: 75px;
  color: lightgray;
  font-weight: 500;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;

  span {
    font-size: 60px;
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 50px;
    span {
      font-size: 38px;
    }
  }
`;

const Paragraph = styled(motion.p)`
  color: gainsboro;
  font-family: sans-serif;
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: center;
`;

const ServicesText = styled(motion.pre)`
  color: gainsboro;
  text-transform: capitalize;
  margin-bottom: 40px;
  font-size: 1rem;
`;

const TagContainer = styled.div`
  position: absolute;
  width: 600px;
  height: 400px;
  background: url("${Tagbg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  overflow: hidden;
`;

// Main Component
function WebComp() {
  return (
    <>
      <DiveContainr>
        <FullScreenOverlay>
          <LeftContent>
            <AnimatedImg
              variants={ironmanVariants}
              initial="initial"
              animate="animate"
              src={Movemen}
              alt="Animated"
            />
            <TitleContainer>
              <MainTitle
                variants={slideRight}
                initial="initial"
                whileInView="animate"
              >
                <span className="">web</span>
                
                Development
              </MainTitle>
              <Paragraph
                variants={slideUp}
                initial="initial"
                animate="animate"
              >
                As a consultancy and creative agency <br />
                specialized in design and cultural projects with a <br />
                focus on crafts, heritage, and innovation
              </Paragraph>
            </TitleContainer>
          </LeftContent>

          <RightContent>
            <ServicesText
              variants={slideUp}
              initial="initial"
              whileInView="animate"
            >
              CMS development <br />
              e-commerce development <br />
              custom web application <br />
            </ServicesText>
          </RightContent>
        </FullScreenOverlay>
        <TagContainer />
      </DiveContainr>
      <hr />
    </>
  );
}

export default WebComp;
