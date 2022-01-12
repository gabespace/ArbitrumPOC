import * as ethers from 'ethers';

const infuraMainnetEndpoint = 'https://mainnet.infura.io/v3/42c80d77dadd4225ada637e88f30b059';
const infuraTestnetEndpoint = 'https://rinkeby.infura.io/v3/42c80d77dadd4225ada637e88f30b059';
const arbitrumOneEndpoint = 'https://arb1.arbitrum.io/rpc';
const arbitrumTestnetEndpoint = 'https://rinkeby.arbitrum.io/rpc';
const arbitrumOneMoralisEndpoint = 'https://speedy-nodes-nyc.moralis.io/30a9ef80f3ea346e7ace1894/arbitrum/mainnet';
const arbitrumTestnetMoralisEndpoint = 'https://speedy-nodes-nyc.moralis.io/30a9ef80f3ea346e7ace1894/arbitrum/testnet';

const blockLoggerContractArbitrumTestnetAddress = '0xe59a49c8d0625472640A24310716e2491bE5f1b1';
const blockInfoABI = [
  'function blockInformation() public view returns (uint number, uint timestamp)'
];

async function main() {
  console.log('Current date:', new Date().toLocaleString());
  console.log();

  await logBlockInformation('Mainnet (Infura)', infuraMainnetEndpoint);
  await logBlockInformation('Testnet (Infura)', infuraTestnetEndpoint);
  console.log();

  const arbitrumTestnetProvider = new ethers.providers.JsonRpcProvider(arbitrumTestnetEndpoint);
  const blockLoggerContract = new ethers.Contract(blockLoggerContractArbitrumTestnetAddress, blockInfoABI, arbitrumTestnetProvider);
  const [blockNumber, blockTimestamp]: ethers.BigNumber[] = await blockLoggerContract.blockInformation();
  const numberTimestamp = Number(blockTimestamp);
  console.log('BlockLogger contract block number:', Number(blockNumber.toString()), '=== block timestamp:', numberTimestamp, `(${formattedDate(numberTimestamp)})`);
  console.log();

  await logBlockInformation('Arbitrum One', arbitrumOneEndpoint);
  await logBlockInformation('Arbitrum One (Moralis)', arbitrumOneMoralisEndpoint);
  await logBlockInformation('Arbitrum Testnet', arbitrumTestnetEndpoint);
  await logBlockInformation('Arbitrum Testnet (Moralis)', arbitrumTestnetMoralisEndpoint);
  console.log();
}

async function logBlockInformation(network: string, url: string) {
  const provider = new ethers.providers.JsonRpcProvider(url);
  const blockNumber = await provider.getBlockNumber();
  const block = await provider.getBlock(blockNumber);
  console.log(`${network} block number:`, block.number, '=== block timestamp:', block.timestamp, `(${formattedDate(block.timestamp)})`);
}

function formattedDate(blockTimestamp: number): string {
  const date = new Date(blockTimestamp * 1000);
  return date.toLocaleString();
}

main();
