import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying with account:', deployer.address);

  const blockLoggerFactory = await ethers.getContractFactory('BlockLogger');
  const blockLogger = await blockLoggerFactory.deploy();
  await blockLogger.deployed();
  console.log('Block Logger address:', blockLogger.address);

  const [number, timestamp] = await blockLogger.blockInformation();
  console.log('Block number:', number);
  console.log('Block timestamp:', timestamp);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
