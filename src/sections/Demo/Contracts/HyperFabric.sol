// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.0;


contract MoralisMessager {
    
    string[] internal messages;
    
    function processMessage(string calldata message) public {
        messages.push(message);
        if (messages.length > 100)
            delete messages[0];
    }
    
    function getMessages() public view returns(string[] memory msgs) {
        return messages;
    }
    
    function resetMessages() public {
        delete messages;
    }
}
