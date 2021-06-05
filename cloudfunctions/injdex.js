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

 const logger = Moralis.Cloud.getLogger();

 Moralis.Cloud.beforeSave("User", (request) => {
   const newEmail = request.object.get("email");
   const newUsername = request.object.get("username");
   if (request.user) {
     const oldEmail = request.user.get("email");
     if (newEmail != oldEmail) {
       // Welcome email
       Moralis.Cloud.sendEmail({
         to: newEmail,
         templateId: "d-276f918c91144df6ab0e7efc23cff814",
         dynamic_template_data: {
           username: newUsername
         }
       })
     }
   }
 });

const HyperfabricTransaction = Moralis.Object.extend("HyperfabricTransaction");
const Visit = Moralis.Object.extend("Visit");

Moralis.Cloud.define("hello", async (request) => {
  const message = request.params.message;
  return "echo "+message;
});

const readFrom = async (network, contract) => {
 	// Init
  	let transaction = new HyperfabricTransaction();
  	transaction.set("operation", "readFrom");
  	transaction.set("network", network);
  	transaction.set("contract", contract);
  	transaction.set("status", "pending");
	transaction = await transaction.save();
  	// Execute
  	const web3 = Moralis.web3ByChain(network);
  	const target = new web3.eth.Contract(abi, contract);
  	let response = await target.methods.getMessages().call().catch(() => "");
  	// Complete
  	transaction.set("status", "complete");
	transaction = await transaction.save();
  	// Append
  	response.hyperfabricTransaction = transaction;
  	return response;
};

const broadcastTo = async (network, contract, message) => {
   	// Init
  	let transaction = new HyperfabricTransaction();
  	transaction.set("operation", "broadcastTo");
  	transaction.set("network", network);
  	transaction.set("contract", contract);
  	transaction.set("status", "pending");
  	transaction.set("arguments", `message=${message}`);
	transaction = await transaction.save();
  	// Execute
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
    let response = await web3.eth.sendSignedTransaction(signedTx.rawTransaction); 
  	// Complete
  	transaction.set("status", "complete");
	transaction = await transaction.save();
  	// Append
  	response.hyperfabricTransaction = transaction;
  	return response;
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

// Ethereum (Rinkeby)
Moralis.Cloud.define("readFromRinkeby", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
  	const network = config.get("rinkebyNetwork");
    const contract = config.get("rinkebyContract");
  	return readFrom(network, contract);
});

Moralis.Cloud.define("broadcastToRinkeby", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
    const network = config.get("rinkebyNetwork");
    const contract = config.get("rinkebyContract");
	return broadcastTo(network, contract, request.params.message);
});

// Ethereum (Kovan)
Moralis.Cloud.define("readFromKovan", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
  	const network = config.get("kovanNetwork");
    const contract = config.get("kovanContract");
  	return readFrom(network, contract);
});

Moralis.Cloud.define("broadcastToKovan", async (request) => {
  	const config = await Moralis.Config.get({useMasterKey: true});
    const network = config.get("kovanNetwork");
    const contract = config.get("kovanContract");
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

// Visit
Moralis.Cloud.define("visit", async (request) => {
  	let visit = new Visit();
	return await visit.save();
});

