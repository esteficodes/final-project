import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import Rating from "components/Rating";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #f4d8cb;
  color: #000;
  border: 2px solid #98a7b2;
  border-radius: 10%;
  -webkit-box-shadow: 0 15px 10px #777;
  -moz-box-shadow: 0 15px 10px #777;
  box-shadow: 0 15px 10px #777;
  width: 300px;
  margin: 40px;
  padding: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

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

const Text = styled.p`
  margin: 10px;
  padding: 5px;
  font-color: black;
`;

const BoldText = styled.p`
  margin: 10px;
  padding: 5px;
  font-color: black;
  font-weight: bold;
`;

const Container = styled.div`
  margin: 10px;
  width: auto;
`;
const Button = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  width: 230px;
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 20px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 20px;
  background: rgb(63, 177, 181);
  color: white;
  border: none;
  &:hover {
    background: rgb(212, 9, 100);
    color: white;
    transform: scale(1.1);
    cursor: pointer;
  }
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
