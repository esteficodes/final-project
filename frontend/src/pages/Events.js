import React, { useState, useEffect } from "react";

import {
  ButtonLink,
  Infobox,
  Infotext,
  Cardbox,
} from "styled-components/pagesStyles";

import ResourceCard from "components/ResourceCard";
import { CATEGORY_URL } from "reusable/urls";

export const Events = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch(CATEGORY_URL("event"))
      .then((response) => response.json())
      .then((json) => setResources(json));
  }, []);

  return (
    <>
      <ButtonLink to="/Main">GO BACK</ButtonLink>
      <Infobox />
      <Infotext>
        Would you like to have fun, network and learn more about tech? Then you
        should make sure to join one of those events.
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
