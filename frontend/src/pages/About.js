import React from 'react'

import styled from 'styled-components'


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
const PersonalImage = styled.img`
  width: 100px;
  height: 100px;

  @media (min-width: 668px){
    width: 200px;
    height: 200px;
    padding: 10px;
    border-radius: 120px;
   }
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
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
  color: rgb(234,70,100);
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
  color: rgb(234,70,100);
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

const About = () => {
    return(
        <>
        <MainContainer>
            <Title>About WIT</Title>
            <SubTitle>Text about wit</SubTitle>
            <Section>
              <TextBox>
                <Text>
                  lorem ipsum
                </Text>
              </TextBox>
            </Section>
            <SubTitle>
            This project was developed by:
            </SubTitle>
            <Section>
              <TextBox>
                <SubTitle>Therese Hagelin</SubTitle>
                <Text>
                  Lorem ipsum
                </Text>
              </TextBox>
            </Section>
            <Section>
              <SubTitle>Estefanía Quevedo</SubTitle>
              <Text>Lorem ipsum</Text>
            </Section>
        </MainContainer>
        </>
    )
}

export default About 