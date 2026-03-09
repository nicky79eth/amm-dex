# Testing Guide

This document explains how to test the smart contracts included in the AMM protocol.

Testing is essential to ensure that contract logic behaves correctly and securely before deployment.

## Testing Framework

This project uses the following testing tools:

- Hardhat
- ethers.js
- Mocha
- Chai

These tools allow developers to write automated tests for smart contracts.

## Test Structure

All tests are located in the `test` directory.

Example structure:

test/
swap.test.js
liquidity.test.js
factory.test.js

Each file focuses on testing a specific contract or feature.

## Running Tests

To run all tests in the project:

npx hardhat test

Example output:

AMM Pair Contract
✔ should add liquidity
✔ should calculate swap price
✔ should perform token swap

## Unit Tests

Unit tests validate individual functions in the smart contracts.

Examples:

- adding liquidity
- calculating swap output
- executing swaps
- updating reserves

Example test case:

1. Deploy Pair contract
2. Add liquidity
3. Execute swap
4. Verify reserves update correctly

## Integration Tests

Integration tests verify interactions between multiple contracts.

Example scenarios:

- Factory creates a Pair
- Router interacts with Pair
- Swap executed through Router

These tests ensure the full protocol workflow functions correctly.

## Edge Case Testing

Edge cases should also be tested.

Examples include:

- swapping with zero liquidity
- extremely large swaps
- invalid inputs
- insufficient liquidity

Testing edge cases helps prevent unexpected failures.

## Gas Usage Testing

Developers should monitor gas consumption during testing.

High gas usage may indicate inefficient code.

Example command:

npx hardhat test --gas

Optimizing gas usage improves user experience and reduces transaction costs.

## Test Coverage

Test coverage measures how much of the contract code is tested.

Recommended coverage level:

80% or higher

Tools can be used to generate coverage reports.

## Best Practices

- Write tests for every public function
- Test both success and failure cases
- Use realistic scenarios
- Keep tests deterministic
- Run tests before every deployment

## Continuous Integration

For production-level projects, tests should run automatically in a CI pipeline.

Example workflow:

1. Push code to repository
2. CI runs automated tests
3. Deployment only proceeds if tests pass
