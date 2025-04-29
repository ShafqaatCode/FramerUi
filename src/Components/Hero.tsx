
import styled from 'styled-components'
import MenImg from '../assets/images/men22.png'
import CloudImg from '../assets/images/cloud.png'
const HeroContainer = styled.div`
margin-top: 50px;
    width: 100%;
    
    
`
const BackgroundContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 90%;
    margin: auto;
    gap: 10px;
    margin-top: 40px;


    p{
        font-size: 13px;
        font-family: sans-serif;
    }

    @media (max-width: 900px) {
       .right{
      

        img{
            width:80%
        }
       }
    }


    @media (max-width: 768px) {

    flex-direction: column;
    margin-top:40px;
    
    position: relative;

    p{
        display: none;
    }

    .left{
       
        position: absolute;
        
      
        z-index: -1;
        top: 5%;
        left: 25%;

        span{
            font-size: 50px;
            letter-spacing: none;
           
            
        }
    }



    .right{
        img{
            width:90%
        }
    }

    }
   
`



const CloudContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    background-image: url(${CloudImg}) ;
    background-repeat: no-repeat;
    background-position: center;
    
    background-size: cover;
    z-index: -1;
`


function Hero() {
    return (

        <div className='relative'>
            <CloudContainer />

            <HeroContainer >


                <BackgroundContainer >
                    <div className="left w-1/2 mt-[-80px]">
                        <div className='flex items-end justify-center flex-col  ' >
                            <div className="flex flex-col items-end leading-none mb-[30px]">
                                <span className="text-[50px] font-[600] m-0 p-0">beyond</span>
                                <span className="text-[70px] font-[500] m-0 p-0 -mt-[12px]">Creativity</span>
                            </div>
                            <p>Our unique approach combines creativity</p>
                            <p>and expertise to deliver exceptional</p>
                            <p>solutions that showcase the best</p>
                            <p>of these industries.</p>
                        </div>
                    </div>
                    <div className="right lg:w-1/2 ">
                        <div>
                            <img className='lg:w-[85%]' src={MenImg} />
                        </div>
                    </div>
                </BackgroundContainer>

            </HeroContainer>
        </div>

    )
}

export default Hero
