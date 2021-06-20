import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import styled from 'styled-components'


const RatingDiv = styled.div` 
  display: "flex";
  flex-direction: "column";
  align-items: "center";
`;

const Stars = styled.div` 
  display: "flex";
  flex-direction: "row";
`;
const TextArea = styled.div` 
  display: "flex";
  flex-direction: "column";
  align-items: "center";
`;
const Button = styled.button` 
  display: "flex";
  flex-direction: "column";
  align-items: "center";
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
  
        <Button>
          Submit
        </Button>
        
      </RatingDiv>
    );
  };
  
  export default Rating