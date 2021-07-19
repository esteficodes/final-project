import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Card, Text, BoldText, Button, Infobox} from "styled-components/pagesStyles";
import styled from 'styled-components/macro';

import Rating from "components/Rating";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin: 10px;
  width: auto;
`;

export const Details = () => {
  const { _id } = useParams();
  const [resourceDetails, setResourceDetails] = useState({});

  useEffect(() => {
    fetch(`https://final-project-wit-app.herokuapp.com/resources/id/${_id}`)
      .then((response) => response.json())
      .then((json) => setResourceDetails(json));
  }, [_id]);

  return (
    <Wrapper>
      <Button to="/Main">GO BACK</Button>
      <Infobox />
      <Card>
        <Container>
          <h1>{resourceDetails.name}</h1>
          <Text>{resourceDetails.description}</Text>
          <BoldText>
            {" "}
            <a href={resourceDetails.url}>
              Click here to explore the resource
              <span role="img" aria-label="computer">
                {" "}
                👩🏻‍💻{" "}
              </span>
            </a>
          </BoldText>
        </Container>
      </Card>
      <Rating />
    </Wrapper>
  );
};
