import React, { useState, useEffect, useContext } from 'react';
import {TransactionContext} from '../context/TransactionContext'
const Header =()=> {
    const {connectWallet,currentAccount} = useContext(TransactionContext)
    console.log(currentAccount);
    // console.log({connectWallet,currentAccount})
    useEffect(()=>{
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    })

    return (
        <div>
            <style jsx>
                {
                    `
                    .rounded-bg{
                        background-color:#191B1F;
                        height : 50px;
                    }
                    .rounded-bg >.row>div{
                        margin-left: -10px;
                        /* right: 10px !important; */
                        position: relative;
                        left:0px;
                    }
                    .rounded-child{
                        cursor:pointer;
                        background-color:#20242A;
                        width:fit-content;
                        width:auto;
                    }
                    .wallet-address{
                        background-color:#191B1F;
                        height: 45px;
                        padding :10px 30px;
                    }
                    .wallet-address p{
                        font-size : small;
                        font-weight :500;
                    }
                    `
                }
            </style>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4 mt-2 '>
                        <img src='/images/uniswap.webp' className='header-image'  alt="nothing" srcSet="" />
                    </div>
                    <div className='col-md-3 mt-2 p-1'>
                        <div className='rounded-pill rounded-bg'>
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-3">
                                    <div className="rounded-child rounded-pill text-center rounded-child text-white py-2 mt-1">
                                        <span>Swap</span>
                                    </div>
                                </div>
                                <div className="col-md-3">

                                    <div className="rounded-child rounded-pill text-center rounded-child text-white py-2 mt-1">
                                        <span>Pool</span>
                                    </div>
                                    </div>
                                <div className="col-md-3">
                                    <div className="rounded-child rounded-pill text-center rounded-child text-white py-2 mt-1">
                                        <span>Vote</span>
                                    </div>
                                    </div>
                                <div className="col-md-3">
                                    <div className="rounded-child rounded-pill text-center rounded-child text-white py-2 mt-1">
                                        <span>Charts</span>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 mt-2 p-2'>
                        <div className="row">
                            <div className="col-md-5 px-5 ">
                                    {currentAccount && (
                                <div className='wallet-address rounded-pill'> 

                                        <p className='text-white font-lighter'>
                                            {currentAccount.slice(0,6)}...{currentAccount.slice(currentAccount.length -4)}
                                        </p>
                                </div>

                                    ) }
                                    
                            </div>
                            <div className="col-md-7">
                                <div>
                                    {connectWallet ? (
                                         <button className='btn btn-primary rounded-pill' disabled>Connected</button>
                                    ) : (
                                        <button className='btn btn-primary rounded-pill' onClick={() =>connectWallet()}>Connect Wallet</button>
                                    )}
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
