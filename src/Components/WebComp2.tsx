import styled from "styled-components";
import bgimg from "../assets/images/letsdrivebg.jpg";
import Tagbg from "../assets/images/seoupper.png";
// import javasq from "../assets/images/javasq.png"
import Movemen from "../assets/images/movemen.png"
import { motion } from "framer-motion";

const DiveContainr = styled.div`
  height: 100vh;
  width: 100%;
  /* background: url('${bgimg}');  */
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #212529;
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
`;

const LeftContent = styled(motion.div)`
  flex: 1;
  padding: 20px;
  color: white;
`;

const RightContent = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
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

const slideRight = {
    initial: { x: 200, opacity: 0 },
    animate: {
        x: 0, opacity: 1, transition: {
            type: 'tween',
            ease: 'easeInOut',
            duration: 2,
        },
    },
    // exit: { y: '100%', opacity: 0 },

};

const slideUp = {
    initial: { y: 200, opacity: 0 },
    animate: {
        y: 0, opacity: 1, transition: {
            type: 'tween',
            ease: 'easeInOut',
            duration: 1.5,
        },
    },
    // exit: { y: '100%', opacity: 0 },

};

function WebComp2() {
  return (
    <>
     
      <DiveContainr>
        <FullScreenOverlay className="">
          <LeftContent className="text-[white] leading-none flex items-center  justify-center flex-col" >
            <motion.img className="w-[100px] absolute top-[22%] left-[10%] " variants={ironmanVariants} initial="initial" animate="animate" src={Movemen} alt="" />
            <div className="text-left flex items-center justify-center flex-col leading-[0.8] ">
              <motion.h1 variants={slideRight} initial="initial" whileInView="animate" className="text-[75px] text-center text-[lightgray] font-[500] mb-6 tracking-tight"><span className="tracking-tight text-[60px]">app</span><br/> Development</motion.h1>
              <motion.p variants={slideUp} initial="initial" whileInView="animate" className="text-[gainsboro] font-sans text-sm"> As a consultancy and creative agency <br /> specialized in design and cultural projects with a <br />focus on crafts, heritage, and innovation</motion.p>
            </div>
          </LeftContent>
          <RightContent className="flex items-center justify-center">
            <motion.pre variants={slideUp} initial="initial" whileInView="animate" className="text-[gainsboro] capitalize mb-[40px]">
              CMS development <br />
              e-commerce development <br />
              custom web applicatio <br />
            </motion.pre>
          </RightContent>
        </FullScreenOverlay>
        <TagContainer />
      </DiveContainr>
    </>
  );
}

export default WebComp2;