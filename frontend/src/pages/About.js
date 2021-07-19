import React from "react";
import styled from 'styled-components/macro';


import {Section, TextBox, Title, SubTitle, Text} from "styled-components/pagesStyles";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: rgb(67, 138, 204);
  cursor: pointer;

  @media (max-width: 668px) {
    font-size: 15px;
  }
`;

const About = () => {
  return (
    <>
      <AboutWrapper>
        <Title>
          About WIT{" "}
          <span role="img" aria-label="about wit">
            &#128105;&#8205;&#128187;
          </span>
        </Title>
        <SubTitle>Women In Technology Meeting Point</SubTitle>
        <Section>
          <TextBox>
            <Text>
              WIT Meeting point is the place where you can find all kinds of
              resources aimed for women who are interested in starting their
              journey into the tech world. Find websites, communities, schools,
              bootcamps and much more! According to Women in tech statistics for
              2020, a whopping 80% of those in the tech field are still male,
              while only 20% are female. We dream of a society full of tech
              workplaces in which women and other minorities are not outnumbered
              by men anymore. Do you share this dream? Join us!
            </Text>
          </TextBox>
        </Section>
        <SubTitle>This project was developed by:</SubTitle>
        <Section>
          <TextBox>
            <SubTitle>Therese Hagelin</SubTitle>
            <AboutLink
              href="https://github.com/ThereseHag"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub account
            </AboutLink>
            <Text>
              Project manager with a passion for tech, now also turning into a
              frontend developer. Big fan of home decor, red wine and
              cappuccino, but now also APIs and React
            </Text>
          </TextBox>
        </Section>
        <Section>
          <TextBox>
            <SubTitle>Estefanía Quevedo</SubTitle>
            <AboutLink
              href="https://github.com/esteficodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub account
            </AboutLink>
            <Text>
              Originally from Argentina, now based in Denmark. Former Online
              Languages Teacher and Translator, now starting my journey as a
              Developer and loving it!
            </Text>
          </TextBox>
        </Section>
      </AboutWrapper>
    </>
  );
};

export default About;
