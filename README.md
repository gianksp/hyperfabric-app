![Hyperfabric](https://i.ibb.co/CQz0dtw/Hyperfabricwsponsor.jpg)
## _A Moralis Hackathon project 20201_

## What is it?
Hyperfabric makes possible the communication across smart contracts in different fabrics and networks. Powered by Moralis, this cross chain gateway supports any type of interaction by exposing a REST gateway interface to any smart contract method in any technology.

## Features

- Communicate smart contracts across different network fabrics
- Interact with smart contracts through REST
- May seem like black magic but is actually Moralis


## Tech

Hyperfabric uses a number of technologies and networks:

- [Moralis](https://moralis.io) - Web3 dapps backend as a service
- [Ethereum](https://ethereum.org/en/) - Ethereum is the community-run technology powering the cryptocurrency
- [Polygon](https://polygon.technology/) - Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks.
- [Binance Smart Chain](https://www.binance.org/en/smartChain) - This dual-chain architecture will empower its users to build their decentralized apps and digital assets on one blockchain and take advantage of the fast trading to exchange on the other.
- [Elrond](https://elrond.com/) A highly scalable, fast and secure blockchain platform for distributed apps, enterprise use cases and the new internet economy.
- [Chainlink](https://chain.link/) - Chainlink's decentralized oracle network provides reliable, tamper-proof inputs and outputs for complex smart contracts on any blockchain.

## Smart Contracts
- EVM contracts can be found in the root of the code in `/contracts`
- Elrond contract [source](https://github.com/ElrondNetwork/sc-examples/tree/master/simple-counter)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Require setting up .env with
```
NEXT_PUBLIC_MORALIS=http://gateway.hyperfabric.link?appId=<MORALIS_APP_ID>&subdomain=<MORALIS_APP_SUBDOMAIN>
NEXT_PUBLIC_KOVAN=https://kovan.etherscan.io/address/<KOVAN_SMART_CONTRACT_ADDRESS>
NEXT_PUBLIC_RINKEBY=https://rinkeby.etherscan.io/address/<RINKEBY_SMART_CONTRACT_ADDRESS>
NEXT_PUBLIC_MUMBAI=https://explorer-mumbai.maticvigil.com/address/<MUMBAI_SMART_CONTRACT_ADDRESS>
NEXT_PUBLIC_ROPSTEN=https://ropsten.etherscan.io/address/<ROPSTEN_SMART_CONTRACT_ADDRESS>
NEXT_PUBLIC_GOERLI=https://goerli.etherscan.io/address/<GOERLI_SMART_CONTRACT_ADDRESS>
NEXT_PUBLIC_BNB=https://testnet.bscscan.com/address/<BINANCE_SMART_CHAIN_SMART_CONTRACT_ADDRESS>
NEXT_PUBLIC_MORALIS_REST=https://<MORALIS_APP_SUBDOMAIN>.moralis.io:2053/server/functions
NEXT_PUBLIC_MORALIS_APP_ID=<MORALIS_APP_ID>
NEXT_PUBLIC_ELROND=https://testnet-explorer.elrond.com/accounts/<ELROND_SMART_CONTRACT_ADDRESS>
NEXT_PUBLIC_HYPERFABRIC_LINK=http://elrond.hyperfabric.link/?address=<ELROND_SMART_CONTRACT_ADDRESS>
```