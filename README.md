# Arbitrum POC

This is a small proof-of-concept (POC) project for getting familiar with:
- ethers.js
- Deploying to Arbitrum Testnet
- Mainnet and Testnet block numbers and timestamps
- Arbitrum One and Arbitrum Testnet block numbers and timestamps

# How to run

### Log current block information
`npm run view-block-info`


### Deploy the `BlockLogger` contract to the Arbitrum Testnet
1. Create a file named ".env" in the root folder with the following content:
	```
	DEVNET_PRIVKEY=<YOUR_PRIVATE_KEY>
	L2RPC="https://rinkeby.arbitrum.io/rpc"
	```
2. Run `npm run deploy-testnet`
3. To use your deployed contract, replace the value of `blockLoggerContractArbitrumTestnetAddress` in `scripts/viewBlockInfo.ts` with the new deployed contract address that was logged to the console.