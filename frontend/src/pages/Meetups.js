import React, { useState, useEffect } from "react";

import {ButtonLink, Infobox, Infotext, Cardbox} from "styled-components/pagesStyles";

import ResourceCard from "components/ResourceCard";


export const Meetups = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("https://final-project-wit-app.herokuapp.com/resources/type/meetup")
      .then((response) => response.json())
      .then((json) => setResources(json));
  }, []);

  return (
    <>
      <ButtonLink to="/Main">GO BACK</ButtonLink>
      <Infobox />
      <Infotext>
        Meetups are great when you want to network and get to know other tech
        women. Get started by attending some of these.
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
