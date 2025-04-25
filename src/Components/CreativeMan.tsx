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
`;

const LeftContent = styled(motion.div)`
  flex: 1;
  padding: 20px;
  color: white;
/*   
  border: 2px solid red; */
`;

const RightContent = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  /* border: 2px solid green; */
  
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
            duration: 1.5,
        },
    },
    // exit: { y: '100%', opacity: 0 },

};


const slideLeft = {
    initial: { x: -200, opacity: 0 },
    animate: {
        x: 0, opacity: 1, transition: {
            type: 'tween',
            ease: 'easeInOut',
            duration: 1.5,
        },
    },
    // exit: { y: '100%', opacity: 0 },

};


function LetsDiveSection() {
    return (
        <>
            <DiveContainr>
                <TagContainer>

                </TagContainer>

                <FullScreenOverlay>
                    <LeftContent className="text-[#272827] leading-none flex items-center justify-center flex-col" >
                        <div>
                            <motion.h1 variants={slideLeft} initial="initial" whileInView="animate" className="text-[85px] text-[#272827] font-[500] mb-4 tracking-tighter">LetsDIVE</motion.h1>
                            <motion.p variants={slideUp} initial="initial" whileInView="animate" className="text-[#272827] font-sans text-sm"> As a consultancy and creative agency <br /> specialized in design and cultural projects with a <br />focus on crafts, heritage, and innovation</motion.p>
                        </div>
                    </LeftContent>
                    <RightContent className="flex items-center justify-center">
                        <motion.img className="w-[300px] border-2" variants={ironmanVariants} initial="initial" animate="animate" src={Movemen} alt="" />
                    </RightContent>
                </FullScreenOverlay>
            </DiveContainr>
            <DiveContainr>
                <TagContainer>

                </TagContainer>

                <FullScreenOverlay>
                    <LeftContent className="text-[#272827] leading-none flex items-center justify-center flex-col" >
                        <motion.img className="w-[100px] border-2 absolute top-[22%] left-[10%]" variants={ironmanVariants} initial="initial" animate="animate" src={Movemen} alt="" />
                        <div className="text-left flex items-center justify-center flex-col leading-[0.8] ">

                            <motion.h1 variants={slideLeft} initial="initial" whileInView="animate" className="text-[85px] text-center text-[#272827] font-[500] mb-6 tracking-tight"><span className="tracking-tight text-[70px]">graphics</span> Designing</motion.h1>
                            <motion.p variants={slideUp} initial="initial" whileInView="animate" className="text-[#272827] font-sans text-sm"> As a consultancy and creative agency <br /> specialized in design and cultural projects with a <br />focus on crafts, heritage, and innovation</motion.p>
                        </div>
                    </LeftContent>
                    <RightContent className="flex items-center justify-center">
                        <motion.pre variants={slideLeft} initial="initial" whileInView="animate" className="text-[#272827] capitalize mb-[40px]">
                            branding <br />
                            logo design <br />
                            illustration <br />
                            billboard <br />
                            printing stuff <br />
                            brochure
                        </motion.pre>
                    </RightContent>
                </FullScreenOverlay>
            </DiveContainr>


        </>
    );
}

export default LetsDiveSection;