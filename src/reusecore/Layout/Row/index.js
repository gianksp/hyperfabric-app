import React from "react";
import PropTypes from "prop-types";
import RowWrapper from "./row.style";

const Row = ({ children, ...props }) => {
  const AllClasses = ["row"];
  if (props.className) {
    AllClasses.push(props.className);
  }

  return (
    <RowWrapper {...props} className={AllClasses.join(" ")}>
      {children}
    </RowWrapper>
  );
};

export default Row;

Row.propTypes = {
  children: PropTypes.any.isRequired
};
