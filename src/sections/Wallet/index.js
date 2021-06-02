import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import Counter from "reusecore/Counter";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";

import walletImage from "assets/images/wallet-image.svg";
import SectionParticle from "assets/images/particles/crypto-managment-wallet.svg";

import data from "assets/data/wallet";
import WalletSectionWrapper from "./wallet.style";

const Wallet = () => {
  return (
    <WalletSectionWrapper>
      <Container>
        <img
          src={SectionParticle}
          className="section__particle"
          alt="cryptik"
        />
        <Row>
          <Col className="lg-5 md-4 xs-12">
            <Box className="wallet-image">
              <Image src={walletImage} alt="cryptik wallet image" />
            </Box>
          </Col>
          <Col className="lg-6 offset-lg-1 md-8 xs-12">
            <Box className="wallet-left-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading> Crypto management wallet </Heading>
                </SectionBackground>
                <Text>
                  Attention in when in just something bread not hundred well,
                  muff value emerge on the known officers. A parameters phase
                  orthographic the can differentiates far catch he warned a they
                  but country. Times, cache in and what but the that go
                  facilitate far were house.
                </Text>
              </SectionTitle>

              <Box className="wallet-info">
                {data.wallet.map((item, index) => (
                  <Box className="counter-item" key={index}>
                    <Counter end={item.count} suffix={item.suffixText} />
                    <Text>{item.body}</Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </WalletSectionWrapper>
  );
};

export default Wallet;
