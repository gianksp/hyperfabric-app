import React, { useState } from "react";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import MessageBoxWrapper from "./messageBox.style";
import Link from "next/link";
import { useEffect } from "react";
import isEmpty from 'lodash/isEmpty';

const MessageBox = ({
    historicalFunction,
    broadcastFunctions = [],
    placeHolder,
    contract,
    logo,
    title,
    signature,
}) => {

    const [message, setMessage] = useState()
    const [history = [], setHistory] = useState([])
    const [pending, setPending] = useState()
    const [alert, setAlert] = useState()
    const [sent, setSent] = useState([])

    const onMessageChange = (evt) => {
        // if (isMessageEmpty())
        //     setEmptyAlert()
        // else {
        //     setAlert()
        // }

        setMessage(evt.target.value)
    }

    const onAction = (evt) => { 
        if (evt.keyCode === 13) {
            evt.preventDefault()
            const msg = message
            setMessage(undefined)
            setPending(`Message: "${msg}" was sent!`)
            broadcast(msg)
            evt.target.value = '';
        }
    }

    useEffect(() => {
        loadHistory();
        // setInterval(() => {
        //     loadHistory();
        // }, 4000);
    }, [])

    const isMessageEmpty = () => {
        return !message || isEmpty(message.trim())
    }

    const setEmptyAlert = () => {
        setAlert('Message cannot be empty')
    }
    
    const broadcast = (msg) => {
        console.log('message is '+typeof(msg))
        if (isMessageEmpty()) {
            setEmptyAlert()
            return
        }
        setAlert()

        broadcastFunctions.forEach((fn) => {
            const finalMessage = `${signature} ${msg.trim()}`
            const target = `${process.env.NEXT_PUBLIC_MORALIS}&func=${fn}&message=${finalMessage}`
            fetch(target).then(response => response.json()).then((data) => {
                if (!isEmpty(data.result)) { 
                    let tx = data.result
                    tx.destination = fn
                    let newList = sent
                    newList.push(tx)
                    console.log(newList)
                    setSent(newList)
                    setPending(`Message processed for ${tx.destination}`)
                } else {
                    console.log(target)
                    console.log(data)
                }
            });
        })
    }

    const loadHistory = () => {
        const target = `${process.env.NEXT_PUBLIC_MORALIS}&func=${historicalFunction}`
        console.log(target)
        fetch(target).then(response => response.json()).then(data => {
            if (!isEmpty(data.result))
                setHistory(data.result)
            else {
                console.log(target)
                console.log(data)
            }
        });
    }

    const displayHistoryItems = () => {
        let items = []
        history.forEach((entry) => {
            items.push((
                <p className="from-them">
                    {entry}
                </p>
            ))
        })
        return items.reverse()
    }

    const displayHistory = (
        <div className="imessage">
            <h3 className="min">Messages in this contract</h3>
            {displayHistoryItems()}
        </div>
    )

    const getExplorerPath = (func, txHash) =>{
        switch(func) {
            case 'broadcastToMumbai':   
                return `https://explorer-mumbai.maticvigil.com/tx/${txHash}/internal-transactions`
            case 'broadcastToKovan':
                return `https://kovan.etherscan.io/tx/${txHash}`
            case 'broadcastToRopsten':
                return `https://ropsten.etherscan.io/tx/${txHash}`
            case 'broadcastToRinkeby':
                return `https://rinkeby.etherscan.io/tx/${txHash}`
            case 'broadcastToBinance':
                return `https://testnet.bscscan.com/tx/${txHash}`
        }
    }

    const displayTxs = () => {
        console.log("hi?")
        if (isEmpty(sent))
            return
        
        console.log("processing")
        console.log(sent)
        let items = []
        sent.forEach((tx) => {
            const title = `${tx.destination} view transaction`
            items.push (
                <div>
                    <a href={getExplorerPath(tx.destination, tx.transactionHash)} target="_blank">
                        {title}
                    </a>
                </div>
            )
        })
        console.log("returning")
        console.log(items)
        return items
    }

    const displayConfirmation = (!isEmpty(pending) || !isEmpty(sent)) && (
        <div className="confi">
            { !isEmpty(pending) && pending}
            { !isEmpty(sent) && displayTxs()}
        </div>
    )

    const displayAlert = !isEmpty(alert) && (
        <div className="alert">
            {alert}
        </div>
    )

    return (
        <MessageBoxWrapper id="demo-box">
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
                        </Row>
                    </Col>
                </Row>
                <textarea maxLength={20} onKeyDown={onAction} rows="1" cols="50" value={message} onChange={onMessageChange} placeholder={placeHolder}></textarea>
                {displayAlert}
                {displayConfirmation}
                {displayHistory}
                
            </Box>
        </MessageBoxWrapper>
    );
};

export default MessageBox;
