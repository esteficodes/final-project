import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/Home">
        <span role="img" aria-label="about wit">
          &#127968;
        </span>
        Home
      </a>
      <a href="/About">
        <span role="img" aria-label="about wit">
          &#128105;&#8205;&#128187;
        </span>
        About WIT
      </a>
      <a href="/Contact">
        <span role="img" aria-label="get in touch">
          &#x1f4e9;
        </span>
        Get in touch
      </a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
