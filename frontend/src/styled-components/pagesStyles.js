import styled from 'styled-components/macro';
import { Link } from "react-router-dom";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 30px;
  margin-top: 60px;
  background-color: rgb(255, 255, 255, 0.3);
  -webkit-box-shadow: 3px 3px 23px 3px rgba(180, 194, 216, 0.5);
  box-shadow: 3px 3px 23px 3px rgba(180, 194, 216, 0.5);
  border-radius: 20px;
`;

export const TextBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
`;

export const Text = styled.p`
font-size: 15px;
color: rgb(65, 87, 122);
padding: 8px;
margin: 0;
`;

export const Title = styled.h1`
font-family: "Roboto Slab", sans-serif;
color: white;
font-size: 25px;
text-align: center;
margin: 0;
padding: 5px;

@media (min-width: 668px) {
  font-size: 45px;
  margin-top: 20px;
  margin-bottom: 10px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  font-size: 30px;
}
`;

export const SubTitle = styled.h2`
  font-family: "Roboto Slab", sans-serif;
  color: white;
  font-size: 20px;
  margin-top: 10px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 30px;

  @media (min-width: 668px) {
    font-size: 30px;
  }
`;

export const Infobox = styled.div`
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

export const Infotext = styled.p`
margin: 0 20px;
text-align: center;
font-size: 20px;
`;

export const Card = styled.div`
background-color: #f4d8cb;
color: #000;
border: 2px solid #98a7b2;
border-radius: 10%;
-webkit-box-shadow: 0 15px 10px #777;
-moz-box-shadow: 0 15px 10px #777;
box-shadow: 0 15px 10px #777;
width: 300px;
margin: 40px;
padding: 20px;
font-size: 18px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`;

export const Cardbox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-left: 10%;
  margin: 20px;
  padding: 15px;
  @media (min-width: 668px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ButtonLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: 130px;
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 80px;
  margin-left: 40px;
  margin-bottom: 10px;
  font-family: "Roboto Slab", sans-serif;
  font-size: 20px;
  background: rgb(63, 177, 181);
  color: rgb(253, 253, 253);
  border: none;
  text-decoration: none;

  &:hover {
    background: rgb(240, 96, 122);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Button = styled(Link)`
box-sizing: border-box;
display: inline-block;
text-align: center;
width: 230px;
height: 50px;
border-radius: 20px;
padding: 10px;
margin-top: 20px;
font-family: "Roboto Slab", sans-serif;
font-size: 20px;
background: rgb(63, 177, 181);
color: white;
border: none;
&:hover {
  background: rgb(212, 9, 100);
  color: white;
  transform: scale(1.1);
  cursor: pointer;
}
`;

export const BoldText = styled.p`
margin: 10px;
padding: 5px;
font-color: black;
font-weight: bold;
`;