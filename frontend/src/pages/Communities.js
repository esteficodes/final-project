import React, { useState, useEffect } from "react";
import {Infobox, Infotext, Cardbox, ButtonLink} from "styled-components/pagesStyles";

import ResourceCard from "components/ResourceCard";


export const Communities = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch(
      "https://final-project-wit-app.herokuapp.com/resources/type/community"
    )
      .then((response) => response.json())
      .then((json) => setResources(json));
  }, []);

  return (
    <>
      <ButtonLink to="/Main">GO BACK</ButtonLink>
      <Infobox />
      <Infotext>Get involved in tech by joining a WIT community.</Infotext>

      <Cardbox>
        {resources &&
          resources.map((resource) => (
            <ResourceCard {...resource} key={resource._id} />
          ))}
      </Cardbox>
    </>
  );
};
