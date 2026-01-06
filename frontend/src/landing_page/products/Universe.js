import React from 'react';

function Universe() {
    return ( 
        <>
          <div className='text-center p-5'>
            <p style={{fontSize:"1.25rem"}}>Want to know more about our technology stack? Check out the <span style={{color:"#387ED1"}}>Zerodha.tech</span> blog. </p>
          </div>
          <div className='container' style={{paddingBottom:"2rem"}}>
            <div className='row text-center'>
              <h2 >The Zerodha Universe</h2>
              <p style={{fontSize:"1.125rem",marginTop:"0.91rem"}}>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center my-5'>
              <div className='col-4'>
                <div>
                  <img src="/media/img/zerodhaFundhouse.png" className='pro_universe'></img> <br></br>
                  <span className='pro_universe_text' >Our asset management venture <br></br>
                   that is creating simple and transparent index <br></br> funds to help you save for your goals.
                  </span>  
                </div>
                <div style={{paddingTop:"5rem"}}>
                  <img src="/media/img/streakLogo.png" className='pro_universe'></img> <br></br>
                  <span className='pro_universe_text'>Systematic trading platform <br></br>
                     that allows you to create and backtest <br></br>
                     strategies without coding.</span>
                </div>
              </div>
              <div className='col-4'>
                <div>
                  <img src="/media/img/sensibullLogo.svg" className='pro_universe' style={{height:"4rem"}}></img> <br></br>
                  <span className='pro_universe_text'>Options trading platform that lets you <br></br>
                  create strategies, analyze positions, and examine <br></br>
                  data points like open interest, FII/DII, and more.</span>
                </div >
                <div style={{paddingTop:"5rem"}}>
                  <img src="/media/img/smallcaseLogo.png" ></img><br></br>
                  <span className='pro_universe_text'>Thematic investing platform <br></br>
                    that helps you invest in diversified <br></br>
                    baskets of stocks on ETFs.
                  </span>
                </div>
              </div>
              <div className='col-4'>
                <div>
                  <img src="/media/img/goldenpiLogo.png" style={{height:"4rem"}} className='pro_universe'></img> <br></br>
                  <span className='pro_universe_text'>
                    Investment research platform <br></br>
                    that offers detailed insights on stocks, <br></br>
                    sectors, supply chains, and more. 
                  </span>
                </div>
                <div style={{paddingTop:"5rem"}}>
                  <img src="/media/img/dittoLogo.png" className='pro_universe' style={{height:"4rem"}}></img> <br></br>
                  <span className='pro_universe_text'>Personalized advice on life <br></br>
                    and health insurance. No spam <br></br>
                    and no mis-selling.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
     );
}

export default Universe;