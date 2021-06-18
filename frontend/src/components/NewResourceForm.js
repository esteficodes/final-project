import React, { useState } from 'react'
import { API_URL } from 'reusable/urls';

import styled from 'styled-components'

import formBackground from '../assets/formBackground.png'
import women from '../assets/women.png'


const FormBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${formBackground});
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
const Title = styled.h1`
  margin: 0;
  padding-bottom: 20px;
`;
const NewResourceForm = styled.form`
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

const NewResourceForm = () => {
const [newResource, setNewResource] = useState('')

const onFormSubmit = (e) => {
  e.preventDefault()
}
    
const options = {
method: 'POST',
headers: {
  'Content-type': 'application/json'
},
body: JSON.stringify({})
}

fetch(API_URL())

return (
    <FormBackground>
        <Title> Do you know a cool resource? Add it here!</Title>
        <NewResourceForm>

        </NewResourceForm>

      <ResourceFormImage src={women} alt="group of women" />
    </FormBackground>

)

}

export default NewResourceForm