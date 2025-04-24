
import Img3 from '../assets/images/3.png';
import Img4 from '../assets/images/4.png';
import CircleRed from '../assets/images/circlered.png';
import Nft1 from '../assets/images/nft1.png';
import Nft2 from '../assets/images/nft2.png';
import Nft3 from '../assets/images/nft3.png';
import Nft4 from '../assets/images/nft4.png';

const Mission = () => {
  return (
    <div id="section2" className="bg-black py-16 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column */}
        <div className="relative">
          <div className="absolute inset-0 mask1 MaskJs1" />
          <div className="relative z-10">
            <div className="Peraslider FaceTextJS space-y-4">
              <p className="text-white">
                Our mission is to provide better service and design to educate people
                about NFTs, their uses, and potential impact on industries.
              </p>
              <p className="text-white hidden">
                We provide accurate and up-to-date information to help individuals and
                businesses make informed decisions about NFTs.
              </p>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute inset-0 mask2 MaskJs2" />
          <div className="relative z-10 flex flex-col items-center">
            <img src={Img3} alt="Men Down To Robe" className="w-48 mb-4" />
            <div className="h-1 w-16 bg-white my-2" />
            <div className="relative">
              <img src={Img4} alt="Men Down To Robe" className="w-48 mb-2" />
              <img src={CircleRed} alt="Circle Red" className="w-10 absolute top-2 right-2" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <div className="absolute inset-0 mask3 MaskJs3" />
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-4">
            <img src={Nft1} alt="NFT" className="w-16 opacity-0 transform -translate-y-20 transition-all" />
            <img src={Nft2} alt="NFT" className="w-16 opacity-0 transform -translate-y-20 transition-all" />
            <img src={Nft3} alt="NFT" className="w-16 opacity-100 transform translate-y-0 transition-all" />
            <img src={Nft4} alt="NFT" className="w-16 opacity-0 transform -translate-y-20 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
