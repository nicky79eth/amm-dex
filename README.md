# AMM DEX

A simple Automated Market Maker (AMM) decentralized exchange built with Solidity and Hardhat.

This project demonstrates the core mechanics of AMM-based decentralized exchanges such as liquidity pools, token swaps, and constant product market making.

## Overview

The protocol allows users to:

- create liquidity pools
- provide liquidity
- swap tokens
- interact with smart contracts through a router

The pricing model follows the constant product formula:

x * y = k

Where:

x = reserve of token A  
y = reserve of token B  
k = constant value


## Smart Contracts

Factory.sol  
Responsible for creating liquidity pools.

Pair.sol  
Manages liquidity pool reserves and swap logic.

Router.sol  
Provides a simplified interface for interacting with pools.

## Installation

Clone the repository:

git clone https://github.com/nicky79eth/amm-dex.git

Install dependencies:

npm install

## Compile Contracts

npx hardhat compile

## Run Tests

npx hardhat test

## Local Deployment

Start a local Hardhat node:

npx hardhat node

Deploy contracts:

npx hardhat run scripts/deploy.js --network localhost

## Documentation

Additional documentation is available in the `docs` directory.

deployment.md  
Testing.md

## Tech Stack

- Solidity
- Hardhat
- ethers.js
- Node.js

## Future Improvements

- LP tokens for liquidity providers
- remove liquidity functionality
- price oracle integration
- frontend swap interface

## License

MIT
