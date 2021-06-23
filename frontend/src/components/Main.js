import React, { useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import Lottie from 'react-lottie'
import Typing from '../lotties/Typing'

import { API_URL } from "../reusable/urls";

import resources from "reducers/resources";
import Logout from "./Logout";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LottieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 668px) { 
    width: 50%;
  }
  @media (min-width: 768px) { 
    width: 40%;
  }
`;

const InfoText = styled.p`
  margin: 15px 20px;
  text-align: center;
  font-size: 20px;

  @media (min-width: 668px) { 
    font-size: 30px;
  }
  @media (min-width: 768px) { 
    font-size: 40px;
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
    font-family: 'Roboto Slab', sans-serif;
    font-size: 20px;
    background: rgb(63,177,181);
    color: rgb(243,225,226);
    border: none;
  &:hover {
    background: rgb(212,9,100);
    transform: scale(1.1);
    cursor: pointer
  }
`;

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const history = useHistory();

  const lottieOptions = {
    animationData: Typing,
    loop: true, 
    autoplay: true, 
    rendererSettings: {
    preserveAspectRatio: "xMidYMid meet"
} 
  }

  useEffect(() => {
    if (!accessToken) {
      history.push("/signin");
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
            dispatch(resources.actions.setThoughts(data.resources));
            dispatch(resources.actions.setErrors(null));
          });
        } else {
          dispatch(resources.actions.setErrors(data));
        }
      });
  }, [accessToken, dispatch]);

  return (
    <MainContainer>
      <LottieContainer>
       <Lottie options={lottieOptions} /> 
      </LottieContainer>
       <InfoText>
        WIT Library - Resources for all female tech stars like you
      </InfoText>     
      <InfoText>
        <Button to="Meetups">Meetups</Button> |{" "}
        <Button to="Organizations">Organizations</Button> |{" "}
        <Button to="Communities">Communities</Button> |{" "}
        <Button to="Events">Events</Button> | <Button to="Schools">Schools</Button> |{" "}
        <Button to="Websites">Websites</Button>
      </InfoText>
      <Button to="/newresource">Add a resource</Button>
      <Logout />
      </MainContainer>
  );
};

export default Main;
