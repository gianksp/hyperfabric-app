import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const TextWrapper = styled.p`
  margin-top: 0;
  margin-bottom: 1rem; 
  ${props =>
    props.FontSize &&
    css`
      font-size: ${props.FontSize};
    `}
  ${props =>
    props.TextColor &&
    css`
      color: ${props.TextColor};
    `}
`;

const Text = ({ children, ...props }) => {
  const AllClasses = ["text"];
  if (props.className) {
    AllClasses.push(props.className);
  }
  return (
    <TextWrapper {...props} className={AllClasses.join(" ")}>
      {children}
    </TextWrapper>
  );
};
export default Text;

Text.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.oneOf(["p", "span", "strong", "em"]),  
};

Text.defaultProps = {
  as: "p"
};
