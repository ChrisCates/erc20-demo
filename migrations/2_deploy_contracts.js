const CatesToken = artifacts.require(`./CatesToken.sol`)

module.exports = (deployer) => {
  deployer.deploy(CatesToken)
}
