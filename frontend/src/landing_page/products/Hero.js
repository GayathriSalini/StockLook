import React from 'react';

function Hero() {
    return ( 
        <>
          <div className='container mt-5'>
            <div className='row text-center border-bottom pb-5' style={{paddingTop:"4rem"}}>
              <h2 style={{color:"#424242"}}>Zerodha Products</h2>
              <p style={{color:"#424242",fontSize:"1.125rem",fontWeight:"400",marginTop:"1rem"}}>Sleek, modern, and intuitive trading platforms</p>
              <p style={{color:"#424242"}}>Check out our <span style={{color:"#387ed1"}}>investment offerings →</span></p>
            </div>
          </div>
        </>
     );
}

export default Hero;