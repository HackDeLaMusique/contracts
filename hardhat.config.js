require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {},
    goerli: {
      url: "https://goerli.infura.io/v3/0b60056fd3f84b6f8830243ac587e717",
      accounts: {
        mnemonic:
          "wage dirt stove orange seek whale intact anchor license clean hurry inflict",
      },
    },
  },
  solidity: "0.8.0",
};
