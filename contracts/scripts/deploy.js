const {network, ethers, deployments} = require('hardhat')

async function main(){
  const {log} = deployments
  const contract = await hre.ethers.getContractFactory('Transaction')
  const deployment = await contract.deploy()
  console.log('set to deploy transaction')
  await deployment.deployed()
  console.log(`Transaction deployed to ${deployment.address}`)
  console.log('------------------baddest----------------blockchain---------------developer')
  console.log('deployed')
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});