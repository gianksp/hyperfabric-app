import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const RadioWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    margin: 1rem; 
    input[type="radio"]{
        position: static;
        margin-top: 0;
        margin-right: .3125rem;
        margin-left: 0;
    }
`

const Radio = ({ id, className, name, value, ...props }) => {
    const AllClasses = ['radio__wrapper'];
    if (className) {
        AllClasses.push(className)
    }
    return (
        <RadioWrapper >
            <input type="radio" id={id} name={name} value={value}/>
        </RadioWrapper>
    )
}

export default Radio;