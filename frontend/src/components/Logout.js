import React from "react";
import { batch, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";

import user from "../reducers/user";

const Button = styled.button`
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
  background: rgb(212, 9, 100);
  color: rgb(243, 225, 226);
  border: none;
  &:hover {
    background: rgb(63, 177, 181);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Logout = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    batch(() => {
      dispatch(user.actions.setUsername(null));
      dispatch(user.actions.setAccessToken(null));

      localStorage.removeItem("user");
    });
  };

  return (
    <Link to="/">
      <div>
        <Button onClick={onButtonClick}>Logout</Button>
      </div>
    </Link>
  );
};

export default Logout;
