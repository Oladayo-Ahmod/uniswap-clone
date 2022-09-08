import React, { useState, useEffect } from 'react';

const Header =()=> {

    useEffect(()=>{
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    })

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <img src='/images/uniswap.webp' className='header-image'  alt="nothing" srcSet="" />
                </div>
                <div className='col-md-4'>
                    
                </div>
                <div className='col-md-4'>
                    
                </div>
            </div>
        </div>
    )
}
export default Header
