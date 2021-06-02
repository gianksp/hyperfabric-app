import React from "react";
import PropTypes from "prop-types";
import ColWrapper from "./col.style";

const Col = ({ children, ...props }) => {
  const AllClasses = ["col"];
  if (props.className) {
    AllClasses.push(props.className);
  }

  return (
    <ColWrapper {...props} className={AllClasses.join(" ")}>
      {children}
    </ColWrapper>
  );
};
export default Col;

Col.propTypes = {
  children: PropTypes.any.isRequired
};
