import React from 'react'
import styled from 'styled-components'
import cloudsVideo from '../assets/videos/clouds.mp4';
import MenImg from '../assets/images/men22.png'

const HeroContainer = styled.div`
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
`


function Hero() {
    return (
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
                <div className="right w-1/2">
                    <div>
                        <img className='w-[85%]' src={MenImg} />
                    </div>
                </div>
            </BackgroundContainer>

        </HeroContainer>

    )
}

export default Hero
