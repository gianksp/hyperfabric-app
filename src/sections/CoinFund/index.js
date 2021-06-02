import React from "react";
import Link from "next/link";
import CountdownTimer from "react-component-countdown-timer";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";

import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa";

import CoinFundWrapper from "./coinFund.style";

const CoinFund = () => {
  const settings = { 
    count: 5432560,
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Seconds",
    id: "countdownwrap"
  };

  return (
    <CoinFundWrapper id="token">
      <Container>
        <Row>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
              <SectionTitle>
                <SectionBackground>
                  <Heading>
                    Powering Data for the new equity blockchain.
                  </Heading>
                </SectionBackground>
                <Text>
                  The highly the not having with lively. Our up with ran go her
                  it gloomy the back, though however projected not for six with
                  then, trusted as concepts belt.
                </Text>
              </SectionTitle>

              <Box className="btn-wrapper">
                <Link href="#">
                  <a className="btn btn-fill">Buy Token</a>
                </Link>
              </Box>
            </Box>
          </Col>
          <Col className="lg-6 md-12 countdown-wrap">
            <Box className="countdown-wrapper">
              <Text> Last moment to grab the token </Text>
              <CountdownTimer {...settings} />
            </Box>
            <Box className="progressbar-wrapper">
              <Box className="progressbar">
                <Text as="span">$5,097</Text>
              </Box>
              <Text as="span">$11,931</Text>
            </Box>

            <Box className="payment-getway">
              <Text as="span">
                {" "}
                <FaBitcoin />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcMastercard />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcVisa />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcDiscover />{" "}
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </CoinFundWrapper>
  );
};

export default CoinFund;
