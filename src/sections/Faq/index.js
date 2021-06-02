import React from "react";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";

import { Container, Row, Col } from "reusecore/Layout"; 

import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "reusecore/Accordion";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import faqImage from "assets/images/faq-image.png";

import data from "assets/data/faq";

import "react-tabs/style/react-tabs.css";
import FaqSectionWrapper from "./faq.style";

const Faq = () => {
  return (
    <FaqSectionWrapper id="faq">
      <Container>
        <Row>
          <Col className="md-6 xs-12">
            <SectionTitle>
              <SectionBackground>
                <Heading>Frequently asked questions</Heading>
              </SectionBackground>
              <Text>
                Attention in when in just something bread not hundred well, muff
                value emerge on the known officers.
              </Text>
            </SectionTitle>
          </Col>
        </Row>

        <Row>
          <Col className="md-6 xs-12">
            <Box className="faq-content">
              <Tabs>
                <TabList>
                  {data.faq.map((tab, i) => (
                    <Tab key={i}>{tab.name}</Tab>
                  ))}
                </TabList>

                {data.faq.map((tabItem, index) => (
                  <TabPanel key={index}>
                    <Accordion>
                      {tabItem.items.map((item, index) => (
                        <AccordionItem key={index}>
                          <AccordionTitle>
                            <Heading as="h4">{item.title}</Heading>
                            <IconWrapper>
                              <OpenIcon>
                                <IoIosArrowForward />
                              </OpenIcon>
                              <CloseIcon>
                                <IoIosArrowDown />
                              </CloseIcon>
                            </IconWrapper>
                          </AccordionTitle>
                          <AccordionBody>
                            <Text> {item.body}</Text>
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabPanel>
                ))}
              </Tabs>
            </Box>
          </Col>
          <Col className="md-5 offset-md-1 offset-xs-0 xs-12">
            <Image
              src={faqImage}
              alt="cryptik faq image"
              className="faq-image"
            />
          </Col>
        </Row>
      </Container>
    </FaqSectionWrapper>
  );
};

export default Faq;
