import React, { useState } from 'react'
import { useDispatch, batch } from 'react-redux'
import { useHistory } from 'react-router-dom'
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
const [name, setName] = useState('')
const [language, setLanguage] = useState('')
const [type, setType] = useState('')
const [free, setFree] = useState('')
const [online, setOnline] = useState('')
const [description, setDescription] = useState('')
const [url, setUrl] = useState('')

const history = useHistory()
const dispatch = useDispatch()


const onFormSubmit = (e) => {
  e.preventDefault()
}
    
const options = {
method: 'POST',
headers: {
  'Content-type': 'application/json'
},
body: JSON.stringify({ name, language, type, free, online, description, url })
}
.then(() => {
  history.push('/resources')
})   


fetch(API_URL('resources'), options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          batch (() => {
            dispatch(resources.actions.setName(data.name))
            dispatch(resources.actions.setLanguage(data.language))
            dispatch(resources.actions.setType(data.type))
            dispatch(resources.actions.setFree(data.free))
            dispatch(resources.actions.setOnline(data.online))
            dispatch(resources.actions.setDescription(data.description))
            dispatch(resources.actions.setUrl(data.url))


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
        <ResourceForm onSubmit={onFormSubmit}>
          <ResourceLabel>
           Resource name
          </ResourceLabel>
          <NameInput
                 id="name"
                  type="text"
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  required />
          <ResourceLabel>
           Language
          </ResourceLabel>
          <ResourceInput
               id='language'
                type="text"
                minLength='4'
                maxLength='140'
                required
                placeholder="What is the language in which the resource is written?..."
                onChange={(e) => setLanguage(e.target.value)}
                value={language}
                />
                <ResourceLabel>
           Type
          </ResourceLabel>
          <ResourceInput
               id='type'
                type="text"
                minLength='4'
                maxLength='140'
                required
                placeholder="What type of resource is this? (School/Event/Meetup/Website/Community etc)"
                onChange={(e) => setType(e.target.value)}
                value={type}
                />
                <ResourceLabel>
           Free
          </ResourceLabel>
          <ResourceInput
               id='free'
                type="text"
                minLength='4'
                maxLength='5'
                required
                placeholder="Is this resource free to use? If yes; enter true. If no; enter false"
                onChange={(e) => setFree(e.target.value)}
                value={free}
                />
                <ResourceLabel>
           Online
          </ResourceLabel>
          <ResourceInput
               id='online'
                type="text"
                minLength='4'
                maxLength='5'
                required
                placeholder="Is this resource online based? If yes; enter true. If no; enter false"
                onChange={(e) => setOnline(e.target.value)}
                value={online}
                />
                <ResourceLabel>
           Description
          </ResourceLabel>
                <ResourceInput
               id='description'
                type="text"
                minLength='5'
                maxLength='300'
                required
                placeholder="Describe the resource with a few sentences."
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                />
                <ResourceLabel>
           URL
          </ResourceLabel>
                <ResourceInput
               id='url'
                type="text"
                minLength='5'
                maxLength='300'
                required
                placeholder="Enter the resource URL"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                />
          </ResourceForm>
          <Button type="submit">Add it!</Button>
          </FormContainer>
        <ResourceFormImage src={women} alt="group of women" />
      </FormWrapper>

)

}

export default NewResourceForm