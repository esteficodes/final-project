import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ResourceCard from "components/ResourceCard";
import API_URL from "reusable/urls";

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
  margin: 15px 20px;
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

const ResourcesList = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch(API_URL("resources"))
      .then((response) => response.json())
      .then((json) => setResources(json));
  }, []);

  return (
    <>
      <Infobox />

      <Infotext>
        WIT Library - Resources for all female tech stars like you
      </Infotext>
      <Infotext>
        <Link to="Meetups">Meetups</Link> |{" "}
        <Link to="Organizations">Organizations</Link> |{" "}
        <Link to="Communities">Communities</Link> |{" "}
        <Link to="Events">Events</Link> | <Link to="Schools">Schools</Link> |{" "}
        <Link to="Websites">Websites</Link>
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

export default ResourcesList;
