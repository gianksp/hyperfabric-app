import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Badge from "reusecore/Badge";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import Input from "reusecore/Form/Input";
import Button from "reusecore/Button";

import DiagramImage from "assets/images/diagram.svg";
import BannerImage from "assets/images/banners/banner-three/cryptik-banner-three-thumb.svg";
import particleTopLeft from "assets/images/particles/banner/particle-top-left.png";
import particleUnderLogo from "assets/images/particles/banner/particle-under-logo.png";
import prticleTopRight from "assets/images/particles/banner/prticle-top-right.png";
import particleBottomLeft from "assets/images/particles/banner/particle-bottom-left.png";
import particleBottomRight from "assets/images/particles/banner/particle-bottom-right.png";

import BannerWrapper from "./banner.style";
import { times } from "lodash";

const BannerThree = () => {
  return (
    <BannerWrapper className="paco">
      <Box className="banner-three-wrap">
        <img
          src={particleTopLeft}
          className="section__particle top-left"
          alt="cryptik particles"
        />
        <img
          src={particleUnderLogo}
          className="section__particle two"
          alt="cryptik particles"
        />
        <img
          src={prticleTopRight}
          className="section__particle top-right"
          alt="cryptik particles"
        />
        <img
          src={particleBottomLeft}
          className="section__particle bottom-left"
          alt="cryptik particles"
        />
        <img
          src={particleBottomRight}
          className="section__particle bottom-right"
          alt="cryptik particles"
        />
        <Container>
          <img
            className="banner__thumb"
            alt="cryptik banner thumb"
            src={BannerImage}
          />
          <Row>
            <Col className="lg-8 md-10 xs-12">
              <Box className="banner-content">
                <Heading as="h1">
                  Realtime Blockchain Fabric <br /> Interoperability
                </Heading>
                <Text>
                  Hyperfabric makes possible the communication across smart contracts {" "}
                  <br />
                  in different fabrics and networks. Powered by Moralis, this cross chain
                  <br />
                  gateway supports any type of interaction by exposing a REST gateway 
                  <br />
                  interface to any smart contract method in any technology.
                  <br />
                </Text>
                <Box className="about-list">
                  <Text as="span">Communicate smart contracts across network fabrics</Text>
                  <Text as="span">REST access from anywhere any smart contract</Text>
                  <Text as="span">Real time event driven updates across any network technology</Text>
                </Box>
              </Box>
              <img
                className="banner__thumb banner__thumbsmall"
                alt="cryptik banner thumb"
                src={DiagramImage}
              />
            </Col>
          </Row>
        </Container>
      </Box>
    </BannerWrapper>
  );
};

export default BannerThree;
