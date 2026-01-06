import React from 'react';

function Hero() {
    return ( 
        <>
           <div className='container mt-5'>
            <div className='row text-center' style={{paddingBottom:"6rem"}}>
               <h1 style={{paddingTop:"4rem"}}>Charges</h1>
               <p style={{color:"#9b9b9b",fontSize:"1.25rem"}}>List of all charges and taxes</p>
            </div>
            <div className='row' style={{paddingBottom:"2rem"}}>
               <div className='col-4 text-center'>
                  <img src="/media/img/pricing0.svg" style={{maxWidth:"90%"}}></img>
                  <h2>Free equity delivery</h2>
                  <p style={{color:"#666666",paddingTop:"1rem",maxWidth:"90%"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p> 
               </div>
               <div className='col-4 text-center'>
                   <img src="/media/img/pricing-eq20.svg" style={{maxWidth:"90%"}}></img>
                  <h2>Intraday and F&O trades</h2>
                  <p style={{color:"#666666",paddingTop:"1rem",maxWidth:"90%"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p> 
               </div>
               <div className='col-4 text-center'>
                  <img src="/media/img/pricing0.svg" style={{maxWidth:"90%"}}></img>
                  <h2>Free direct MF</h2>
                  <p style={{color:"#666666",paddingTop:"1rem",maxWidth:"90%"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p> 
               </div>
            </div>    
                     
           </div>
        </>
     );
}

export default Hero;