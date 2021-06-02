import React from "react";
import PropTypes from "prop-types";

import InputWrapper from "./input.style";

const Input = ({
//   type,
  placeholder,
  name,
  onChange,
  onBulr,
  onFocus,
  ...props
}) => {
  const AllClasses = ["input__wrapper"];
  if (props.className) {
    AllClasses.push(props.className);
  }

  return (
    <InputWrapper className={AllClasses.join(" ")}>
      <input placeholder={placeholder} name={name} {...props}/> 
    </InputWrapper>
  );
};

// Input.propTypes = {
//     type: PropTypes.oneOf['text', 'email', 'password', 'number'],
//     placeholder: PropTypes.string,
//     name: PropTypes.string,
//     onChange: PropTypes.func,
//     onBulr: PropTypes.func,
//     onFocus: PropTypes.func 
// }

// Input.defaultProps = {
//     type: 'text',   
// }
 
export default Input;