import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const AURORA_PRIVATE_KEY = process.env.AURORA_PRIVATE_KEY;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    aurora_testnet: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
      chainId: 1313161555
    },
    aurora_mainnet: {
      url: 'https://mainnet.aurora.dev',
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
      chainId: 1313161554,
      // gasPrice: 120 * 1000000000
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
      chainId: 5
    },
  }
};

export default config;
