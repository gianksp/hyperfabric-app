import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';


const RangeWrapper = styled.div`
    input[type="range"] {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        display: block;
        width: 100%; 
        border: 1px solid #ced4da;
        resize: inherit;
        border-radius: 4px;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; 
    }
`


const RangeSlider = ({ children, id, className, defaultValue, ...props }) => {
    const AllClasses = ['range__slider__wrapper'];
    if (className) {
        AllClasses.push(className)
    }

    return (
        <RangeWrapper className={AllClasses.join(" ")}>
            <input type="range" id={id} defaultValue={defaultValue} {...props} />
        </RangeWrapper>
    )
}

RangeSlider.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}

export default RangeSlider;