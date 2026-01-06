import React from 'react';

function OpenAccount() {
    return (
        <>
          <div className='container mt-5' style={{paddingBottom:"4rem",marginTop:"3rem"}}>
            <div className='row text-center'>
                <h2 className='mb-4'>Open a Zerodha account</h2>  
                <p className='mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 ' style={{width:"20%", margin:"0 auto",}}>Sign up for free</button>
            </div>  
          </div>
        </>
      );
}

export default OpenAccount;