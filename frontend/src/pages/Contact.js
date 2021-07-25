import React from "react";
import styled from "styled-components/macro";

import {
  Section,
  Text,
  TextBox,
  Title,
  SubTitle,
} from "styled-components/pagesStyles";

import women from "../assets/women.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  @media (min-width: 668px) {
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
  );
};

export default Contact;
