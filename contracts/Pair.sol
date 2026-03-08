// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Pair {

    uint public reserveA;
    uint public reserveB;

    function addLiquidity(uint amountA, uint amountB) public {
        reserveA += amountA;
        reserveB += amountB;
    }

    function getPrice(uint amountIn) public view returns (uint) {
        uint amountInWithFee = amountIn * 997 / 1000;
        uint numerator = amountInWithFee * reserveB;
        uint denominator = reserveA + amountInWithFee;
        return numerator / denominator;
    }

    function swap(uint amountIn) public returns (uint amountOut) {
        amountOut = getPrice(amountIn);

        reserveA += amountIn;
        reserveB -= amountOut;
    }
}
