//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract BlockLogger {
  function blockInformation() public view returns (uint number, uint timestamp) {
    number = block.number;
    timestamp = block.timestamp;
  }
}
