import React from 'react';

function Pricing() {
  return ( 
    <>
      <div className="container mt-8">
        <div className="row">
        
          <div className="col-md-6">
            <h2>Unbeatable pricing</h2>
            <p>
              We pioneered the concept of discount broking and price transparency in India. 
              Flat fees and no hidden charges.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="col-md-6 mt-2">
          <div className="row text-center">
              <div className="col d-flex align-items-center justify-content-center">
                <h1 style={{color:"orange", fontSize:"3rem", marginRight:"10px"}}><span style={{ fontSize: "1rem", verticalAlign: "super" }}>₹</span>0</h1>
                <p className="mb-0" style={{fontSize:"0.9rem"}}>Free account opening</p>
              </div>
              <div className="col  d-flex align-items-center justify-content-center">
                <h1 style={{color:"orange", fontSize:"3rem", marginRight:"10px"}}><span style={{ fontSize: "1rem", verticalAlign: "super" }}>₹</span>0</h1>
                <p className="mb-0" style={{fontSize:"0.9rem"}}>Free equity delivery and direct mutual funds</p>
              </div>
              <div className="col  d-flex align-items-center justify-content-center">
                <h1 style={{color:"orange", fontSize:"3rem", marginRight:"10px"}}><span style={{ fontSize: "1rem", verticalAlign: "super" }}>₹</span>20</h1>
                <p className="mb-0" style={{fontSize:"0.9rem",maxWidth:"100px"}}>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
