import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.label`
    display: inline-block;
    margin-bottom: .5rem;
`
const Label = ({ children, htmlFor }) => {
    return (
        <LabelWrapper htmlFor={htmlFor}>
            {children}
        </LabelWrapper>
    )
}

export default Label;