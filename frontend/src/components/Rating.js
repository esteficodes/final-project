import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import styled from 'styled-components'


const RatingDiv = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const Stars = styled.div` 
  display: flex;
  flex-direction: row;
`;
const TextArea = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const Button = styled.button`
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    width: 150px;
    height: 50px;
    border-radius: 20px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: 'Roboto Slab', sans-serif;
    font-size: 20px;
    background: rgb(63,177,181);
    color: rgb(243,225,226);
    border: none;
    &:hover {
      background: orange;
      transform: scale(1.1);
      cursor: pointer
    }
`;
const DetailsLabel = styled.label`
    display: flex;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: white;
    font-weight: 500;
    font-size: 25px;
    border-radius: 20px;
    margin: 10px;
  `;
const DetailsInput = styled.input`
font-family: 'Roboto Mono', monospace;
font-weight: 500;
margin-top: 15px;
padding: 10px 10px 30px;
overflow-wrap: break-word;
line-break: loose;
`;
const DetailsForm = styled.form`
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
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(212,9,100);
  border: 2px solid #98a7b2;
  border-radius: 10%;
  -webkit-box-shadow: 0 15px 10px #777;
  -moz-box-shadow: 0 15px 10px #777;
  box-shadow: 0 15px 10px #777;
  width: 300px;
  margin: 40px;
`;
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const Rating = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
  
    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
  
  
    return (
    <ReviewContainer>
      <RatingDiv>
        <h2>Rate this Resource</h2>
        <Stars>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </Stars>
        <TextArea>
        Have you tried this Resource? Tell us about your experience!
        </TextArea>
        <DetailsLabel>
        Any comments?
      </DetailsLabel>
        <DetailsForm>
          <DetailsInput
               id='newResource'
                type="text"
                minLength='5'
                maxLength='140'
                required
                placeholder="Leave a comment here..."
 //               value={review}
                />
         </DetailsForm>
  
        <Button>
          Submit
        </Button>
        
      </RatingDiv>
      </ReviewContainer>
    );
  };
  
  export default Rating