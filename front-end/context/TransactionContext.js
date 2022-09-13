import React, { useState, useEffect } from 'react';

const TransactionContext = React.createContext()

let eth
if (typeof(window) !== 'undefined') {
    eth = window.ethereum
}
 /**
  * transaction provider
  * @param  {} {children}
  */
 const TransactionProvider = ({children})=>{
    const [currentAccount,setCurrentAccount] = useState()
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
            accounts.length ?    setCurrentAccount(accounts[0])
            : console.log('not connected')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TransactionContext.Provider 
       value={{currentAccount,connectWallet}}
        >
            {children}
        </TransactionContext.Provider>
    )
        
}

module.exports = {
    TransactionProvider,
    TransactionContext

}