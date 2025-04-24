
import styled from 'styled-components'
import MenRobeImg from '../assets/images/menrobe.png'
import OneImg from '../assets/images/1.png'
import TwoImg from '../assets/images/2.png'
import RedCircle from '../assets/images/circlered.png'


const VisionContainer = styled.div`
position: relative;
    width: 100%;
    height: 100vh;
    
    /* margin-bottom: -200px; */
    background-color: #212529;
    display: flex;
    align-items: center;
    justify-content: center;

`

const VisionWrap = styled.div`
    
p{
    font-family: sans-serif;
}
`

function Vision() {
    return (
        <VisionContainer>

            <VisionWrap className='grid grid-cols-3 gap-4'>
                <div className="box1 m-auto">
                    <img className='w-[70%]  m-auto' src={MenRobeImg} alt="" />
                </div>
                <div className="box1">
                    <div className='flex 
                     ' >
                        <div className='relative'>
                            <img src={OneImg} className='w-[70%] border-l-[1px]' />
                            <img src={RedCircle} className='absolute top-[40%] left-[-30px] ' />
                        </div>
                        
                        <div className='text-left m-auto '>
                            <img src={TwoImg} className='w-[70%]' />
                        </div>
                    </div>
                </div>
                <div className="box1 border-l-[1px] flex items-center justify-center text-right">
                    <div className='text-[#e3e3e3]'>
                        <div className='mb-[20px]'>
                            <small className='text-[33px] leading-none'>Focusing on</small><br></br>
                            <span className='text-[46px] leading-none'>Imagination</span>
                        </div>
                        <p className='text-[13px] text-right'>Our vision is to encourage and cultivate <br /> imagination
                            by providing opportunities and <br />resources for people
                            to explore their creative <br />potential and bring their
                            ideas to life. By focusing< br /> on imagination, we strive to inspire innovation, <br />discovery,
                            and progress in all aspects of life.</p>
                    </div>
                </div>
            </VisionWrap>

        </VisionContainer>
    )
}

export default Vision
