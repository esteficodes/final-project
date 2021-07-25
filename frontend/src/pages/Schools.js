import React, { useState, useEffect } from "react";

import {
  ButtonLink,
  Infobox,
  Infotext,
  Cardbox,
} from "styled-components/pagesStyles";

import ResourceCard from "components/ResourceCard";
import { CATEGORY_URL } from "reusable/urls";

export const Schools = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch(CATEGORY_URL("school"))
      .then((response) => response.json())
      .then((json) => setResources(json));
  }, []);

  return (
    <>
      <ButtonLink to="/Main">GO BACK</ButtonLink>
      <Infobox />
      <Infotext>
        Time to learn how to code? Here are some coding schools for you.
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
