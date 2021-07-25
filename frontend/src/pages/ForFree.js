import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  ButtonLink,
  Infobox,
  Infotext,
  Cardbox,
} from "styled-components/pagesStyles";

import ResourceCard from "components/ResourceCard";

const ForFree = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("https://final-project-wit-app.herokuapp.com/resources/free")
      .then((response) => response.json())
      .then((json) => setResources(json));
  }, []);

  return (
    <>
      <ButtonLink TO="/Main">GO BACK</ButtonLink>
      <Infobox />

      <Infotext>WIT Library - Free resources to start coding</Infotext>
      <Infotext>
        <Link to="Free">Free resources</Link> |
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

export default ForFree;
