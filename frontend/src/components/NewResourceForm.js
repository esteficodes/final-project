import React, { useState, useEffect } from 'react'
import { useDispatch, batch, useSelector } from 'react-redux'
import resources from 'reducers/resources';
import { API_URL } from 'reusable/urls';

import styled from 'styled-components'

import formBackground from '../assets/formBackground.png'
import women from '../assets/women.png'


const FormWrapper = styled.div`
  height: 100%;
  min-width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${formBackground});
  margin: 0;
  padding: 0;

@media (min-width: 668px) {
  background-image: url(${formBackground});
  background-size: cover;
  background-position-x: 25%;
  background-repeat: no-repeat;
}
`;

const FormContainer = styled.div`
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
const Title = styled.h1`
  margin: 0;
  padding-bottom: 20px;
`;
const ResourceForm = styled.form`
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
const ResourceFormImage = styled.img`
width: 100%;
  
@media (min-width: 668px) {
  width: 100%;
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
  const ResourceLabel = styled.label`
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
  const ResourceInput = styled.input`
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

const NewResourceForm = () => {
const [resourceName, setResourceName] = useState('')

const dispatch = useDispatch()


const onFormSubmit = (e) => {
  e.preventDefault()
}
    
const options = {
method: 'POST',
headers: {
  'Content-type': 'application/json'
},
body: JSON.stringify({ resources })
}

fetch(API_URL('resources'), options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          batch (() => {
            dispatch(resources.actions.setUsername(data.resourcename))
            dispatch(resources.actions.setAccessToken(data.accessToken))
            dispatch(resources.actions.setErrors(null))

            localStorage.setItem('resource', JSON.stringify({
              resources:data.resources
            }))
          })
        
        } else {
          dispatch(resources.actions.setErrors(data))
        }
      })
      .catch()
    

return (
    <FormWrapper>
        <Title> Do you know a cool resource? Add it here!</Title>
        <FormContainer>
        <ResourceForm>
          <ResourceLabel>
         Resource name
          </ResourceLabel>
          <ResourceInput
              id="usernameInput"
                  type="text"
                  value={resources} 
                  onChange={(e) => setResourceName(e.target.value)}
                  minLength="3"
                  maxLength="20"
                  required />
        </ResourceForm>
        <Button>Add it!</Button>
        </FormContainer>
      <ResourceFormImage src={women} alt="group of women" />
    </FormWrapper>

)

}

export default NewResourceForm