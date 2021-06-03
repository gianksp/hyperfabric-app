pragma solidity ^0.6.0; // KOVAN CHAINLINK TEST

import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";


contract Hyperfabric is ChainlinkClient {
  
    uint256 public volume;
    
    string public message;
    string public func;
    string public lastCall;
    
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    
    /**
     * Network: Kovan
     * Oracle: 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e
     * Job ID: 29fa9aa13bf1468788b7cc4a500a45b8
     * Fee: 0.1 LINK
     */
    constructor() public {
        setPublicChainlinkToken();
        oracle = 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e;
        jobId = "29fa9aa13bf1468788b7cc4a500a45b8";
        fee = 0.1 * 10 ** 18; // (Varies by network and job)
    }
    
    function setMessage(string memory targetFunction, string memory userMessage) public {
        message = userMessage;
        func = targetFunction;
    }
    
    function broadcastMessage() public returns (bytes32 requestId) 
    {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        
        string memory url = "http://116.203.69.61:49160/forward?appId=wxBfC0OKuSn5XjHjTvE1CSOOTkguwpZXgYjWwOlW&subdomain=svzayzygttuw&func=";
        string memory base = string(abi.encodePacked(url, func));
        string memory fullPath = string(abi.encodePacked(base, "&message=[From Kovan using Chainlink] "));
        lastCall = string(abi.encodePacked(fullPath, message));
        request.add("get", lastCall);

        // Sends the request
        return sendChainlinkRequestTo(oracle, request, fee);
    }
    
    /**
     * Receive the response in the form of uint256
     */ 
    function fulfill(bytes32 _requestId, uint256 _volume) public recordChainlinkFulfillment(_requestId)
    {
        volume = _volume;
    }
 
}