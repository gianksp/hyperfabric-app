import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const HeadingWrap = styled.h1`
  ${props =>
    props.UpperCase &&
    css({
      textTransform: "uppercase"
    })}
  ${props =>
    props.HeadingColor &&
    css({
      color: props.HeadingColor
    })}
`;

const Heading = ({ children, ...props }) => {
  const AllClasses = ["heading"];
  if (props.className) {
    AllClasses.push(props.className);
  }

  return (
    <HeadingWrap {...props} className={AllClasses.join(" ")}>
      {children}
    </HeadingWrap>
  )
};

Heading.propTypes = {
  children: PropTypes.any.isRequired, //--
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]), 
};

export default Heading;
