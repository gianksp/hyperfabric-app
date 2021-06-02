import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";



const BoxWrapper = styled.div``;

const Box = ({ children, ...props }) => {
  const AllClasses = ["box"];
  if (props.className) {
    AllClasses.push(props.className);
  }

  return (
    <BoxWrapper {...props} className={AllClasses.join(" ")}>
      {children}
    </BoxWrapper>
  );
};

Box.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.oneOf([
    "div",
    "section",
    "article",
    "header",
    "footer",
    "address",
    "nav",
    "main"
  ])
};

export default Box;
