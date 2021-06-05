import React, { useState } from "react";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import moment from "moment";
import FinderWrapper from "./finder.style";

const Finder = () => {
    const { Moralis, isInitialized } = useMoralis()
    const [logs, setLogs] = useState([])
    const [total, setTotal] = useState(0)
    const [filter, setFilter] = useState('Wow')

    const transactionCollection = "HyperfabricTransaction";

    useEffect(() => {
        runQuery(filter)
    }, [isInitialized]);


    const runQuery = async (filterText) => {

        if (!isInitialized || isEmpty(filterText))
            return

        const query = new Moralis.Query(transactionCollection);
        query.fullText("arguments", filterText)
        query.withCount();

        // Populate first batch
        const response = await query.find();
        response.results.forEach((entry) => addEntry(entry));
        setTotal(response.count);
    }

    const addEntry = (entry) => {
        const fLog= formatLog(entry)
        let list = logs
        list.unshift(fLog)
        setLogs([])
        setLogs(list)
    }

    const formatLog = (entry) => {
        return {
            id: entry.id,
            ...entry.attributes
        }
    }

    const displayLogs = () => {
        let count = 0
        return logs.map((entry) => {
            count += 1
            return (
                <Row key={count}>
                    <Col className="md-1">
                        {`${entry.id.substring(0, 8)}...`}
                    </Col>
                    <Col className="md-2">
                        {moment(entry.createdAt).fromNow()}
                    </Col>
                    <Col className="md-2">
                        {entry.network}
                    </Col>
                    <Col className="md-2">
                        {`${entry.contract.substring(0, 8)}...`}
                    </Col>
                    <Col className="md-1">
                        {entry.status}
                    </Col>
                    <Col className="md-4">
                        {entry.arguments || 'N/A'}
                    </Col>
                </Row>
            ) 
        })
    }

    const onMessageChange = (evt) => {
        setFilter(evt.target.value)
        setLogs([])
        setTotal(0)
    }

    const onAction = (evt) => { 
        if (evt.keyCode === 13) {
            evt.preventDefault()
            runQuery(filter)
        }
    }

    return (
        <FinderWrapper>
            <h1 className="title-log">
                Message search query: <input maxLength={20} placeholder="Search by message text e.g. Wow" onKeyDown={onAction} rows="1" cols="50" value={filter} onChange={onMessageChange}></input> {`(${total})`}
            </h1>
            <Box>
                <Row>
                    <Col className="md-1">
                        <h3>Id</h3>
                    </Col>
                    <Col className="md-2">
                        <h3>Created at</h3>
                    </Col>
                    <Col className="md-2">
                        <h3>Network</h3>
                    </Col>
                    <Col className="md-2">
                        <h3>Contract Target</h3>
                    </Col>
                    <Col className="md-1">
                        <h3>Status</h3>
                    </Col>
                    <Col className="md-4">
                        <h3>Arguments</h3>
                    </Col>
                </Row>
                {displayLogs()}
            </Box>
        </FinderWrapper>
    )
};

export default Finder;