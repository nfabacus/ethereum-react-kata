pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    constructor(string initialMessage) public {
        message = initialMessage;
    }

    event MessageEvent(string message);
    
    function setMessage(string newMessage) public {
        message = newMessage;

        emit MessageEvent(newMessage);
    }
}