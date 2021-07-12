import React, { useState, useEffect } from "react";
import { useDispatch, batch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { API_URL } from "reusable/urls";
import styled from "styled-components";

import women from "../assets/women.png";

import user from "../reducers/user";

const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 300px;
  justify-content: center;
  border-radius: 20px;
  margin-top: 50px;

  @media (min-width: 668px) {
    padding: 18px 0;
    margin-bottom: 10px;
    min-width: 300px;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    padding: 18px 0;
    margin-bottom: 10px;
    min-width: 300px;
  }

  @media (min-width: 1024px) {
    padding: 18px 0;
    margin-bottom: 10px;
    min-width: 300px;
    box-sizing: border-box;
  }
`;
const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 30px;
  text-align: center;
  padding: 5px;
  margin-top: 50px;
  margin-bottom: 10px;

  @media (min-width: 668px) {
    font-size: 20px;
    margin: 0;
  }
  @media (min-width: 768px) {
    font-size: 30px;
    margin: 0;
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
  font-size: 20px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 10px;

  @media (min-width: 668px) {
    font-size: 40px;
    margin-top: 10px;
  }
`;
const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  color: rgb(243, 225, 226);
  font-weight: 500;
  font-size: 25px;
  border-radius: 20px;
  margin: 10px;
`;
const UserInput = styled.input`
  width: 60%;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  border: none;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180, 194, 216, 0.5);
  box-shadow: 3px 3px 23px 3px rgba(180, 194, 216, 0.5);
`;
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
  background: rgb(63, 177, 181);
  color: rgb(243, 225, 226);
  border: none;
  &:hover {
    background: rgb(212, 9, 100);
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const SigninImage = styled.img`
  width: 100%;

  @media (min-width: 668px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    box-sizing: border-box;
    width: 50%;
    object-fit: cover;
  }
`;

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.user.errors);
  const [loggedIn, setLoggedIn] = useState(false);

  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (accessToken && loggedIn) {
      history.push("/Main");
    }
  }, [accessToken, loggedIn, history]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    fetch(API_URL("signin"), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUsername(data.username));
            dispatch(user.actions.setAccessToken(data.accessToken));
            dispatch(user.actions.setErrors(null));

            localStorage.setItem(
              "user",
              JSON.stringify({
                username: data.username,
                accessToken: data.accessToken,
              })
            );
          });
          setLoggedIn(true);
        } else {
          dispatch(user.actions.setErrors(data));
        }
      })
      .catch();
  };

  return (
    <SigninWrapper>
      <Form onSubmit={onFormSubmit}>
        <Title>WIT meeting point</Title>
        <InputLabel>Username</InputLabel>
        <UserInput
          id="usernameInput"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          minLength="3"
          maxLength="15"
          required
        />
        <InputLabel>Password</InputLabel>
        <UserInput
          id="passwordInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="5"
          maxLength="50"
          required
        />
        <Button type="submit">SIGN IN</Button>
        <Subtitle>
          Not a member? <Link to="/signup">JOIN US</Link>
        </Subtitle>
        {errors && (
          <p>
            OOPS, looks like you don't have an account yet. You are welcome to
            create a new one!
          </p>
        )}
        <SigninImage src={women} alt="group of women" />
      </Form>
    </SigninWrapper>
  );
};

export default SignIn;
