import React, { useState, useEffect } from "react";

import {ButtonLink, Infobox, Infotext, Cardbox} from "styled-components/pagesStyles";

import ResourceCard from "components/ResourceCard";


export const Schools = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("https://final-project-wit-app.herokuapp.com/resources/type/school")
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
