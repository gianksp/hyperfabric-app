import React from "react";
import PropTypes from "prop-types";
import ContainerWrapper from "./container.style";

const Container = ({ children, ...props }) => {
  const AllClasses = ["container"];
  if (props.className) {
    AllClasses.push(props.className);
  }

  return (
    <ContainerWrapper {...props} className={AllClasses.join(" ")}>
      {children}
    </ContainerWrapper>
  );
};
export default Container;

Container.propTypes = {
  children: PropTypes.any.isRequired
};
