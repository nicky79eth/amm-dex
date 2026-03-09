# Automated Market Maker (AMM)

This document explains how the Automated Market Maker (AMM) mechanism works in this project.

## Overview

An Automated Market Maker (AMM) is a decentralized exchange model that allows users to trade tokens directly from a liquidity pool instead of using a traditional order book.

This project implements a simple AMM similar to the model used by Uniswap.

## Core Concept

The AMM uses the **constant product formula**:

x * y = k

Where:

- x = reserve of token A
- y = reserve of token B
- k = constant value that must remain unchanged

When a swap occurs, the reserves change but the product `k` remains constant.

## Liquidity Pools

Liquidity pools store the tokens used for trading.

Example:

Token A reserve = 1000  
Token B reserve = 1000  

k = 1000 * 1000 = 1,000,000

Users can provide liquidity to the pool and receive LP tokens in return.

## Swapping Tokens

When a user swaps tokens:

1. The user sends token A to the pool
2. The AMM calculates the output amount of token B
3. Token B is sent back to the user

The swap formula used:

amountOut = (amountIn * 997 * reserveOut) / (reserveIn * 1000 + amountIn * 997)

The 0.3% fee is kept inside the pool and distributed to liquidity providers.

## Smart Contracts

Main contracts in this project:

- Factory.sol → creates liquidity pools
- Pair.sol → manages token reserves and swaps
- Router.sol → user interface for interacting with pools

## Security Considerations

Important aspects when implementing AMM systems:

- Reentrancy protection
- Slippage control
- Price manipulation protection
- Liquidity pool imbalance

## Future Improvements

Possible improvements for this project:

- LP tokens for liquidity providers
- Remove liquidity function
- Price oracle integration
- Frontend swap interface
