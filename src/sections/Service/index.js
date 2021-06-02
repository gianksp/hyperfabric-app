import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import data from "assets/data/service";

import ServiceSectionWrapper from "./service.style";

const Service = () => {
  return (
    <ServiceSectionWrapper id="service">
      <Container>
        <Row>
          <Col className="md-12">
            <Box className="service-item-wrapper">
              <Row>
                {data.services.map((service, index) => (
                  <Col className="lg-3 sm-6 xs-12" key={index}>
                    <Box className="service-item text-center">
                      <Image src={service.icon} alt="cryptik service icon" />
                      <Heading as="h3">{service.title}</Heading>
                      <Text>{service.body}</Text>
                    </Box>
                  </Col>
                ))}
              </Row>
            </Box>
          </Col>
        </Row>
      </Container>
    </ServiceSectionWrapper>
  );
};

export default Service;
