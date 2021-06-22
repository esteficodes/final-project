import React, { useEffect} from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

import { API_URL } from 'reusable/urls'

import styled from 'styled-components'
import background from '../assets/background.png'

import resources from '../reducers/resources'
import Logout from './Logout'

const WelcomeWrapper = styled.div`
  height: 100%;
  width: 100%
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  
  
  @media (min-width: 668px) {
    margin-top: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 768px) {
    background-size: cover;
    background-repeat: no-repeat;
  }
    @media (min-width: 1024px) {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      font-family:'Roboto', sans-serif;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  `;
  const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: rgb(243,225,226);
    font-size: 30px;
    text-align: center;
    padding: 5px;
    margin-top: 50px;
    margin-bottom: 10px;

    @media (min-width: 668px) { 
    font-size: 20px;
    margin:0;
  }
  @media (min-width: 768px) { 
    font-size: 30px;
    margin:0;
  }
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row; 
    font-size: 50px;
    margin-top:40px;
  }
  `;
  const Subtitle = styled.h2`
    font-family: 'Roboto Slab', sans-serif;
    color: rgb(243,225,226);
    font-size: 30px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 0;
    margin-top: 10px;

    @media (max-width: 668px) { 
    font-size: 20px;
    margin-top: 10px;
  }
  @media (max-width: 768px) { 
    font-size: 20px;
    margin-top: 10px;
  }
  @media (max-width: 900px) { 
    font-size: 20px;
    margin-top: 10px;
    width: 400px;
    
  }
`;
  const WelcomeImage = styled.img`
   width: 50%;
  
  @media (min-width: 668px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    box-sizing: border-box;
    width: 50%;
    object-fit: cover;
  }
`;

const Welcome = () => {
    const accessToken = useSelector(store => store.user.accessToken)

    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        if (!accessToken) {
            history.push('/signin')
        }
    }, [accessToken, history])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              Authorization: 'accessToken'
            }
        }
      
        fetch(API_URL('resources'), options)
          .then(res => res.json())
          .then(data => {
            if (data.success) {
                batch(()=> {
                  dispatch(resources.actions.setResources(data.resources))
                  dispatch(resources.actions.setErrors(null))
                })
            } else {
                dispatch(resources.actions.setErrors(data))
            }
          })
    }, [accessToken, dispatch])

    return (
      <WelcomeWrapper>   
        <Title>Welcome to the WIT community</Title>
        <Subtitle>Lorem ipsum</Subtitle>
        <WelcomeImage src={background} alt="group of women"/>
        <Link to="/main">here</Link>
        <Logout />
      </WelcomeWrapper> 
    )
}

export default Welcome