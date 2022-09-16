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

}

async function abi(){

}