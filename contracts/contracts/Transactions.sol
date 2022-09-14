// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    event Transfer(address sender, address receiver, uint8 amount, string message, string keyword,uint256 timestamp);

   function Transaction (address payable receiver, uint8 amount,string memory message, string memory keyword)public{
    emit Transfer(msg.sender,receiver, amount,message,keyword,block.timestamp);
   }
}