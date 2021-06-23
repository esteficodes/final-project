import React from 'react'

import styled from 'styled-components'


const AboutWrapper = styled.div`
  height: 100%;
  min-width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`

 const MainContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0; 
  margin-left: 10%;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 668px){
    width: 80%;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 30px;
  background-color: rgb(255,255,255, 0.3);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
  border-radius: 20px;
`;
const TextBox = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;
const Text = styled.p`
  font-size: 15px;
  color: rgb(65,87,122);
  padding: 8px;
  margin:0;
`;

const Title = styled.h1`
  font-family: 'Roboto Slab', sans-serif;
  color: white;
  font-size: 25px;
  text-align: center;
  margin:0;
  padding: 5px;

  @media (min-width: 668px) { 
    font-size: 45px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) and (max-width:1023px) { 
    font-size: 30px;
  }
`;
const SubTitle = styled.h2`
  font-family: 'Roboto Slab', sans-serif;
  color: white;
  font-size: 20px;
  margin-top: 10px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 30px;

  @media (min-width: 668px) { 
    font-size: 30px;
    
  }
`;
const AboutLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: rgb(67,138,204);
  cursor: pointer;

  @media (max-width: 668px){
    font-size: 15px;
   }
`;

const About = () => {
    return(
        <>
      <AboutWrapper>
        <MainContainer>
            <Title>About WIT <span role="img" aria-label="about wit">&#128105;&#8205;&#128187;</span></Title>
            <SubTitle>Women In Technology Meeting Point</SubTitle>
            <Section>
              <TextBox>
                <Text>
                WIT Meeting point is the result of our strong wish to see more diversity in the tech industry. According to Women in tech statistics for 2020, a whopping 80% of those in the tech field are still male, while only 20% are female. We dream of a society full of tech workplaces in which women and other minorities are not outnumbered by men anymore. With our application we wish to contribute by offering an evergrowing list of resources specially aimed for women who wish to start building a career in technology. We have built a database of over 70 websites, bootcamps, schools, courses, articles, books and others which focus on bringing more women and girls into the tech industry. 
                </Text>
              </TextBox>
            </Section>
            <SubTitle>
            This project was developed by:
            </SubTitle>
            <Section>
              <TextBox>
                <SubTitle>Therese Hagelin</SubTitle>
                <AboutLink href="https://github.com/ThereseHag" target="_blank" rel="noopener noreferrer">My GitHub account</AboutLink>
                <Text>
                  Lorem ipsum
                </Text>
              </TextBox>
            </Section>
            <Section>
              <SubTitle>Estefanía Quevedo</SubTitle>
              <AboutLink href="https://github.com/esteficodes" target="_blank" rel="noopener noreferrer">My GitHub account</AboutLink>
               <Text>
                Lorem ipsum
              </Text>
            </Section>
        </MainContainer>
      </AboutWrapper>
        </>
    )
}

export default About 