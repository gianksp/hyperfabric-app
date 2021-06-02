import React, { useState } from "react";

import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Counter from "reusecore/Counter";

import data from "assets/data/awards";
import DemoSectionWrapper from "./demo.style";
import MessageBox from "./MessageBox";

import ethereumIcon from 'assets/images/ethereum.svg';
import polygonIcon from 'assets/images/polygon.svg';
import binanceIcon from 'assets/images/binance.svg';
// Moralis.initialize(process.env.NEXT_PUBLIC_MORALIS_APP_ID,'');
// Moralis.serverURL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

// Moralis.Web3.authenticate().then(function (user) {
//     console.log(user.get('ethAddress'))
// })
// Moralis.Web3.authenticate().then(function (user) {
//     console.log(user.get('ethAddress'))
// })


const Demo = () => {

    return (
        <DemoSectionWrapper>
        <Box className="awards-section">
            <Container>
            <Row>
                <Col className="md-12">
                <Box className="awards-left-content">
                    <SectionTitle>
                    <SectionBackground>
                        <Heading as="h1">Try it now</Heading>
                    </SectionBackground>
                        <Row>
                            <Col className="md-4 mbox">
                                <MessageBox 
                                    historicalFunction='readFromRopsten'
                                    broadcastFunctions={[
                                        'broadcastToMumbai',
                                        'broadcastToBinance'
                                    ]}
                                    signature='[From Ropsten]'
                                    placeHolder='Your message to others...'
                                    contract={process.env.NEXT_PUBLIC_ROPSTEN}
                                    logo={ethereumIcon}
                                    title='Ethereum (Ropsten)'
                                />
                            </Col>
                            <Col className="md-4  mbox">
                                <MessageBox 
                                    historicalFunction='readFromMumbai'
                                    placeHolder='Your message to others...'
                                    signature='[From Mumbai]'
                                    contract={process.env.NEXT_PUBLIC_MUMBAI}
                                    logo={polygonIcon}
                                    title='Polygon (Mumbai)'
                                    broadcastFunctions={[
                                        'broadcastToRopsten',
                                        'broadcastToBinance'
                                    ]}
                                />
                            </Col>
                            <Col className="md-4 mbox">
                            <MessageBox 
                                historicalFunction='readFromBinance'
                                placeHolder='Your message to others...'
                                signature='[From Binance]'
                                contract={process.env.NEXT_PUBLIC_BNB}
                                logo={binanceIcon}
                                title='Binance (Testnet)'
                                broadcastFunctions={[
                                    'broadcastToRopsten',
                                    'broadcastToMumbai'
                                ]}
                            />
                        </Col>
                        </Row>
                    </SectionTitle>
                </Box>
                </Col>
            </Row>
            </Container>
        </Box>
        <Box className="me">
            <Container>
                <Row>
                    <h1><a href="https://github.com/gianksp" target="_blank">Built by Giancarlo for the Moralis Hackathon</a> </h1>
                </Row>
            </Container>
        </Box>
        </DemoSectionWrapper>
    );
};

export default Demo;
