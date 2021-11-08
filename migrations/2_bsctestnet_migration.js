const bsctestnet = artifacts.require("bsctestnet");

module.exports = function (deployer) {
  deployer.deploy(bsctestnet);
};
