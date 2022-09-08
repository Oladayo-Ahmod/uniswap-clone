import React, { useState, useEffect } from 'react';

const Header =()=> {
    useEffect(()=>{
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    })

    return (
        <div>
            <h1 className='text-primary'>Hello World</h1>
        </div>
    )
}
export default Header
