import React, { useState, useEffect } from 'react'
import { useDispatch, batch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components'

import women from '../assets/women.png'

import { API_URL } from 'reusable/urls'

import { sign } from '../reducers/user'


const SigninWrapper = styled.div`
  height: 100%;
  min-width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  
  @media (min-width: 668px) {
    margin-top: 16px;
  }
  `;
  const SigninContainer = styled.div`
    height: 100%; 
    margin: 20px auto; 
    background:;
    border-radius: 5px;
    color: rgb(243,225,226);
    max-width: 300px; 
    display: flex;
    flex-direction: column;
  

    @media (min-width: 668px) {
    min-width: 400px; 
    margin: 50px auto; 
  }
  `
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
    margin-bottom: 10px;
    min-width: 300px;
  }
`;
  const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: rgb(243,225,226);
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
    color: rgb(243,225,226);
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
    font-family: 'Roboto', sans-serif;
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
const SigninImage = styled.img`
   width: 100%;
  
  @media (min-width: 668px) {
    
  }
`;

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [mode, setMode] = useState(null)

    const accessToken= useSelector(store => store.user.accessToken)
    //const errors = useSelector(store => store.user.errors)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (accessToken && loggedIn) {
            history.push('/main')
        }   
    }, [accessToken, history, loggedIn])

    const onFormSubmit = (e) => {
        e.preventDefault()
        dispatch(sign(username, password, mode))

        const options = {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        }

        fetch(API_URL('signin'), options)
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              batch (() => {
                dispatch(sign.actions.setUsername(data.username))
                dispatch(sign.actions.setPassword(data.password))
                dispatch(sign.actions.setAccessToken(data.accessToken))
                dispatch(sign.actions.setErrors(null))

                localStorage.setItem('sign', JSON.stringify({
                  username:data.username,
                  accessToken:data.accessToken
                }))
              }) 
              setLoggedIn(true)
            } else {
              dispatch(sign.actions.seterrors(data))
            }
          })
          .catch()
    }

    return (
        <SigninWrapper>
           <SigninContainer>
            <Form onSubmit={onFormSubmit}>
                <Title>Welcome to WIT meeting point</Title>
                <InputLabel>
                  Username
                </InputLabel>
                <UserInput
                  id="usernameInput"
                  type="text"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  minLength="3"
                  maxLength="15"
                  required />
                <InputLabel>
                  Password
                </InputLabel>
                <UserInput
                id="passwordInput"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength="5"
                maxLength="50"
                required />
            <Button type="submit" onClick={() => setMode('signin')}>SIGN IN</Button>
            </Form>
            <SigninImage src={women} alt="group of women" />
             <Subtitle>Not a member? Join us <Link to="/signup"> here</Link></Subtitle>
           </SigninContainer>
        </SigninWrapper>
    )
}

export default SignIn
