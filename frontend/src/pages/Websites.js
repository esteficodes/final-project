import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ResourceCard from "components/ResourceCard";

const Infobox = styled.div`
  margin: 100px auto;
  position: relative;
  display: block;
  color: black;
  width: 0;
  height: 0;
  border-right: 100px solid transparent;
  border-bottom: 70px solid #f4d8cb;
  border-left: 100px solid transparent;
  transform: rotate(35deg);
  &::before {
    border-bottom: 80px solid #f4d8cb;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: "";
    transform: rotate(-35deg);
  }
  &::after {
    position: absolute;
    display: block;
    color: #f4d8cb;
    top: 3px;
    left: -105px;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #f4d8cb;
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: "";
  }
`;

const Infotext = styled.p`
  margin: 0 20px;
  text-align: center;
  font-size: 20px;
`;

const Cardbox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-left: 10%;
  margin: 20px;
  padding: 15px;
  @media (min-width: 668px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const ButtonLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: 130px;
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 80px;
  margin-left: 40px;
  margin-bottom: 10px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 20px;
  background: rgb(63, 177, 181);
  color: rgb(253, 253, 253);
  border: none;
  text-decoration: none;

  &:hover {
    background: rgb(240, 96, 122);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Websites = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("https://final-project-wit-app.herokuapp.com/resources/type/website")
      .then((response) => response.json())
      .then((json) => setResources(json));
  }, []);

  return (
    <>
      <ButtonLink to="/Main">GO BACK</ButtonLink>
      <Infobox />
      <Infotext>
        Explore the websites below and learn more about coding and other tech
        related topics.
      </Infotext>

      <Cardbox>
        {resources &&
          resources.map((resource) => (
            <ResourceCard {...resource} key={resource._id} />
          ))}
      </Cardbox>
    </>
  );
};
