import React, { useState } from 'react'
import { useDispatch, batch } from 'react-redux'
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
    border-radius: 5px;
    background-color: rgb(243,225,226);
    max-width: 300px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  

    @media (min-width: 668px) {
    min-width: 400px; 
    margin: 50px auto; 
  }
  `;
const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
  padding-bottom: 20px;
  color: rgb(63,177,181);
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
  @media (min-width: 768px) {
    padding: 18px 0;
    margin-bottom: 10px;
    min-width: 300px;
  }
  @media (min-width: 1024px) {
    padding: 18px 0;
    margin-bottom: 10px;
    width: 100%;
  }
`;
const ResourceFormImage = styled.img`
width: 80%;
  
@media (min-width: 668px) {
  width: 100%;
}
`;
  const ResourceLabel = styled.label`
    display: flex;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: rgb(63,177,181);
    font-weight: 500;
    font-size: 25px;
    border-radius: 20px;
    margin: 10px;
  `;
  const NameInput = styled.input`
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
  const ResourceInput = styled.input`
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
    margin-top: 15px;
    padding: 10px 10px 30px;
    overflow-wrap: break-word;
    line-break: loose;
  `;
  const Button = styled.button`
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    width: 230px;
    height: 50px;
    border-radius: 20px;
    padding: 10px;
    margin-top: 60px;
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
const [newResource, setNewResource] = useState('')

const dispatch = useDispatch()


//const onFormSubmit = (e) => {
//  e.preventDefault()
//}
    
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
          <NameInput
                 id="resourceName"
                  type="text"
                  value={newResource} 
                  onChange={(e) => setNewResource(e.target.value)}
                  required />
          <ResourceLabel>
           Description
          </ResourceLabel>
          <ResourceInput
               id='newResource'
                type="text"
                minLength='5'
                maxLength='140'
                required
                placeholder="What kind of resource is this?..."
                value={newResource}
                />
          </ResourceForm>
          <Button>Add it!</Button>
          </FormContainer>
        <ResourceFormImage src={women} alt="group of women" />
      </FormWrapper>

)

}

export default NewResourceForm