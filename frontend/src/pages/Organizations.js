import React, { useState, useEffect } from "react";

import {
  ButtonLink,
  Infobox,
  Infotext,
  Cardbox,
} from "styled-components/pagesStyles";

import ResourceCard from "components/ResourceCard";
import { CATEGORY_URL } from "reusable/urls";

export const Organizations = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch(CATEGORY_URL("npo"))
      .then((response) => response.json())
      .then((json) => setResources(json));
  }, []);

  return (
    <>
      <ButtonLink to="/Main">GO BACK</ButtonLink>
      <Infobox />
      <Infotext>
        There are plenty of great organizations, engaging in making the world of
        tech a better place for women. Here are some.
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
