import React, {useState, useEffect} from "react";
import { FaFire, FaUser, FaHeart } from "react-icons/fa";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Counter from "reusecore/Counter";

import data from "assets/data/awards";
import AwardsSectionWrapper from "./awards.style";
import {useMoralis} from 'react-moralis';
import axios from 'axios'

const Awards = () => {

  const {isInitialized, Moralis} = useMoralis()
  const txState = useState(0)
  const visitState = useState(0)
  global.txState = txState
  global.visitState = visitState
  const [transactions, setTransactions] = global.txState
  const [visits, setVisits] = global.visitState

  const transactionCollection = "HyperfabricTransaction"
  const userCollection = "User"
  const visitsCollection = "Visit"

  useEffect(() => {
      loadSubscribers();
  }, [isInitialized]);

  useEffect(() => {
    addVisit()
  }, [])

  const addVisit = () => {
    const target = `${process.env.NEXT_PUBLIC_MORALIS_REST}/visit`
    axios.post(target, {
        "_ApplicationId": process.env.NEXT_PUBLIC_MORALIS_APP_ID
    })
  }

  const loadSubscribers = async () => {

      if (!isInitialized)
          return

      subscribeTx()
      subscribeVisits()
  }

  const subscribeTx = async () => {
    const queryCount = new Moralis.Query(transactionCollection);
    const count = await queryCount.count();
    setTransactions(count)
  
    // handle events on creation and status update
    const txs = new Moralis.Query(transactionCollection);
    const subscription = await txs.subscribe();
    subscription.on("create", () => increaseTransactions());
    subscription.on("update", () => increaseTransactions());
  }
  
  const subscribeVisits = async () => {
    const queryCount = new Moralis.Query(visitsCollection);
    const count = await queryCount.count();
    setVisits(count)
  
    // handle events on creation and status update
    const vsts = new Moralis.Query(visitsCollection);
    const subscription = await vsts.subscribe();
    subscription.on("create", () => increaseVisits());
  }

  const increaseTransactions = () => {
      const [get, set] = global.txState
      set(get+1)
  }

  return (
    <AwardsSectionWrapper>
      <Box className="awards-section">
        <Container>
          <Row>
            <Col >
              
              <Box className="awards-item-wrapper">
                <Box
                  className={`awards-item active`}
                  key={1}
                >
                  <Text as="span" className="award-icon">
                    {" "}
                    <FaFire/>{" "}
                  </Text>
                  <Box className="counter-text">
                    {" "}
                    <h1 className="numeral">{`${transactions}+`}</h1>{" "}
                    <Text as="span">Transactions</Text>{" "}
                  </Box>
                </Box>
              </Box>

            </Col>

          <Col >
              
          <Box className="awards-item-wrapper">
            <Box
              className={`awards-item active`}
              key={1}
            >
              <Text as="span" className="award-icon">
                {" "}
                <FaHeart/>{" "}
              </Text>
              <Box className="counter-text">
                {" "}
                <h1 className="numeral">{`${visits}+`}</h1>{" "}
                <Text as="span">Page visits</Text>{" "}
              </Box>
            </Box>
          </Box>

        </Col>



          </Row>
        </Container>
      </Box>
    </AwardsSectionWrapper>
  );
};

export default Awards;
