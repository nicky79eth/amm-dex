const hre = require("hardhat");

async function main() {

  const Factory = await hre.ethers.getContractFactory("Factory");
  const factory = await Factory.deploy();

  await factory.waitForDeployment();

  console.log("Factory deployed:", await factory.getAddress());
}

main();
