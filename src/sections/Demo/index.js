import React, { useState } from "react";

import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Text from "reusecore/Text";
import Heading from "reusecore/Heading";
import DemoSectionWrapper from "./demo.style";
import MessageBox from "./MessageBox";
import CounterBox from "./CounterBox";
import ethereumIcon from 'assets/images/ethereum.svg';
import polygonIcon from 'assets/images/polygon.svg';
import binanceIcon from 'assets/images/binance.svg';
import elrondIcon from 'assets/images/elrond.svg';
import teamImage from 'assets/images/team.jpeg';
import linkedinImage from 'assets/images/linkedin.svg';
import Video from './Video';
import Logs from './Logs';
import Finder from './Finder';

const Demo = () => {

    const redir = () => {
        window.open('https://github.com/gianksp/hyperfabric-app', '_blank');
    }
    return (
            <DemoSectionWrapper>
            <Box className="awards-section">
                <Container>
                <Row>
                    <Col className="md-12">
                    <Box className="awards-left-content">
                        <SectionTitle>
                        <SectionBackground>
                            <Row>
                                <Col className="md-4">
                                    <Heading as="h1">Try it now</Heading>
                                </Col>
                                <Col className="md-8 mbox">
                                    <CounterBox 
                                        historicalFunction='readFromElrond'
                                        contract={process.env.NEXT_PUBLIC_ELROND}
                                        sourceCode='https://docs.elrond.com/developers/tutorials/counter/'
                                        logo={elrondIcon}
                                        title='Elrond (Testnet)'
                                    />
                                </Col>
                            </Row>
                        </SectionBackground>
                            <Row>
                                <Col className="md-4 mbox">
                                    <MessageBox 
                                        key="ropsten"
                                        historicalFunction='readFromRopsten'
                                        broadcastFunctions={[
                                            'broadcastToMumbai',
                                            'broadcastToBinance',
                                            'broadcastToElrond',
                                        ]}
                                        signature='[From Ropsten]'
                                        placeHolder='Your message to others...'
                                        sourceCode={process.env.NEXT_PUBLIC_SOURCE_CONTRACT}
                                        contract={process.env.NEXT_PUBLIC_ROPSTEN}
                                        logo={ethereumIcon}
                                        title='Ethereum (Ropsten)'
                                    />
                                </Col>
                                <Col className="md-4  mbox">
                                    <MessageBox 
                                        key="mumbai"
                                        historicalFunction='readFromMumbai'
                                        placeHolder='Your message to others...'
                                        signature='[From Mumbai]'
                                        sourceCode={process.env.NEXT_PUBLIC_SOURCE_CONTRACT}
                                        contract={process.env.NEXT_PUBLIC_MUMBAI}
                                        logo={polygonIcon}
                                        title='Polygon (Mumbai)'
                                        broadcastFunctions={[
                                            'broadcastToRopsten',
                                            'broadcastToBinance',
                                            'broadcastToElrond',
                                        ]}
                                    />
                                </Col>
                                <Col className="md-4 mbox">
                                <MessageBox 
                                    key="bnb"
                                    historicalFunction='readFromBinance'
                                    placeHolder='Your message to others...'
                                    signature='[From Binance]'
                                    sourceCode={process.env.NEXT_PUBLIC_SOURCE_CONTRACT}
                                    contract={process.env.NEXT_PUBLIC_BNB}
                                    logo={binanceIcon}
                                    title='Binance (Testnet)'
                                    broadcastFunctions={[
                                        'broadcastToRopsten',
                                        'broadcastToMumbai',
                                        'broadcastToElrond',
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
                    <SectionBackground>
                        <Row>
                            <Col className="md-3">
                                <Heading as="h1">Realtime Logs</Heading>
                            </Col>
                        </Row>
                    </SectionBackground>
                    <Logs operationType='broadcastTo' title='Broadcasts'/>
                    <Logs operationType='readFrom' title='Reads'/>
                </Container>
            </Box>
            <Box className="me">
            <Container>
                <SectionBackground>
                    <Row>
                        <Col className="md-4">
                            <Heading as="h1">Message Finder</Heading>
                        </Col>
                    </Row>
                </SectionBackground>
                    <Finder />
                </Container>
            </Box>
            <Box className="me">
                <Container>
                    <SectionBackground>
                        <Row>
                            <Col className="md-4">
                                <Heading as="h1">How does it work?</Heading>
                            </Col>
                        </Row>
                    </SectionBackground>
                    <Video embedId='7NCn_GQqpAU'/>
                </Container>
            </Box>
            <Box className="me">
                <Container>
                    <SectionBackground>
                        <Row>
                            <Col className="md-2">
                                <Heading as="h1">Team</Heading>
                            </Col>
                        </Row>
                    </SectionBackground>
                    <Row onClick={redir}>
                        <Col>
                            <img src={teamImage} className="team" height={320}/>
                        </Col>
                        <Col className="lefty">
                            <h1>Built with love by</h1>
                            <Box className="about-list">
                                <Text as="span"><a href="https://www.linkedin.com/in/giancarlo-sanchez-62b13849/">Giancarlo Sanchez <img src={linkedinImage} height={24}/></a></Text>
                                <Text as="span"><a href="https://www.linkedin.com/in/karen-layrisse-86526955/">Karen Layrisse <img src={linkedinImage} height={24}/></a></Text>
                                <Text as="span">Teebu</Text>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </Box>
            </DemoSectionWrapper>
    );
};

export default Demo;
