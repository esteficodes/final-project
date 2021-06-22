import React from 'react'

import styled from 'styled-components'

import women from '../assets/women.png'


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
  font-size: 20px;
  color: rgb(65,87,122);
  padding: 8px;
  margin:0;

`;
const Title = styled.h1`
  font-family: 'Roboto Slab', sans-serif;
  color: rgb(234,70,100);
  font-size: 45px;
  text-align: center;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 668px) { 
    font-size: 25px;
    margin:0;
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
const ContactImage = styled.img`
   width: 100%;
  
  @media (min-width: 668px) {
    width: 100%;
  }
`;

const Contact = () => {
  return (
      <>
      
        <MainContainer>
      <Title>Contact</Title>
      <SubTitle>Do you have questions? Suggestions? Reach us here:</SubTitle>
      <Section>
      <TextBox>
        <Text>witmeetingpoint@gmail.com</Text>
      </TextBox>
      </Section>
      <ContactImage src={women} alt="group of women" />
      
      </MainContainer>
      
      </>
  )

}

export default Contact