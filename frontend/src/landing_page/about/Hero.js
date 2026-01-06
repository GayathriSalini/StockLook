import React from 'react';

function Hero() {
    return ( 
       <>
         <div className='container mt-5 '>
          <div className='row'>
            <div className='text-center border-bottom '  style={{paddingTop:"6.25rem",paddingBottom:"5rem"}}>
              <h2>We pioneered the discount broking model in India.<br></br>
               Now, we are breaking ground with our technology.</h2>
            </div> 
            <div style={{paddingLeft:"8rem"}}>
            <div className='row ' style={{paddingLeft:"9rem",paddingTop:"5rem"}}>
              <div className='col-6' style={{maxWidth:"40%"}}>
                <p style={{fontSize:"1rem",lineHeight:"1.8"}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                <p style={{fontSize:"1rem",lineHeight:"1.8"}}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                <p style={{fontSize:"1rem",lineHeight:"1.8"}}>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
              </div>
              <div className='col-6' style={{maxWidth:"40%",paddingLeft:"3rem"}}>
                <p style={{fontSize:"1rem",lineHeight:"1.8"}}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                <p style={{fontSize:"1rem",lineHeight:"1.8"}}><span  style={{color:"#387ed1",fontSize:"1rem"}}>Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                <p  style={{fontSize:"1rem",lineHeight:"1.8"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our<span style={{color:"#387ed1",fontSize:"1rem"}}>blog</span> blog or see what the media is <span style={{color:"#387ed1",fontSize:"1rem"}}>saying about</span> us or learn more about our business and product  <span style={{color:"#387ed1",fontSize:"1rem"}}>philosophies.</span></p>
              </div>
            </div>
            </div>
          </div>
         </div>
       </>
     );
}

export default Hero;