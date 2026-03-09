const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AMM Pair Contract", function () {

  let Pair;
  let pair;
  let owner;

  beforeEach(async function () {

    const accounts = await ethers.getSigners();
    owner = accounts[0];

    Pair = await ethers.getContractFactory("Pair");
    pair = await Pair.deploy();

    await pair.waitForDeployment();
  });


  it("Should add liquidity", async function () {

    await pair.addLiquidity(1000, 1000);

    const reserveA = await pair.reserveA();
    const reserveB = await pair.reserveB();

    expect(reserveA).to.equal(1000);
    expect(reserveB).to.equal(1000);

  });


  it("Should calculate swap price", async function () {

    await pair.addLiquidity(1000, 1000);

    const amountOut = await pair.getPrice(100);

    expect(amountOut).to.be.gt(0);

  });


  it("Should perform swap", async function () {

    await pair.addLiquidity(1000, 1000);

    await pair.swap(100);

    const reserveA = await pair.reserveA();
    const reserveB = await pair.reserveB();

    expect(reserveA).to.equal(1100);
    expect(reserveB).to.be.lt(1000);

  });

});
