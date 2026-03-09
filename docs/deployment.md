# Deployment Guide

This document explains how to deploy the AMM protocol smart contracts using Hardhat.

## Requirements

Before deploying the contracts, make sure the following tools are installed:

- Node.js (v18 or later recommended)
- npm or yarn
- Hardhat

Install project dependencies:

npm install

## Project Configuration

Create an environment configuration file.

Example `.env`:

PRIVATE_KEY=your_private_key
RPC_URL=your_rpc_endpoint

Example RPC providers:

- local Hardhat node
- testnet RPC
- private RPC providers

## Compile Contracts

Compile the smart contracts before deployment.

npx hardhat compile

If the compilation is successful, the artifacts will be generated inside the `artifacts` directory.

## Deploy Contracts

Use the deploy script included in the repository.

Example command:

npx hardhat run scripts/deploy.js --network testnet

This script will deploy:

- Factory contract
- Pair contracts (if configured)
- Router contract

## Local Deployment

You can deploy contracts to a local Hardhat network.

Start a local node:

npx hardhat node

Then deploy the contracts:

npx hardhat run scripts/deploy.js --network localhost

## Deployment Output

After successful deployment, the console will display contract addresses.

Example output:

Factory deployed: 0x123...
Router deployed: 0x456...

These addresses are required for frontend integration.

## Verify Contracts

If deploying to a public testnet or mainnet, verify the contracts.

Example command:

npx hardhat verify --network testnet CONTRACT_ADDRESS

Verification allows users to inspect contract code publicly.

## Deployment Checklist

Before deploying to production:

- Run all tests
- Verify gas usage
- Perform security review
- Ensure correct configuration
- Confirm contract ownership settings

## Post Deployment Steps

After deployment:

1. Add liquidity to pools
2. Test swap functionality
3. Integrate frontend
4. Monitor contract activity

## Supported Networks

This project can be deployed to:

- local development networks
- public testnets
- EVM-compatible networks
