// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;


contract HyperFabric {
    
    string[] internal messages;
    
    function processMessage(string calldata message) public {
        messages.push(message);
        if (messages.length > 100)
            delete messages[0];
    }
    
    function getMessages() public view returns(string[] memory msgs) {
        return messages;
    }
    
    function getLastMessage() public view returns(string memory lastMessage) {
        if (messages.length > 0)
            return messages[messages.length - 1];
        
        return '';
    }
}
