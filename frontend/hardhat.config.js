// hardhat.config.js

module.exports = {
  solidity: {
    compilers: [
      {
        version: "^0.8.0",
      },
      {
        version: "^0.7.3",
      },
    ],
  },
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/uWkv8nfaqAR8R27a8igUtgeZudpC72nn",
    }
  },
};