// https://eth-goerli.g.alchemy.com/v2/rJj5viZIQHVh24Xx2h7XF5ezXdC48Tc9;

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/rJj5viZIQHVh24Xx2h7XF5ezXdC48Tc9',
      accounts: ['022adafae070b82cede06cf098bdb31eb0870675270f3e13e5c6aad91ff2296e'],
    },
  },
};