
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Img3 from '../assets/images/3.png';
import Img4 from '../assets/images/4.png';
import CircleRed from '../assets/images/circlered.png';
import Nft1 from '../assets/images/nft1.png';
import Nft2 from '../assets/images/nft2.png';
import Nft3 from '../assets/images/nft3.png';
import Nft4 from '../assets/images/nft4.png';
// import MobileImg from '../assets/images/mobileimg.png';

const Section = styled.section`
  background-color: #000;
  padding: 60px 20px;
  color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MaskText = styled.div`
  max-width: 300px;
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
`;

const Img = styled(motion.img)`
  max-width: 100%;
  height: auto;
`;

const CenterLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RedCircle = styled(Img)`
  position: absolute;
  bottom: -30px;
  right: -30px;
`;

const NftStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const MobileSection = styled.div`
  display: none;
  background-color: #000;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
    padding: 40px 20px;
  }
`;

const MobileImgWrap = styled.div`
  position: relative;
  text-align: center;
`;

const Formobilecircle = styled(Img)`
  position: absolute;
  bottom: -20px;
  right: 30px;
`;

const VisionSection = () => {
  return (
    <>
      <Section>
        <Container>
          <Column>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <MaskText>
                <p>
                  Our mission is to provide better service and design to educate people about NFTs, their uses, and
                  potential impact on industries.
                </p>
                <p>
                  We provide accurate and up-to-date information to help individuals and businesses make informed
                  decisions about NFTs.
                </p>
              </MaskText>
            </motion.div>
          </Column>

          <Column>
            <CenterLine>
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                <Img src={Img3} alt="Image 3" />
              </motion.div>
              <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                <Img src={Img4} alt="Image 4" />
                <RedCircle src={CircleRed} alt="Circle Red" />
              </motion.div>
            </CenterLine>
          </Column>

          <Column>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <NftStack>
                <Img src={Nft1} alt="NFT 1" />
                <Img src={Nft2} alt="NFT 2" />
                <Img src={Nft3} alt="NFT 3" />
                <Img src={Nft4} alt="NFT 4" />
              </NftStack>
            </motion.div>
          </Column>
        </Container>
      </Section>

      <MobileSection>
        <MobileImgWrap>
         
          <Formobilecircle src={CircleRed} alt="Circle Red" />
        </MobileImgWrap>
        <MaskText>
          <p>
            Our mission is to provide better service and design to educate people about NFTs, their uses, and potential
            impact on industries.
          </p>
          <p>
            We provide accurate and up-to-date information to help individuals and businesses make informed decisions
            about NFTs.
          </p>
        </MaskText>
      </MobileSection>
    </>
  );
};

export default VisionSection;
