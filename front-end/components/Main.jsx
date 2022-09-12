import React, { useState, useEffect } from 'react';


const Main =()=>{
    useEffect(()=>{
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    })

    return (
       
        <div>
            <style jsx>
                {
            `.rounded-bg{
                background-color:#191B1F;
                height:300px;
            }
            `
            }

            </style>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 mt-5 rounded rounded-bg px-2">
                       <div className="col-md-12 pt-2 d-flex justify-content-between">
                            <p className='text-white font-bold'>Swap</p>
                            <p className='text-white font-bold'>2</p>
                       </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Main