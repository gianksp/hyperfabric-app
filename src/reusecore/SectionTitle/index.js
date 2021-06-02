import React from 'react';

import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Badge from 'reusecore/Badge';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';


import {SectionTitleWrapper, SectionBgWrapper} from './sectionTitle.style'



export const SectionTitle = ({children, ...props}) => {

    const AllClasses = ["title__wrapper"];
    if (props.className) {
        AllClasses.push(props.className);
    }

    return(
        <SectionTitleWrapper {...props} className={AllClasses.join(" ")}>
            {children}
        </SectionTitleWrapper>
    )
}

export const SectionBackground = ({children}) => {
    return(
        <SectionBgWrapper>
            {children}
        </SectionBgWrapper>
    )
}
