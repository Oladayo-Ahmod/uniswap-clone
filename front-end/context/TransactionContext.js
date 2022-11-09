import React, { useState, useEffect } from 'react';
import {ethers} from 'ethers'
import {abi} from '../lib/constants'
import Swal from 'sweetalert2'
import {client} from '../lib/Sanity'


// useEffect(()=>{
//     const Swal = require()
// },[])

const TransactionContext = React.createContext()
const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'

let eth
if (typeof(window) !== 'undefined') {
    eth = window.ethereum
}
else{
    console.log('please install metamask')
}
// console.log(abi,contractAddress)
   const getEthereumContract =()=>{
    const provider = new ethers.providers.Web3Provider(eth)
    const signers =  provider.getSigner()
    const transactionContract = new ethers.Contract(
        contractAddress,
        abi,
        signers
    )

    return transactionContract

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
            // console.log(accounts)
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

            const contract =  getEthereumContract()
            // console.log(contract)
            const parseAmount = ethers.utils.parseEther(amount)
            ethereum.request({
                method : 'eth_sendTransaction',
                params : [{
                   from : connectedAccount,
                   gas : '0x7EF40',
                   to : receiver,
                   value : parseAmount._hex
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
                receiver,parseAmount,`Transfer ${amount} to ${receiver}`,'TRANSFER'  
              )
  
              
              setIsLoading(true)
              await transactionHash.wait()

            /**
             * @param  {'top-end'} {position
             * @param  {'success'} icon
             * @param  {`Youhavesuccessfullytransferred${amount}ETHto${receiver}`} text
             * @param  {false} showConfirmButton
             * @param  {2500}} timer
             */
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully transferred ${amount} ETH to ${receiver}`,
                showConfirmButton: false,
                timer: 2500
            })

           
             // save transaction to sanity
             await saveTransaction(
                transactionHash.hash,
                amount,
                connectedAccount,
                receiver
            )
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                text: `You have successfully transferred ${amount} ETH to ${receiver}`,
                showConfirmButton: false,
                timer: 2500
              })

            
            // setIsLoading(false)

        } catch (error) {
            console.log(error);
        }
    }

   

    /**
     * @param  {} e
     * @param  {} name
     * @param  {} =>{setFormdata((prevState
     * @param  {} =>({...prevState
     * @param  {e.target.value}} [name]
     */
    const handleChange = (e, name)=>{
        setFormdata((prevState)=> ({ ... prevState,[name] : e.target.value}))
        // console.log(formdata)
    }
    
 
    /**
     * @param  {} txHash
     * @param  {} amount
     * @param  {} fromAddress=currentAccount
     * @param  {} toAddress
     */
    const saveTransaction = async (txHash,amount,fromAddress = currentAccount,toAddress)=>{
        const txDoc = {
            _type : 'transactions',
            _id : txHash,
            FromAddress : fromAddress,
            ToAddress : toAddress,
            Timestamp : new Date(Date.now()).toISOString(),
            TxHash : txHash,
            Amount : parseFloat(amount)
        }

        await client.createIfNotExists(txDoc)
        await client
        .patch(fromAddress)
        .setIfMissing({transactions : []})
        .insert('after','transactions[-1]',[
            {
                _key : txHash,
                _ref : txHash,
                _hash : 'reference'
            }
        ])
        .commit()

        return
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