import React from 'react';
import PropTypes from "prop-types";

import { SelectWrapper, OptionWrapper } from './select.style';

export const Select = ({ children, id, className, ...props }) => {
    const AllClasses = ["select__wrapper"]
    if (className) {
        AllClasses.push(className)
    }
    return (
        <SelectWrapper 
            id={id}
            className={AllClasses.join(" ")}
            {...props}
        >
            {children}
        </SelectWrapper>
    )
}

export const Option = ({ children, value, selected }) => {
    return (
        <OptionWrapper value={value}>
            {children}
        </OptionWrapper>
    )
}

Select.propTypes = {
    children: PropTypes.any.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
}
Option.propTypes = {
    children: PropTypes.any.isRequired,
    selected: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}


