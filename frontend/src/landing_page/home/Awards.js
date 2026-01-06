import React from "react";

function Awards() {
    return ( 
        <>
           <div className="container mt-5">
              <div className="row">
                  <div className="col-6 p-5">
                  <img src="/media/img/largestBroker.svg" alt="largest broker" />
                  </div>
                  <div className="col-6 p-5 mt-3">
                     <h1>Largest stock broker in India</h1>
                     <p className="mb-5">2+ million Zerodha clients contribute to over 15% of the all retail order volumes in India daily by trading and trading in: </p>
                     <div className='row pb-3'>
                        <div className="col-6 ">
                           <ul>
                             <li>
                                <p>Future and Options</p>
                             </li>
                             <li>
                                <p>Commodity derivatives</p>
                             </li>
                             <li>
                                <p>Currency derivatives</p>
                             </li>
                           </ul>
                        </div>
                        <div className="col-6">
                             <ul>
                               <li>
                                 <p>Stocks & IPOs</p>
                               </li>
                               <li>
                                 <p>Direct mutual funds</p>
                               </li>
                               <li>
                                 <p>Bonds and Govt. Securities</p>
                               </li>
                             </ul>
                        </div>
                       
                     </div>
                     <img src="/media/img/pressLogos.png" style={{width:"80%"}}></img>
                  </div>
              </div>
           </div>
        </>
     );
}

export default Awards;  