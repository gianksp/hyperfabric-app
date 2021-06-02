import styled, { css } from "styled-components";

const InputWrapper = styled.div`
  input {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border: 1px solid transparent;
    border-radius: .25rem;
    ${props => props.BorderColor && css`  border-color: red `}
  }

  
`;

export default InputWrapper;
