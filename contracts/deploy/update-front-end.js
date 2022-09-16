const {ethers} = require('hardhat')
const fs = require('fs')

module.exports = function(){
    if (process.env.UPDATE_FRON_END) {
        console.log('------------updating-------front-end------------constants')
        contractAddress()
        abi()
    }
    
}

const ABI = '../front-end/constants/abi.json'
const CONTRACTADDRESS = '../front-end/constants/contractAddress.json'

async function contractAddress(){
    const transaction = await hre.ethers.getContractFactory("Transaction")
    const deploy = await transaction.deploy()
    console.log(deploy.address);
    const contractAddresses = JSON.parse(fs.readFileSync(CONTRACTADDRESS, "utf8"))
    if (network.config.chainId.toString() in contractAddresses) {
        if (!contractAddresses[network.config.chainId.toString()].includes(deploy.address)) {
            contractAddresses[network.config.chainId.toString()].push(deploy.address)
        }
    } else {
        contractAddresses[network.config.chainId.toString()] = [deploy.address]
    }
    fs.writeFileSync(CONTRACTADDRESS, JSON.stringify(contractAddresses))

}

async function abi(){
    const contract = await hre.ethers.getContractFactory('Transaction')
    fs.writeFileSync(ABI,contract.interface.format(ethers.utils.FormatTypes.json))

}
// module.exports.tags = ["all","frontend"]
