# AMM Protocol Design

This document explains the protocol design of the Automated Market Maker (AMM) implemented in this repository.

## Design Goals

The protocol is designed with the following goals:

- Decentralized token trading
- Permissionless liquidity pools
- Deterministic price discovery
- Simple and secure architecture

The system follows the Automated Market Maker model instead of using an order book.

## AMM Model

The protocol uses the **constant product formula**:

x * y = k

Where:

x = reserve of token A  
y = reserve of token B  
k = constant value

When a trade occurs, the product of the reserves must remain constant.

Example:

Reserve A = 1000  
Reserve B = 1000  

k = 1,000,000

If a user swaps token A for token B, the reserves will change but `k` remains approximately constant.

## Liquidity Pools

Each trading pair has its own liquidity pool.

Example pools:

ETH / USDC  
ETH / DAI  
BTC / ETH  

Liquidity providers deposit both tokens into the pool.

Example deposit:

User provides:

1000 TokenA  
1000 TokenB

The pool reserves become:

reserveA = 1000  
reserveB = 1000

Liquidity providers may receive LP tokens representing their share of the pool.

## Swap Mechanism

Swaps follow the AMM pricing formula.

Output calculation:

amountOut = (amountIn * 997 * reserveOut) / (reserveIn * 1000 + amountIn * 997)

The factor `997 / 1000` represents a **0.3% trading fee**.

Steps during a swap:

1. User submits token input
2. Contract calculates output amount
3. Output tokens are transferred to the user
4. Pool reserves are updated

## Fee Model

Each trade includes a small fee.

Example:

Trading fee = 0.3%

Fee distribution:

- Added to liquidity pool reserves
- Benefits liquidity providers

Over time this increases LP profitability.

## Liquidity Provider Tokens

Liquidity providers may receive LP tokens that represent their share of the pool.

Example:

Pool value = 10,000 tokens  
User adds = 1,000 tokens  

User share = 10%

LP tokens allow:

- tracking ownership
- withdrawing liquidity later

## Removing Liquidity

When liquidity is removed:

1. LP tokens are burned
2. User receives proportional share of pool reserves

Example:

Pool reserves:

TokenA = 5000  
TokenB = 5000  

User owns 10% LP share.

User receives:

500 TokenA  
500 TokenB

## Slippage

Slippage occurs when a large trade significantly changes the price.

Example:

Small pool size  
Large trade

This results in worse execution price.

Users should specify a **maximum slippage tolerance**.

## Future Extensions

Possible protocol improvements include:

- Multi-hop swaps
- Flash swaps
- Oracle price feeds
- Dynamic fee models
- Governance token

## Design Inspiration

This design is inspired by modern decentralized exchange protocols using AMM-based liquidity pools.
