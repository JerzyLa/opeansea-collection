require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("./scripts/deploy.js");
require("./scripts/mint.js");

const {ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY, ETHERSCAN_API_KEY} = process.env;

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    ethereum: {
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: `${ETHERSCAN_API_KEY}`
  }
};
