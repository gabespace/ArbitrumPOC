import { expect } from "chai";
import { ethers } from "hardhat";
import { BlockLogger } from "../typechain";

describe('a block logger', () => {
  let blockLogger: BlockLogger;

  beforeEach(async () => {
    const blockLoggerFactory = await ethers.getContractFactory('BlockLogger');
    blockLogger = await blockLoggerFactory.deploy();
    await blockLogger.deployed();
  });

  it('should provide the block number', async () => {
    const [infoNumber, infoTimestamp] = await blockLogger.blockInformation();

    const blockNumber = await ethers.provider.getBlockNumber();
    const block = await ethers.provider.getBlock(blockNumber);

    expect(infoNumber).to.equal(block.number);
  });

  it('should provide the block timestamp', async () => {
    const [infoNumber, infoTimestamp] = await blockLogger.blockInformation();

    const blockNumber = await ethers.provider.getBlockNumber();
    const block = await ethers.provider.getBlock(blockNumber);

    expect(infoTimestamp).to.equal(block.timestamp);
  });
});
