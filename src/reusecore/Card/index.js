import React from 'react';
import PropTypes from "prop-types";

import { CardWrapper, CardBodyWrapper } from './card.style';


export const Card = ({ children, className, ...props }) => {
    const AllClasses = ["card__wrapper"];
    if (className) {
        AllClasses.push(className)
    };

    return (
        <CardWrapper className={AllClasses.join(" ")}>
            {children}
        </CardWrapper>
    )
}

export const CardBody = ({ children, className, ...props }) => {
    const AllClasses = ["card__body__wrapper"];
    if (className) {
        AllClasses.push(className)
    };

    return (
        <CardBodyWrapper className={AllClasses.join(" ")}>
            {children}
        </CardBodyWrapper>
    )
}
