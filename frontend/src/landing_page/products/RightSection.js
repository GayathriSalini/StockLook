import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore,kiteConnect}) {
    return ( 
        <>
          <div className="container mt-3 ">
      <div className="row align-items-center"> 
      <div className="col-6 pl-2" style={{paddingLeft:"5rem"}}>
          <h2 style={{paddingBottom:"1rem",color:"#424242"}}>{productName}</h2>
          <p style={{maxWidth:"70%",fontSize:"1.05rem",lineHeight:"1.8"}}>{productDescription}</p>

          <div style={{ paddingBottom: "1.08rem" }}>
           {learnMore && (
                <a href={learnMore} style={{ textDecoration: "none", color: "#387ed1" }}>
                Learn more <i style={{ marginLeft: "0.5rem" }} className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
           )}
           {!learnMore && kiteConnect && (
               <a href={kiteConnect} style={{ textDecoration: "none", color: "#387ed1" }}>
                   Kite Connect<i style={{ marginLeft: "0.5rem" }} className="fa fa-long-arrow-right" aria-hidden="true"></i>
               </a>
           )}
            
          </div>
        </div>
   
        <div className="col-6 p-3">
          <img src={imageURL} alt={productName} style={{ maxWidth: "100%",paddingLeft:"6rem" }} />
        </div>

       </div>
      </div>
        </>
     );
}

export default RightSection;
