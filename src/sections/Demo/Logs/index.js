import React, { useState } from "react";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import moment from "moment";
import LogsWrapper from "./logs.style";

const LIMIT = 50
const Logs = ({operationType, title}) => {
    const { Moralis, isInitialized } = useMoralis()
    const [logs, setLogs] = useState([])
    const [total, setTotal] = useState(0)

    const transactionCollection = "HyperfabricTransaction";

    useEffect(() => {
        loadLogs();
        setInterval(() => {
            updateCount()
        }, 1000)
    }, [isInitialized]);


    const loadLogs = async () => {

        if (!isInitialized)
            return

        const query = new Moralis.Query(transactionCollection);
        query.equalTo("operation", operationType);

        // Populate first batch
        const response = await query.limit(LIMIT).find();
        response.forEach((entry) => addEntry(entry));
    
        // subscribe for real-time updates
        const subscription = await query.subscribe();

        // handle events on creation and status update
        subscription.on("create", (entry) => addEntry(entry));
        subscription.on("update", (entry) => addEntry(entry));
    }

    const updateCount = async () => {
        if (!isInitialized)
            return
        // Count
        const queryCount = new Moralis.Query(transactionCollection);
        queryCount.equalTo("operation", operationType);
        const count = await queryCount.count();
        setTotal(count);
    }

    const addEntry = (entry) => {
        const fLog= formatLog(entry)
        let list = logs
        list.unshift(fLog)
        list.length = LIMIT
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
                <Row key={count} className={entry.status}>
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
                        <strong>{entry.status}</strong>
                    </Col>
                    <Col className="md-4">
                        {entry.arguments || 'N/A'}
                    </Col>
                </Row>
            ) 
        })
    }

    return (
        <LogsWrapper>
            <h1 className="title-log">{`${title} (${total})`}</h1>
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
        </LogsWrapper>
    )
};

export default Logs;