const {network, ethers, deployments} = require('hardhat')

async function main(){
  const {log} = deployments
  const contract = await hre.ethers.getContractFactory('Transaction')
  const deployment = await contract.deploy()
  log('set to deploy transaction')
  await deployment.deployed()
  log('deploying')
  await deployment.wait(1)
  log(`Transaction deployed to ${deployment.address}`)
  log('------------------baddest----------------blockchain---------------developer')
  console.log('deployed')
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// module.export = main