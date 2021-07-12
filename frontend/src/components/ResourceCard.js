import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: #f4d8cb;
  color: #000;
  border: 2px solid #98a7b2;
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
  height: 300px;
`;

const Text = styled.text`
  margin: 5px;
  padding: 5px;
`;

const ResourceCard = ({ name, type, language, url, description, _id }) => {
  return (
    <>
      <Link to={`/resources/${_id}`}>
        <Card>
          <h2>{name}</h2>
          <Text>
            <b>Type of website:</b> {type}
          </Text>
          <Text>
            <b>Language:</b> {language}
          </Text>
        </Card>
      </Link>
    </>
  );
};

export default ResourceCard;
