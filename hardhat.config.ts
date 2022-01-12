import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomiclabs/hardhat-waffle";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    arbitrum: {
      url: process.env['L2RPC'],
      accounts: process.env['DEVNET_PRIVKEY'] ? [process.env['DEVNET_PRIVKEY']] : []
    },
  },
};

export default config;
