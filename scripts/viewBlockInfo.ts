import * as ethers from 'ethers';

async function main() {
  const mainnetProvider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/42c80d77dadd4225ada637e88f30b059');
  const mainnetBlockNumber = await mainnetProvider.getBlockNumber();
  console.log('Mainnet block number:', mainnetBlockNumber);
}

main();
