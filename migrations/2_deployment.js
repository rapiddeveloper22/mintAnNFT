const MyEpicNFT = artifacts.require('MyEpicNFT');

module.exports = async function (deployer) {
    deployer.deploy(MyEpicNFT);
};