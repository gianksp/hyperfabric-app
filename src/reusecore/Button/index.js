import React from "react";
import PropTypes from "prop-types";

import ButtonWrapper from './button.style';

const Button = ({ children, ...props }) => {
  const AllClasses = ["btn"];
  if (props.className) {
    AllClasses.push(props.className);
  } 

  return (
    <ButtonWrapper {...props} className={AllClasses.join(" ")}>
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.oneOf([ "button", "a", "span", "div" ]) //--
};

export default Button;
