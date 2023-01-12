require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/KUZ6OzRqUPM4OCVFZydAkbTCCILK1Lgk",
      accounts: ["0x6dc361361d02dc99fefc3fe8db5b825b630cc53f5f5da2bcd0055ae64e21c05b"],
    },
  },
  paths: {
    artifacts: "./src/artifacts",
  },
};
// /Users/niema/Desktop/web/frontend/
// artifacts/contracts/Constellations.sol/Constellations.json
