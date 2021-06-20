import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

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

export const Events = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/resources/type/event")
      .then((response) => response.json())
      .then((json) => setResources(json));
  }, []);

  return (
    <>
      <Link to="/">
        <span>&#x2B05; </span>
        <span> BACK</span>
      </Link>
      <Infobox />
        <Infotext>
            Would you like to have fun, network and learn more about tech? Then you should make sure to join one of those events.
        </Infotext>
      

      <Cardbox>
        {resources && resources.map((resource) => <ResourceCard {...resource} key={resource._id} />)}
      </Cardbox>
    </>
  );
};