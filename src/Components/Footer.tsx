import { useState } from 'react';
import styled from 'styled-components';

const TestimonialSection = styled.div`
  width: 100%;
  margin: auto;
  padding: 40px;
  background-color: #212529;
  border: 1px solid #fff;
  position: relative;
  color: #fff;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const CirclesContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Circle = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  background-color: ${props => props.active ? '#fff' : '#666'};
  border-radius: 50%;
  cursor: pointer;
`;

const TestimonialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  overflow: hidden;
`;

const TestimonialCard = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  min-width: 30%;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;

  p {
    font-family: sans-serif;
    color: gray;
  }
`;

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: sans-serif;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const NameCompany = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;



const Name = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const Company = styled.div`
  font-size: 12px;
  color: gray;
`;


const VideoTestimonialCard = styled(TestimonialCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */


  .underText{

    /* display: flex; */
    /* border: 2px solid #fff; */
    font-family: sans-serif;
    flex-direction: column;
    /* gap: 10px; */
    margin-top: 10px;
    text-align: left;
  }
`;

const VideoWrapper = styled.video`
  width: 350px;
  height: 230px;
  object-fit: cover;
  /* border-radius: 10px; */
`;

function Testimonials() {
    const textTestimonials = [
        { id: 1, name: "John Doe", company: "Tech Corp", text: "This service is amazing! Highly recommend. lorem ipusun dollar emmelet shamelt tamlet kamelet mamlet namlet tamlet famlet somlet homelet jmdofjdnfo ", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { id: 2, name: "Jane Smith", company: "Design Studio", text: "Outstanding quality and great support! ipusun dollar emmelet shamelt tamlet kamelet mamlet namlet tamlet famlet somlet homelet jmdofjdnfo ", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { id: 3, name: "Mike Johnson", company: "Business Inc.", text: "They really helped our business grow fast. ipusun dollar emmelet shamelt tamlet kamelet mamlet namlet tamlet famlet somlet homelet jmdofjdnfo ", img: "https://randomuser.me/api/portraits/men/65.jpg" },
        { id: 4, name: "Emily Brown", company: "Startup Hub", text: "Amazing platform to work with, super fast! ipusun dollar emmelet shamelt tamlet kamelet mamlet namlet tamlet famlet somlet homelet jmdofjdnfo ", img: "https://randomuser.me/api/portraits/women/68.jpg" },
        { id: 5, name: "Chris Lee", company: "Creative Works", text: "A must-have service for every business. ipusun dollar emmelet shamelt tamlet kamelet mamlet namlet tamlet famlet somlet homelet jmdofjdnfo ", img: "https://randomuser.me/api/portraits/men/52.jpg" },
    ];



    const videoTestimonials = [
        {
            id: 1,
            name: "Elon Musk",
            company: "Tesla & SpaceX",
            video: "https://www.youtube.com/watch?v=ev7gHpgbIJ8",
            img: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Mark Zuckerberg",
            company: "Facebook",
            video: "https://www.youtube.com/watch?v=2xU11YYF4gY",
            img: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
            id: 3,
            name: "Satya Nadella",
            company: "Microsoft",
            video: "https://www.youtube.com/watch?v=QIkG4Uw9JvY",
            img: "https://randomuser.me/api/portraits/men/65.jpg"
        },
        {
            id: 4,
            name: "Sundar Pichai",
            company: "Google",
            video: "https://www.youtube.com/watch?v=6xV7XgDnoAk",
            img: "https://randomuser.me/api/portraits/men/68.jpg"
        },
        {
            id: 5,
            name: "Jeff Bezos",
            company: "Amazon",
            video: "https://www.youtube.com/watch?v=Tm8RgUVagbI",
            img: "https://randomuser.me/api/portraits/men/52.jpg"
        },
    ];


    const [currentText, setCurrentText] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(0);

    const visibleTextTestimonials = textTestimonials.slice(currentText, currentText + 3);
    const visibleVideoTestimonials = videoTestimonials.slice(currentVideo, currentVideo + 3);

    const handleTextDotClick = (index: number) => {
        setCurrentText(index);
    };

    const handleVideoDotClick = (index: number) => {
        setCurrentVideo(index);
    };

    return (
        <TestimonialSection>
            <h1 className="text-center text-3xl">Text Testimonials</h1>
            <TopRow>
                <CirclesContainer>
                    {Array.from({ length: textTestimonials.length - 2 }).map((_, index) => (
                        <Circle
                            key={index}
                            active={currentText === index}
                            onClick={() => handleTextDotClick(index)}
                        />
                    ))}
                </CirclesContainer>
            </TopRow>

            <TestimonialsWrapper>
                {visibleTextTestimonials.map((item) => (
                    <TestimonialCard key={item.id}>
                        <ProfileRow>
                            <ProfileImage src={item.img} alt={item.name} />
                            <NameCompany>
                                <Name>{item.name}</Name>
                                <Company>{item.company}</Company>
                            </NameCompany>
                        </ProfileRow>
                        <p className="text-[13px] text-gray-300">"{item.text}"</p>
                    </TestimonialCard>
                ))}
            </TestimonialsWrapper>

            <h1 className="text-center text-3xl mt-10">Video Testimonials</h1>
            <TopRow>
                <CirclesContainer>
                    {Array.from({ length: videoTestimonials.length - 2 }).map((_, index) => (
                        <Circle
                            key={index}
                            active={currentVideo === index}
                            onClick={() => handleVideoDotClick(index)}
                        />
                    ))}
                </CirclesContainer>
            </TopRow>

            <TestimonialsWrapper>
                {visibleVideoTestimonials.map((item) => (
                    <VideoTestimonialCard className='' key={item.id}>

                        <VideoWrapper controls>
                            <source src={item.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </VideoWrapper>
                        <div className='underText m-0'>
                            <h3>Kevin Corcoran</h3>
                            <p>Holloywod Standare lake unicorn </p>
                        </div>
                    </VideoTestimonialCard>

                ))}
            </TestimonialsWrapper>
        </TestimonialSection>
    );
}

export default Testimonials;
