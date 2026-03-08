// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Pair.sol";

contract Factory {

    address[] public pairs;

    function createPair() public returns (address) {

        Pair pair = new Pair();

        pairs.push(address(pair));

        return address(pair);
    }

}
