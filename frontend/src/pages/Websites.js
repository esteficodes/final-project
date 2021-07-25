import React, { useState, useEffect } from "react";

import {
  ButtonLink,
  Infobox,
  Infotext,
  Cardbox,
} from "styled-components/pagesStyles";

import ResourceCard from "components/ResourceCard";
import { CATEGORY_URL } from "reusable/urls";

export const Websites = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch(CATEGORY_URL("website"))
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
