import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Img3 from '../assets/images/3.png';
import Img4 from '../assets/images/4.png';
import CircleRed from '../assets/images/circlered.png';
import Nft1 from '../assets/images/nft1.png';
import Nft2 from '../assets/images/nft2.png';
import Nft3 from '../assets/images/nft3.png';
import Nft4 from '../assets/images/nft4.png';
import Nftbg from '../assets/images/nftbg.png';
import NftLeft from '../assets/images/leftnftbg.jpg';
import NftRight from '../assets/images/rightnftbg.jpg';
import { useEffect, useState } from 'react';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
  background-color: #212529;
`;

const GridItem = styled(motion.div)`
  position: relative;
  overflow: hidden;

  .center-img {
    background-color: #212529;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RightGridItem = styled(GridItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedNFT = styled(motion.img)`
  position: absolute;
  z-index: 100;
  max-width: 40%;
  max-height: 30%;
  object-fit: contain;
`;

const AnimatedText = styled(motion.p)`
  margin: 10px 10px;
  font-family: sans-serif;
  color: #bcb0b0;
  font-size: 13px;
  text-align: right;
`;

const nftImages: string[] = [Nft1, Nft2, Nft3, Nft4];

const imageVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
};

const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

const animationDuration = 1;
const displayDuration = 2;
const textAnimationDuration = 0.5;
const textDisplayDuration = 3;

const textContents = [
    "Our mission is to provide better service {} and design to educate people about NFTs, their uses, and potential and potential impact on industries.",
    "We provide accurate and up-to-date <br/> information to help individuals and <br/>businesses make informed decisions about NFTs.",
];



function Mission() {
    const [CurrentInd, setCurrentInd] = useState(0);
    const [isImageVisible, setIsImageVisible] = useState(true);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const imageIntervalId = setInterval(() => {
            setIsImageVisible(false);
            setTimeout(() => {
                setCurrentInd((prevInd: any) => (prevInd + 1) % nftImages.length);
                setIsImageVisible(true);
            }, animationDuration * 1000);
        }, (animationDuration + displayDuration) * 1000);

        return () => clearInterval(imageIntervalId);
    }, []);

    useEffect(() => {
        const textIntervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textContents.length);
        }, (textAnimationDuration + textDisplayDuration) * 1000);

        return () => clearInterval(textIntervalId);
    }, []);

    return (
        <MainContainer>
            <GridLayout>

                <GridItem initial={{ x: 400, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 2 }} className="flex justify-center items-center relative">
                    <img src={NftLeft} alt="Left NFT" />
                    <div className="absolute top-1/2 left-1/2 w-4/5 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <AnimatePresence mode="wait">
                            <AnimatedText
                                key={textContents[currentTextIndex]}
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: textAnimationDuration, ease: 'easeInOut' }}
                            >
                                <span dangerouslySetInnerHTML={{ __html: textContents[currentTextIndex] }} />
                            </AnimatedText>
                        </AnimatePresence>
                    </div>
                </GridItem>




                <GridItem className="relative">
                    <img
                        src={Nftbg}
                        alt="Center NFT"
                        className="w-full bg-[#212529] h-full object-cover absolute top-0 left-0 z-0"
                    />

                    <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center">
                        <div></div>

                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="h-[80%] w-full flex items-start justify-start border-l-[1px]"
                        >
                            <img src={Img3} alt="Top" className="h-full w-auto object-cover" />
                        </motion.div>

                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                            className="h-[80%] w-full relative flex items-end justify-start border-l-[1px]"
                        >
                            <img src={Img4} alt="Bottom" className="h-full object-cover" />
                            <img
                                src={CircleRed}
                                alt="Circle"
                                className="absolute top-1/2 -left-8 transform -translate-y-1/2"
                            />
                        </motion.div>
                    </div>
                </GridItem>




                <RightGridItem initial={{ x: -400, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 2 }}>
                    <img
                        src={NftRight}
                        alt="Right Background"
                        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
                    />
                    <AnimatePresence mode="wait">
                        {isImageVisible && (
                            <AnimatedNFT
                                key={nftImages[CurrentInd]}
                                src={nftImages[CurrentInd]}
                                alt={`NFT ${CurrentInd + 1}`}
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: animationDuration, ease: 'easeInOut' }}
                            />
                        )}
                    </AnimatePresence>
                </RightGridItem>
            </GridLayout>
        </MainContainer>
    );
}

export default Mission;
