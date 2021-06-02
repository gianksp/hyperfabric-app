import React from 'react';
import Link from 'next/link';

import { Container, Row, Col } from 'reusecore/Layout'
import Box from 'reusecore/Box';
import Badge from 'reusecore/Badge';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Image from 'reusecore/Image';

import BannerImage from 'assets/images/banners/banner-one/banner-one-thumb.svg';

import particleTopLeft from 'assets/images/particles/banner/particle-top-left.png';
import particleUnderLogo from 'assets/images/particles/banner/particle-under-logo.png';
import prticleTopRight from 'assets/images/particles/banner/prticle-top-right.png';
import particleBottomLeft from 'assets/images/particles/banner/particle-bottom-left.png';
import particleBottomRight from 'assets/images/particles/banner/particle-bottom-right.png';

import BannerWrapper from './banner.style';

const Banner = () => {
    return (
        <BannerWrapper> 
            <img src={particleTopLeft} className="section__particle top-left" alt="cryptik particles"/>
            <img src={particleUnderLogo} className="section__particle two" alt="cryptik particles"/>
            <img src={prticleTopRight} className="section__particle top-right" alt="cryptik particles"/>
            <img src={particleBottomLeft} className="section__particle bottom-left" alt="cryptik particles"/>
            <img src={particleBottomRight} className="section__particle bottom-right" alt="cryptik particles"/>
                <Container>
                    <Row>
                        <Col className="lg-8 xs-12">
                            <Box className="banner-content">
                                <Badge className="offer-text">14 days, a huge of free trial</Badge>
                                <Heading as="h1">
                                    Easiest way to transfer, <br/> sell & exchange crypto coins
                            </Heading>
                            <Text>
                                The highly the not having with lively. Our up with ran go her <br/>
                                it gloomy the back, though however projected not for six with then, <br/> trusted as concepts belt.
                            </Text>
                            <Box className="banner-btn">
                                <Link href="#"><a className="btn btn-fill">Get in touch</a></Link>
                                <Link href="#"><a className="btn">white paper</a></Link>
                            </Box>
                            </Box>
                        </Col>
                    </Row>
                    <img src={BannerImage} className="banner__thumb" alt="cryptik banner thumb" />
                </Container>  
        </BannerWrapper>
    )
}

export default Banner;