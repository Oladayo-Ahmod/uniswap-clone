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
            input{
                background :#20242A;
                border-color : #20242A;
                height : 80px;
            }
            .input-group span{
                background-color :#2D242F;
                border-color :#2D242F;
            }
            `
            }

            </style>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 mt-5 rounded rounded-bg px-2">
                       <div className="col-md-12 pt-2 d-flex justify-content-between">
                            <p className='text-white font-bold'>Swap</p>
                            <div className="dropdown">
                            <button className="btn shadow btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Eth
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </div>
                       </div>
                       <div className="col-md-12 pt-2 d-flex justify-content-between">
                           <div className="input-group">
                            <span className='input-group-text text-white'>0.0</span>
                             <input type="text"
                               className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                           </div>
                       </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Main