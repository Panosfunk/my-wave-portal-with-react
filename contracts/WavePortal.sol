// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {

    uint256 totalWaves;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves++;
        console.log("Waved at me!");
    }

    function getTotalWaves() public view returns(uint256) {
        console.log("We have %d total waves so far", totalWaves);
        return totalWaves;
    }
}