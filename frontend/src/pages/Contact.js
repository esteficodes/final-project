import React from 'react'

import styled from 'styled-components'

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

const Contact = () => {
  return (
      <>
      <Title>Contact</Title>
      <Text>Do you have questions? Suggestions? Reach us here:</Text>
      </>
  )

}

export default Contact