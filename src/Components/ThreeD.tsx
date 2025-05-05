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

  p{
    font-family: 'Poppins', sans-serif;
  }

  @media (max-width: 768px) {
    padding: 0; 
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 20%;
    p{
        text-align: center;
    }
  }
`;

const RightContent = styled.div`
  flex: 1;
  padding: 20px;
  color: white;


  @media (max-width: 768px) {
    display: none;
    }`

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

const AnimatedImg = styled(motion.img)`
    width: 300px;
    
    position: absolute;
    top: 15%;
    left: 40%;
    transform: translate(-50%, -50%);
    z-index: 30;
    @media (max-width: 768px) {
        width: 220px;
        /* border: 1px solid; */
        top: 25%;
        left: 22%;
        transform: translate(-50%, -50%);
    }
`;
const AnimatedText = styled(motion.pre)`
    color: #212529;
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin-bottom: 40px;
`;
const Title = styled(motion.h1)`
    font-size: 85px;
    text-align: center;
    color: #212529;
    font-weight: 500;
    margin-bottom: 40px;
`


function ThreeDesign() {
    return (
        <>
            <DiveContainr>

                <FullScreenOverlay className="">
                    <LeftContent className="text-[#212529] leading-none flex items-center  justify-center flex-col" >
                        <AnimatedImg  variants={ironmanVariants} initial="initial" animate="animate" src={Movemen} alt="" />
                        <div className="text-left flex items-center justify-center flex-col leading-[0.8] ">
                            <Title variants={slideUp} initial="initial" whileInView="animate"><span className="tracking-tight text-left text-[70px]">2D/</span>3D</Title>
                            <motion.p variants={slideUp} initial="initial" animate="animate" className="text-[#212529] text-sm"> Provide high-quality and visually appealing <br /> designs an animations, helping our clients bring <br /> their creative visions to life in various industries<br /> including gaming, entertainment, and architecture</motion.p>
                        </div>
                    </LeftContent>
                    <RightContent className="flex items-center justify-center">
                        <AnimatedText variants={slideUp} initial="initial" whileInView="animate" className="text-[#212529] capitalize mb-[40px]">


                            2D - 3D art <br />
                            motion gfx <br />
                            concept art <br />
                            digital art <br />
                            game <br />
                            explainer video <br />


                        </AnimatedText>
                    </RightContent>
                </FullScreenOverlay>
                <TagContainer />
            </DiveContainr>
            <hr />

        </>
    );
}

export default ThreeDesign;