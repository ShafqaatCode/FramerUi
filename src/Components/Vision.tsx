import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenRobeImg from '../assets/images/menrobe.png';
import OneImg from '../assets/images/1.png';
import TwoImg from '../assets/images/2.png';
import RedCircle from '../assets/images/circlered.png';

// Styled Components
const VisionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #212529;
  overflow: hidden;

@media (max-width: 900px) {
  .box2{
    display:none;
  }

}
`;

const BackgroundImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
  z-index: 10;

  @media (min-width: 769px) {
    display: none;
  }
`;

const VisionWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  height: 100%;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 40px;
  }
`;

const Box = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: center;
  align-items: center;

  &.text-box {
    text-align: center;
    /* border:2px solid red; */

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const MenRobeImage = styled(motion.img)`
  width: 70%;

  @media (max-width: 768px) {
    /* display: none; */
    position: absolute;
    z-index: -1;
  }
`;

const ImageOneWrapper = styled(motion.div)`
  position: relative;
`;

const ImageOne = styled.img`
  width: 70%;
  border-left: 1px solid #ccc;
`;

const RedCircleImage = styled.img`
  position: absolute;
  top: 40%;
  left: -30px;
`;

const TextWrapper = styled.div`
  text-align: left;
  margin: auto;
`;

const ImageTwo = styled(motion.img)`
  width: 70%;
`;

const TextContent = styled(motion.div)`
  color: #e3e3e3;

  & > div {
    margin-bottom: 20px;
  }

  small {
    font-size: 33px;
    line-height: 1;
  }

  span {
    font-size: 46px;
    line-height: 1;
  }

  p {
    font-size: 12px;
    text-align: right;

    @media (max-width: 786px) {
        /* border: 2px solid red; */
        
      text-align: center;
      padding: 0 10px;
    }
  }
`;


function Vision() {
  return (
    <VisionContainer>
     
      <BackgroundImage
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        src={MenRobeImg}
        alt="Background Man Robe"
      />

      <VisionWrap>
        
        <Box>
          <MenRobeImage
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            src={MenRobeImg}
            alt="Men Robe"
          />
        </Box> 

        
        <Box className="box2">
          <div className="flex">
            <ImageOneWrapper
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            >
              <ImageOne src={OneImg} alt="One" />
              <RedCircleImage src={RedCircle} alt="Red Circle" />
            </ImageOneWrapper>

            <TextWrapper>
              <ImageTwo
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                src={TwoImg}
                alt="Two"
              />
            </TextWrapper>
          </div>
        </Box>

        
        <Box className="text-box">
          <TextContent
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <div>
              <small>Focusing on</small><br />
              <span>Imagination</span>
            </div>
            <p>
              Our vision is to encourage and cultivate <br />
              imagination by providing opportunities and <br />
              resources for people to explore their creative <br />
              potential and bring their ideas to life. By focusing <br />
              on imagination, we strive to inspire innovation, <br />
              discovery, and progress in all aspects of life.
            </p>
          </TextContent>
        </Box>
      </VisionWrap>
    </VisionContainer>
  );
}

export default Vision;
