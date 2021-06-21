import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import user from '../reducers/user'

import background from '../assets/background.png'

import { API_URL } from '../reusable/urls'


const SignupWrapper = styled.div`
  height: 100%;
  min-width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  margin: 0;
  padding: 0;

@media (min-width: 668px) {
  background-image: url(${background});
  background-size: cover;
  background-position-x: 25%;
  background-repeat: no-repeat;
}
`;
const SignupContainer = styled.div`
  height: 100%; 
  margin: 20px auto; 
  background:;
  border-radius: 5px;
  color: rgb(125,170,158);
  max-width: 300px; 
  display: flex;
  flex-direction: column;


  @media (min-width: 668px) {
  min-width: 400px; 
  margin: 50px auto; 
}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-width: 300px;
  justify-content: center;
  border-radius: 20px;
 

  @media (min-width: 668px) {
    padding: 18px 0;
    margin: 10px 0;
    min-width: 300px;
  }
`;
const Title = styled.h1`
font-family: 'Noto', sans-serif;
  color: rgb(244,8,134);
  font-size: 30px;
  text-align: center;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (min-width: 668px) { 
    font-size: 20px;
    margin:0;
  }
  `;
  const Subtitle = styled.h2`
  font-family: 'Roboto Slab', sans-serif;
  color: rgb(244,8,134);
  font-size: 30px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 30px;

  @media (max-width: 668px) { 
    font-size: 20px;
    margin-top: 10px;
  }
`;
  const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  font-family: 'Roboto Slab', sans-serif;
  color: rgb(243,225,226);
  font-weight: 500;
  font-size: 25px;
  border-radius: 20px;
  margin: 10px;
  `;
  const UserInput = styled.input`
  width: 80%;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  border: none;
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5); 
  box-shadow: 3px 3px 23px 3px rgba(180,194,216,0.5);
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

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    
    const accessToken= useSelector(store => store.user.accessToken)
    const errors = useSelector(store => store.user.errors)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
      if (accessToken && loggedIn) {
        history.push("/Main");
      }
    }, [accessToken, loggedIn, history]);

    const onFormSubmit = (e) => {
        e.preventDefault()

        const options = {
            method: 'POST',
            headers:{
               'Content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }

        fetch(API_URL('signup'), options)
          .then(res => res.json())
          .then(data => {
              if (data.success){
                  batch(() => {
                      dispatch(user.actions.setUsername(data.username))
                      dispatch(user.actions.setAccessToken(data.accessToken))
                      dispatch(user.actions.setErrors(null))
                      localStorage.setItem('user', JSON.stringify({
                        username:data.username,
                        accessToken: data.accessToken
                      }))
                    })
                  setLoggedIn(true)
                  } else {
                    dispatch(user.actions.setErrors(data))
                  }
                })
                .catch()
              }

    return (
        <SignupWrapper>
            <SignupContainer>
                <Form onSubmit={onFormSubmit}>
                  <Title>It's great that you are joining!</Title>
                  <InputLabel>
                    username
                  </InputLabel>
                  <UserInput
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <InputLabel>
                   password
                  </InputLabel>
                  <UserInput
                  required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                   
                <Button
                  type="submit" 
                >
                  SIGN UP
                </Button>
                {errors && <p>Oops, looks like something went wrong! Please, try again</p>}
                </Form>
            </SignupContainer>
            <Subtitle>Welcome!</Subtitle>
        </SignupWrapper>
    )
}
export default SignUp