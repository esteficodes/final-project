import React, { useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import { API_URL } from "../reusable/urls";

import resources from "reducers/resources";
import Logout from "./Logout";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InfoBox = styled.div`
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

const InfoText = styled.p`
  margin: 15px 20px;
  text-align: center;
  font-size: 20px;
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
  font-family: 'Roboto Slab', sans-serif;
  font-size: 20px;
  background: rgb(63,177,181);
  color: white;
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
      <InfoBox />
      <InfoText>
        WIT Library - Resources for all female tech stars like you
      </InfoText>
      <InfoText>
        <Link to="Meetups">Meetups</Link> |{" "}
        <Link to="Organizations">Organizations</Link> |{" "}
        <Link to="Communities">Communities</Link> |{" "}
        <Link to="Events">Events</Link> | <Link to="Schools">Schools</Link> |{" "}
        <Link to="Websites">Websites</Link>
      </InfoText>
      <Button to="/newresource">Add a resource</Button>
      <Logout />
      </MainContainer>
  );
};

export default Main;
