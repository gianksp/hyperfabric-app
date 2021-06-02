import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.img`
    width: 100%;
    height: auto;
    display: block;
`


const Image = ({ src, alt, ...props}) => {
    const AllClasses = ["image"];
    if(props.className){
        AllClasses.push(props.className)
    };
    return(
        <ImageWrapper src={src} alt={alt}  {...props} className={AllClasses.join(" ")}/>
    )
}

export default Image;