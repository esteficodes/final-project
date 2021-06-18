import React from 'react'

import styled from 'styled-components'

import background from '../assets/background.png'

const Wrapper = styled.div`
  height: 100%;
  min-width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  margin: 0;
  padding: 0;

@media (min-width: 668px) {
  background-image: url(${background});
  background-size: cover;
  background-position-x: 25%;
  background-repeat: no-repeat;
}
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

const About = () => {
    return(
        <>
        <Wrapper>
            <Title>About WIT</Title>
            <Text>Text about wit</Text>

        </Wrapper>
        </>
    )
}

export default About 