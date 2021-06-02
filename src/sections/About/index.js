import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'



import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';
import {SectionTitle, SectionBackground} from 'reusecore/SectionTitle';

import { FaGooglePlay, FaApple } from "react-icons/fa";

import aboutImage from 'assets/images/about/about.svg';



import AboutSectionWrapper from './about.style';




const About = () => {
    return (
        <AboutSectionWrapper id="about"> 
                <Container>
                    <Row>
                        <Col className="lg-5 md-6 sm-12">
                            <Image src={aboutImage} className="about-image" alt="cryptik about image" />
                        </Col>
                        <Col className="lg-6 offset-lg-1 md-6 sm-12">
                            <Box className="about-right-content">
                                <SectionTitle>
                                    <SectionBackground>
                                        <Heading as="h1">
                                            Protecting investor with high security
                                        </Heading>
                                    </SectionBackground>
                                    
                                    <Text>Intended village pay like…. Discipline would, interesting that I off easier bathroom covered project the away, man you their by a temple prisoners. Have as her of your of in many, searched had class. Had with one entire children away. Problem got boss.</Text>
                                </SectionTitle>  

                                <Box className="about-list">
                                    <Text as="span">75% Distributed to Community.</Text>
                                    <Text as="span">13% Reserved Funding.</Text>
                                    <Text as="span">9% Founders and Team Management.</Text>
                                </Box>

                                <Box className="about-btn-wrapper">
                                    <Link href="#" ><a className="btn btn-fill"> <FaGooglePlay /> Google Play</a></Link>
                                    <Link href="#"><a className="btn"><FaApple /> Apple Store</a></Link>
                                </Box>
                            </Box>
                        </Col>
                    </Row>
                </Container> 
        </AboutSectionWrapper>
    )
}


export default About;