import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
       <a href="/Home">
        <span role="img" aria-label="about wit">&#127968;</span>
        Home
      </a>
      <a href="/About">
        <span role="img" aria-label="about wit">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About WIT
      </a>
      <a href="/ForFree">
        <span role="img" aria-label="free resources">&#x1f4b8;</span>
        Free resources
        </a>
      <a href="/Contact">
        <span role="img" aria-label="get in touch">&#x1f4e9;</span>
        Get in touch
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;