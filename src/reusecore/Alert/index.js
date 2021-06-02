import React from 'react';
import PropTypes from "prop-types";

import AlertWrapper from './alert.style';


const Alert = ({ children, className, ...props }) => {
    const AllClasses = ["alert__wrapper"];
    if (className) {
        AllClasses.push(className)
    };

    return (
        <AlertWrapper className={AllClasses.join(" ")} {...props}>
            {children}
        </AlertWrapper>
    )
}

export default Alert;