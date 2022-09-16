import React, { useState, useEffect } from 'react';
import {abi,contractAddress} from '../constants'
const TransactionContext = React.createContext()

let eth
if (typeof(window) !== 'undefined') {
    eth = window.ethereum
}

// console.log(abi,contractAddress)
async function getEthereumContract(){
    const provider = new ethers.providers.Web3Provider(eth)
    const signers = await provider.getSigner()
    const contract = new ethers.contract({
        contractAddress,
        abi,
        signers
    })

    return contract

}
 /**
  * transaction provider
  * @param  {} {children}
  */

 const TransactionProvider = ({children})=>{
    const [currentAccount,setCurrentAccount] = useState()
    const [isLoading,setIsLoading] = useState(false)
    const [formdata,setFormdata] = useState({
        receiver : '',
        amount : ''
    })
    const connectWallet = async function (metamask = eth){
       try {
        if (!metamask) return alert('please, install metamask')
            const accounts = await metamask.request({method : 'eth_requestAccounts'})
            setCurrentAccount(accounts[0])
            console.log(accounts)
       } catch (error) {
            console.log(error)
       }
    }

    /**
     * @param  {} (
     */
    useEffect(()=>{
        WalletConnected()
    },[])

    /**
     * check if wallet is connected
     * @param  {} metamask=eth
     */
    const WalletConnected = async (metamask = eth)=>{
        try {
            if (!metamask) return alert('Please, install metamask')
            const accounts = await metamask.request({method : 'eth_accounts'})
            accounts.length ?   setCurrentAccount(accounts[0])
            : console.log('not connected')
        } catch (error) {
            console.log(error)
        }
    }
    /**
     * send trasaction
     * @param  {} metamask=eth
     * @param  {} connectedAccount=currentAccount
     */
    const SendTransaction = async (metamask = eth, connectedAccount = currentAccount)=>{
        try {
            if(!metamask) return alert('Please, install metamask')
            const {receiver, amount} = formdata
            const contract = getEthereumContract()
            const parseAmount = ethers.utils.parseEther(amount)
            await metamask.request({
                method : 'eth_sendTransaction',
                params : [{
                   from : connectedAccount,
                   to : receiver,
                   amount : parseAmount._hex
                }]
            })

            /**
             * transaction hash
             * @param  {} receiver
             * @param  {} amount
             * @param  {} `Transfer${amount}to${receiver}`
             * @param  {} 'TRANSFER'
             */
            const transactionHash = await contract.send(
              receiver,amount,`Transfer ${amount} to ${receiver}`,'TRANSFER'  
            )
            
            setIsLoading(true)
            await transactionHash.wait()

            /**
             * @param  {} transactionHash.hash
             * @param  {} amount
             * @param  {} connectedAccount
             * @param  {} receiver
             */
            // await saveTransaction(
            //     transactionHash.hash,
            //     amount,
            //     connectedAccount,
            //     receiver
            // )
            
            // setIsLoading(false)

        } catch (error) {
            console.log(error);
        }       
    }
    const handleChange = (e, name)=>{
        setFormdata((prevState)=> ({... prevState,[name] : e.target.value}))
    }
    
 
    return (
        <TransactionContext.Provider 
        value={{
        currentAccount,
        connectWallet,
        SendTransaction,
        handleChange,
        formdata
        }}
        >
            {children}
        </TransactionContext.Provider>
    )
        
}

module.exports = {
    TransactionProvider,
    TransactionContext,
    // formdata

}