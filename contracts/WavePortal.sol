// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {

    event NewWave(address indexed from, uint256 timestamp, string message);

    uint256 totalWaves;

    struct Wave {
        address sender;
        uint256 timestemp;
        string message;

    }

    Wave[] waves;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave(string memory _message) public {
        totalWaves++;
        console.log("%s waved w/ message %s", msg.sender, _message);
        waves.push(Wave(msg.sender, block.timestamp , _message));
        emit NewWave(msg.sender, block.timestamp, _message);
        console.log("Waved at me!");
    }

    function getTotalWaves() public view returns(uint256) {
        console.log("We have %d total waves so far", totalWaves);
        return totalWaves;
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }
}