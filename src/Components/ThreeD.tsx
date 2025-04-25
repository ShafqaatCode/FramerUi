import styled from "styled-components";
import bgimg from "../assets/images/3dbg.jpg";
import Tagbg from "../assets/images/assissination.png";
// import javasq from "../assets/images/javasq.png"
import Movemen from "../assets/images/moveVectr.png"
import { motion } from "framer-motion";

const DiveContainr = styled.div`
  height: 100vh;
  width: 100%;
  background: url('${bgimg}'); 
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: #212529; */
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

const slideUp = {
    initial: { y: 200, opacity: 0 },
    animate: {
        y: 0, opacity: 1, transition: {
            type: 'tween',
            ease: 'easeInOut',
            duration: 2,
        },
    },
    // exit: { y: '100%', opacity: 0 },

};

function ThreeDesign() {
    return (
        <>
            <DiveContainr>

                <FullScreenOverlay className="">
                    <LeftContent className="text-[#212529] leading-none flex items-center  justify-center flex-col" >
                        <motion.img className="w-[320px] absolute top-[10%] left-[37%] -translate-x-1/2 -translate-y-1/2 " variants={ironmanVariants} initial="initial" animate="animate" src={Movemen} alt="" />
                        <div className="text-left flex items-center justify-center flex-col leading-[0.8] ">
                            <motion.h1 variants={slideUp} initial="initial" whileInView="animate" className="text-[85px] text-center text-[#212529] font-[500] mb-[40px] tracking-tight"><span className="tracking-tight text-left text-[70px]">2D/</span>3D</motion.h1>
                            <motion.p variants={slideUp} initial="initial" whileInView="animate" className="text-[#212529] font-sans text-sm"> Provide high-quality and visually appealing <br /> designs an animations, helping our clients bring <br /> their creative visions to life in various industries<br /> including gaming, entertainment, and architecture</motion.p>
                        </div>
                    </LeftContent>
                    <RightContent className="flex items-center justify-center">
                        <motion.pre variants={slideUp} initial="initial" whileInView="animate" className="text-[#212529] capitalize mb-[40px]">


                            2D - 3D art <br />
                            motion gfx <br />
                            concept art <br />
                            digital art <br />
                            game <br />
                            explainer video <br />


                        </motion.pre>
                    </RightContent>
                </FullScreenOverlay>
                <TagContainer />
            </DiveContainr>
            <hr />

        </>
    );
}

export default ThreeDesign;