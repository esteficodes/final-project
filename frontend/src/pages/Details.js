import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import resources from "reducers/resources";
import styled from 'styled-components'

const Card = styled.div`
background-color: #f4d8cb;
color: #000;
border: 2px solid #98a7b2;
border-radius: 25%;
-webkit-box-shadow: 0 15px 10px #777;
-moz-box-shadow: 0 15px 10px #777;
box-shadow: 0 15px 10px #777;
width: 300px;;
margin: 40px;
padding: 20px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 500px;
`;

const Infobox = styled.div`
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

const Text = styled.text`
margin: 5px;
padding: 5px;
`

const Container = styled.div`
margin: 10px;
width: auto;
`


 export const Details = () => {
  const { _id } = useParams()
  const [details, setDetails] = useState({})

  useEffect(() => {
    fetch(
      `http://localhost:8080/resources/${_id}`
    )
      .then((response) => response.json())
      .then((json) => setDetails(json))
  }, [_id])

  return (
    <>
      <Card>
        
          <Link to="/">
            <span>&#x2B05;</span>
            <span>BACK</span>
          </Link>

          <Infobox />
            
            <Container>
              <h1>
                {resources.name}
              </h1>
              <Text>{resources.description}</Text>
              <Text> <a href={details.url}>Here you can explore the resource:<span role="img" aria-label="computer"> 👩🏻‍💻 </span></a></Text>
            </Container>
    
      </Card>
    </>
  )
}