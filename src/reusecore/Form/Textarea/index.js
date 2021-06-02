import React from 'react';
import PropTypes from "prop-types";

import TextareaWrapper from './textarea.style';


const Textarea = ({ children, id, placeholder, name, className, ...props }) => {
    const AllClasses = ["textarea__wrapper"]
    if (className) {
        AllClasses.push(className)
    }
    return (
        <TextareaWrapper className={AllClasses.join(" ")} >
            <textarea
                {...props}
                id={id}
                name={name}
                placeholder={placeholder}
            />
        </TextareaWrapper>
    )
}

export default Textarea;


Textarea.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onBulr: PropTypes.func,
    onFocus: PropTypes.func
}