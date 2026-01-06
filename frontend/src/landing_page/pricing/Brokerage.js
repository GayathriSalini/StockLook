import React from 'react';

function Brokerage() {
  return (
    <>
      <div className='container'>
        <div className='row p-5 mt-5  border-top'>
          <div className='col-8 p-4'>
            <a herf="#" style={{color:"#387ed1"}}> <h3 style={{paddingBottom:"1rem"}} className='fs-5 p-3 text-center'>Brokerage Calculator</h3></a>
            <ul style={{textAlign:"left", lineHeight:"1.8"}} >
              <li >Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>
              <li >Digital contract notes will be sent via e-mail.</li>
              <li >Physical copies of contract notes, if required, shall be changed ₹20 per contract note. Courier charges apply.</li>
              <li >For NRI account (non-PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
              <li >If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per excuted order.</li>
            </ul>
          </div>
          <div className='col-4 p-4'>
            <a herf="#" style={{color:"#387ed1"}}><h3 style={{paddingBottom:"1rem"}} className='fs-5 text-center'>List of Charges</h3></a> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
