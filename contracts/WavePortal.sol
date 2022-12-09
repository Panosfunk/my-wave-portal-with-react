// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {

    event NewWave(address indexed from, uint256 timestamp, string message);

    uint256 private seed;

    uint256 totalWaves;

    struct Wave {
        address sender;
        uint256 timestamp;
        string message;
    }

    Wave[] waves;

    constructor() payable {
        console.log("Yo yo, I am a contract and I am smart");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function wave(string memory _message) public {
        waves.push(Wave(msg.sender, block.timestamp , _message));
        
        seed = (block.difficulty + block.timestamp + seed) % 100;
        console.log("Random # generated: %d", seed);
        
        if (seed < 50) {
            console.log("%s Waved at me and won!", msg.sender);

            /*
             * The same code we had before to send the prize.
             */
            // uint256 prizeAmount = 0.0001 ether;
            // require(
            //     prizeAmount < address(this).balance,
            //     "Trying to withdraw more money than the contract has."
            // );
            // (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            // require(success, "Failed to withdraw money from contract.");
        } else {
            console.log("%s Waved at me and did NOT win!", msg.sender);
        }
        
        emit NewWave(msg.sender, block.timestamp, _message);
        totalWaves++;
    }

    function getTotalWaves() public view returns(uint256) {
        console.log("We have %d total waves so far", totalWaves);
        return totalWaves;
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }
}