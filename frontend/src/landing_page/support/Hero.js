import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h3 className="fs-3" style={{paddingBottom:"1rem"}}>
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input placeholder="Eg. how do I activate F&O"  />
          <br></br>
          <div style={{paddingTop:"1rem"}}>
          <a href="" style={{paddingRight:"1rem"}}>Track account opening</a>
          <a href="" style={{paddingRight:"1rem"}}>Track segment activation</a>
          <a href="" style={{paddingRight:"1rem"}}>Intraday margins</a>
          <a href="" style={{paddingRight:"1rem"}}>Kite user manual</a></div>
          
        </div>
        <div className="col-6 p-3">
          <h3 className="fs-3">Featured</h3>
          <ol>
            <li >
              <a  href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li  style={{paddingTop:"0.5rem"}}>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;