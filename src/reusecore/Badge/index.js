import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const BadgeWrapper = styled.div`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${props =>
    props.textColor &&
    css`
      color: ${props.textColor};
    `}
  ${props =>
    props.bg &&
    css`
      background-color: ${props.bg};
    `};
  :hover {
    opacity: 0.8;
  }
`;

const Badge = ({ children, ...props }) => {
  return <BadgeWrapper {...props}>{children}</BadgeWrapper>;
};

export default Badge;

Badge.propTypes = {
  children: PropTypes.any.isRequired,
  textColor: PropTypes.string,
  bg: PropTypes.string
};
