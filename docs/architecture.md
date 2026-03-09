# AMM DEX Architecture

This document describes the architecture of the Automated Market Maker (AMM) decentralized exchange implemented in this repository.

## System Overview

The protocol is composed of three main smart contracts:

- Factory
- Pair
- Router

These contracts work together to create liquidity pools and enable token swaps.

## Architecture Diagram

User
 │
 ▼
Router Contract
 │
 ▼
Pair Contract (Liquidity Pool)
 │
 ▼
Token Reserves

The router acts as the entry point for users, while the pair contract manages the liquidity pool.

## Components

### 1. Factory Contract

The Factory contract is responsible for creating and tracking liquidity pools.

Responsibilities:

- Deploy new Pair contracts
- Store the list of all liquidity pools
- Prevent duplicate pools

Example:

TokenA + TokenB → create Pair

### 2. Pair Contract

The Pair contract manages the liquidity pool and handles swaps.

Responsibilities:

- Store token reserves
- Calculate swap prices
- Execute swaps
- Maintain the constant product formula

State variables:

reserveA  
reserveB  

These values represent the amount of tokens inside the liquidity pool.

### 3. Router Contract

The Router contract provides a user-friendly interface to interact with pools.

Responsibilities:

- Add liquidity
- Swap tokens
- Interact with Pair contracts

The router simplifies interactions so users do not need to call pair contracts directly.

## Liquidity Flow

1. Liquidity provider deposits TokenA and TokenB
2. The Pair contract updates reserves
3. Liquidity tokens may be issued (future feature)

Example:

User deposits  
1000 TokenA  
1000 TokenB

Pool reserves become:

reserveA = 1000  
reserveB = 1000

## Swap Flow

1. User sends TokenA to the pool
2. Pair calculates output using AMM formula
3. TokenB is sent to the user
4. Pool reserves are updated

## Fee Model

A swap fee is applied to each trade.

Typical configuration:

0.3% trading fee

Fee distribution:

- Liquidity providers receive trading fees
- Fees accumulate in the pool

## Upgrade Possibilities

Future architecture improvements may include:

- Liquidity Provider (LP) tokens
- Price oracle integration
- Multi-hop swaps
- Frontend swap interface
- Governance system

## Security Considerations

- Reentrancy protection
- Overflow protection
- Front-running mitigation
- Slippage checks
