import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return ( 
        <>
         <div className='container mt-5'>
          <h2 className='text-center pb-4'>People</h2>
          <div className='row ' style={{paddingLeft:"9.5rem"}}>
            <div className='col-5 text-center'>
              <img src="media/img/nithinKamath.png" style={{maxWidth:"60%"}}></img>
              <h5 style={{color:"#424242",marginTop:"1rem"}}>Nithin Kamath</h5>
              <p style={{color:"#666666"}}>Founder, CEO</p>
            </div>
            <div className='col-6 pt-3'>
              <p style={{color:"#424242",fontSize:"1rem"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
              <p style={{color:"#424242",fontSize:"1rem"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
              <p style={{color:"#424242",fontSize:"1rem"}}>Playing basketball is his zen.</p>
              <p style={{color:"#424242",fontSize:"1rem"}}>Connect on <a to="/" style={{color:"#387ed1",fontSize:"1rem"}}>Homepage</a>/<a to="#" style={{color:"#387ed1",fontSize:"1rem"}}> TradingQnA</a> /<a to="#" style={{color:"#387ed1",fontSize:"1rem"}}> Twitter</a></p>
            </div>
          </div>
         </div>
        </>
     );
}

export default Team;