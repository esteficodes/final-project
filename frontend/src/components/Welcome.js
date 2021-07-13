import React, { useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { API_URL } from "reusable/urls";

import styled from "styled-components";
import Lottie from "react-lottie";
import Typing from "../lotties/Typing";

import resources from "../reducers/resources";
import Logout from "./Logout";

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  color: rgb(243, 225, 226);
  font-size: 30px;
  text-align: center;
  padding: 5px;
  margin-top: 60px;

  @media (min-width: 668px) {
    font-size: 20px;
    margin: 0;
  }
  @media (min-width: 768px) {
    font-size: 50px;
    margin-top: 50px;
  }
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    font-size: 50px;
    margin-top: 40px;
  }
`;
const Subtitle = styled.h2`
  font-family: "Roboto Slab", sans-serif;
  color: rgb(243, 225, 226);
  font-size: 30px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 10px;

  @media (min-width: 668px) {
    font-size: 20px;
    margin-top: 10px;
  }
`;
const Button = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  width: 230px;
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 40px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 20px;
  background: rgb(63, 177, 181);
  color: rgb(243, 225, 226);
  border: none;
  &:hover {
    background: rgb(212, 9, 100);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Welcome = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const history = useHistory();

  const lottieOptions = {
    animationData: Typing,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  useEffect(() => {
    if (!accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: accessToken,
      },
    };

    fetch(API_URL("resources"), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(resources.actions.setResources(data.resources));
            dispatch(resources.actions.setErrors(null));
          });
        } else {
          dispatch(resources.actions.setErrors(data));
        }
      });
  }, [accessToken, dispatch]);

  return (
    <WelcomeWrapper>
      <Title>Welcome to the WIT community!</Title>
      <Subtitle>Thank you for joining in. Let's get techy!</Subtitle>
      <Button to="/signin">SIGN IN</Button>
      <Subtitle>Or</Subtitle>
      <Logout />
      <Lottie options={lottieOptions} />
    </WelcomeWrapper>
  );
};

export default Welcome;
