const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "processMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMessages",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "msgs",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

Moralis.Cloud.define("hello", async (request) => {
  const message = request.params.message;
  return "echo "+message;
});

const readFrom = async (network, contract) => {
  	const web3 = Moralis.web3ByChain(network);
  	const target = new web3.eth.Contract(abi, contract);
  	return await target.methods.getMessages().call().catch(() => "");
};

const broadcastTo = async (network, contract, message) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
  	const pKey = config.get("pKey");
  	const originAddress = config.get("originAddress");
	const web3 = Moralis.web3ByChain(network);
    const target = new web3.eth.Contract(abi, contract);
    const account = web3.eth.accounts.privateKeyToAccount(pKey);
    const tx = target.methods.processMessage(message);
    const gas = await tx.estimateGas({from: originAddress});
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(originAddress);
    const signedTx = await web3.eth.accounts.signTransaction({
        to: contract,
        data,
        gas,
        gasPrice,
        nonce, 
        chainId: network
    }, pKey);
    return await web3.eth.sendSignedTransaction(signedTx.rawTransaction); 
};

// Polygon (Mumbai)
Moralis.Cloud.define("readFromMumbai", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
  	const network = config.get("mumbaiNetwork");
    const contract = config.get("mumbaiContract");
  	return readFrom(network, contract);
});

Moralis.Cloud.define("broadcastToMumbai", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
    const network = config.get("mumbaiNetwork");
    const contract = config.get("mumbaiContract");
	return broadcastTo(network, contract, request.params.message);
});

// Ethereum (Ropsten)
Moralis.Cloud.define("readFromRopsten", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
  	const network = config.get("ropstenNetwork");
    const contract = config.get("ropstenContract");
  	return readFrom(network, contract);
});

Moralis.Cloud.define("broadcastToRopsten", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
    const network = config.get("ropstenNetwork");
    const contract = config.get("ropstenContract");
	return broadcastTo(network, contract, request.params.message);
});

// Ethereum (Goerli)
Moralis.Cloud.define("readFromGoerli", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
  	const network = config.get("goerliNetwork");
    const contract = config.get("goerliContract");
  	return readFrom(network, contract);
});

Moralis.Cloud.define("broadcastToGoerli", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
    const network = config.get("goerliNetwork");
    const contract = config.get("goerliContract");
	return broadcastTo(network, contract, request.params.message);
});

// Binance Chain (Testnet)
Moralis.Cloud.define("readFromBinance", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
  	const network = config.get("bnbNetwork");
    const contract = config.get("bnbContract");
  	return readFrom(network, contract);
});

Moralis.Cloud.define("broadcastToBinance", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
    const network = config.get("bnbNetwork");
    const contract = config.get("bnbContract");
	return broadcastTo(network, contract, request.params.message);
});

// Elrond (Testnet)
Moralis.Cloud.define("readFromElrond", async (request) => {
  const config = await Moralis.Config.get({useMasterKey: true});
  const elrondContract = config.get("elrondContract");
  const hyperfabricLink = config.get("hyperfabricLink");
  const response = await Moralis.Cloud.httpRequest({
    url: `http://${hyperfabricLink}/contract?address=${elrondContract}&func=get`
  });
  return response;
});

Moralis.Cloud.define("broadcastToElrond", async (request) => {
  const config = await Moralis.Config.get({useMasterKey: true});
  const elrondContract = config.get("elrondContract");
  const hyperfabricLink = config.get("hyperfabricLink");
  const response = await Moralis.Cloud.httpRequest({
    url: `http://${hyperfabricLink}/contract?address=${elrondContract}&isCall=true&func=increment`
  });
  return response;
});
