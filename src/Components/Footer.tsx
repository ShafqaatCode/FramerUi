
import { useState } from 'react';
import styled from 'styled-components';

const TestimonialSection = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 40px;
  background-color: #212529;
  /* border: 1px solid #fff; */
  color: #fff;
 
`;

const TopRow = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  /* border: 2px solid red; */
`;

const CirclesContainer = styled.div`
  display: flex;
  margin:10px 0;
  
  gap: 8px;
`;

const Circle = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${({ active }) => (active ? '#fff' : '#666')};
  border-radius: 50%;
  cursor: pointer;
`;

const TestimonialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TestimonialCard = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid;
  max-width: 30%;
  min-width: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    max-width: 90%;
    min-width: 90%;
    display: ${({ hidden }: any) => (hidden ? 'none' : 'flex')};
  }

  p {
    font-family: sans-serif;
    color: gray;
    font-size: 13px;
  }
`;

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  object-fit: cover;
`;

const NameCompany = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: center;
  /* border: 1px solid; */
`;

const VideoWrapper = styled.video`
  width: 300px;
  height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

function Testimonials() {
  const textTestimonials = [
    { id: 1, name: "John Doe", company: "Tech Corp", text: "This service is amazing!", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Jane Smith", company: "Design Studio", text: "Outstanding quality and support!", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 3, name: "Mike Johnson", company: "Business Inc.", text: "Helped our business grow.", img: "https://randomuser.me/api/portraits/men/65.jpg" }
  ];

  const videoTestimonials = [
    { id: 1, name: "Elon Musk", company: "Tesla", video: "https://www.w3schools.com/html/mov_bbb.mp4", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Mark Zuckerberg", company: "Facebook", video: "https://www.w3schools.com/html/mov_bbb.mp4", img: "https://randomuser.me/api/portraits/men/44.jpg" },
    { id: 3, name: "Satya Nadella", company: "Microsoft", video: "https://www.w3schools.com/html/mov_bbb.mp4", img: "https://randomuser.me/api/portraits/men/65.jpg" }
  ];

  const [currentText, setCurrentText] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);

  const visibleTextTestimonials = textTestimonials.slice(currentText, currentText + 3);
  const visibleVideoTestimonials = videoTestimonials.slice(currentVideo, currentVideo + 3);

  return (
    <div className='bg-[#212529]'> <TestimonialSection>
      <h1 className="text-center text-3xl mt-4">Testimonials</h1>
      <TopRow>
        <CirclesContainer>
          {Array.from({ length: textTestimonials.length - 0 }).map((_, index) => (
            <Circle
              key={index}
              active={currentText === index}
              onClick={() => setCurrentText(index)}
            />
          ))}
        </CirclesContainer>
      </TopRow>

      <TestimonialsWrapper>
        {visibleTextTestimonials.map((item, idx) => (
          <TestimonialCard key={item.id} hidden={idx > 0}>
            <ProfileRow>
              <ProfileImage src={item.img} alt={item.name} />
              <NameCompany>
                <Name>{item.name}</Name>
                <Company>{item.company}</Company>
              </NameCompany>
            </ProfileRow>
            <p>"{item.text}"</p>
          </TestimonialCard>
        ))}
      </TestimonialsWrapper>

      <h1 className="text-center text-3xl mt-6 ">Video Testimonials</h1>
      <TopRow>
        <CirclesContainer>
          {Array.from({ length: videoTestimonials.length - 0 }).map((_, index) => (
            <Circle
              key={index}
              active={currentVideo === index}
              onClick={() => setCurrentVideo(index)}
            />
          ))}
        </CirclesContainer>
      </TopRow>

      <TestimonialsWrapper>
        {visibleVideoTestimonials.map((item, idx) => (
          <VideoTestimonialCard key={item.id} hidden={idx > 0}>
            <VideoWrapper controls>
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </VideoWrapper>
            <div className="underText mt-0 sm:hidden md:block">
              <h3>{item.name}</h3>
              <p>{item.company}</p>
            </div>
          </VideoTestimonialCard>
        ))}
      </TestimonialsWrapper>
    </TestimonialSection></div>

  );
}

export default Testimonials;
