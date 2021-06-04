import React, { useState } from "react";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import CounterBoxWrapper from "./counterBox.style";
import Link from "next/link";
import { useEffect } from "react";
import isEmpty from 'lodash/isEmpty';
import axios from 'axios'
const CounterBox = ({
    historicalFunction,
    contract,
    logo,
    title,
}) => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        loadHistory();
        setInterval(() => {
            loadHistory();
        }, 4000);
    }, [])

    const loadHistory = () => {
        axios.post(`${process.env.NEXT_PUBLIC_MORALIS_REST}/${historicalFunction}`, {
            "_ApplicationId": process.env.NEXT_PUBLIC_MORALIS_APP_ID
        })
        .then(result => {
            setCount(result.data.result.data[0].number)
        })
    }

    return (
        <CounterBoxWrapper id="demo-box">
            <Box>
                <Row>
                    <Col>
                        <img src={logo}/>
                    </Col>
                    <Col>
                        <Row>
                            <h2>{title}</h2>
                        </Row>
                        <Row className="clink">
                            <a href={contract} target="_blank">View contract</a>
                            <a className="hyperlink" href={`${process.env.NEXT_PUBLIC_MORALIS_REST}/${historicalFunction}?_ApplicationId=${process.env.NEXT_PUBLIC_MORALIS_APP_ID}`} target="_blank">Hyperlink</a>
                        </Row>
                    </Col>
                    <Col>
                            <p className="c-title">Total Messages</p>
                            <h1 className="counter">{count}</h1>
                    </Col>
                </Row>

            </Box>
        </CounterBoxWrapper>
    );
};

export default CounterBox;
