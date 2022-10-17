import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import * as dotenv from "dotenv";
dotenv.config();

const AURORA_TESTNET_PRIVATE_KEY = process.env.AURORA_TESTNET_PRIVATE_KEY;

// 0x20Ba2D77526ED912E105F322e5Dbc24bED3e81f7 (Aurora+ Mainnet #1)
const AURORA_MAINNET_PRIVATE_KEY_1 = process.env.AURORA_MAINNET_PRIVATE_KEY_1;

// 0xb8ff7465888F325DD26bc1Fb63dec79CBfF9AA11 (Aurora+ Mainnet #2)
const AURORA_MAINNET_PRIVATE_KEY_2 = process.env.AURORA_MAINNET_PRIVATE_KEY_2;

const AURORA_RPC_URL = process.env.AURORA_RPC_URL;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const AURORASCAN_API_KEY = process.env.AURORASCAN_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    aurora_testnet: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${AURORA_TESTNET_PRIVATE_KEY}`],
      chainId: 1313161555
    },
    aurora_mainnet: {
      // url: 'https://mainnet.aurora.dev',
      url: AURORA_RPC_URL,      
      accounts: [`0x${AURORA_MAINNET_PRIVATE_KEY_1}`],
      chainId: 1313161554,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [`0x${AURORA_TESTNET_PRIVATE_KEY}`],
      chainId: 5
    },
  },
  etherscan: {
    apiKey: AURORASCAN_API_KEY,
  },
};

export default config;
