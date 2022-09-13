import React, { useState, useEffect } from 'react';

const TransactionContext = React.createContext()

let eth
if (window.ethereum !== 'undefined') {
    eth = window.ethereum
}

const TransactionProvider = ({children})=>{
    const [currentAccount,setCurrentAccount] = useState()
    const connectWallet = async (metamask = eth)=>{
        if (!metamask) {
            console.log('please, install metamask') 
        }
        else{
            const accounts = await metamask.request({method : 'eth_requestAccounts'})
            setCurrentAccount(accounts[0])
        }
    }
    

    return (
        <TransactionContext.Provider 
        value={
            {currentAccount,
            connectWallet}
        }
        >
            {children}
        </TransactionContext.Provider>
    )
        
}

module.exports = {
    TransactionContext,
    TransactionProvider
}