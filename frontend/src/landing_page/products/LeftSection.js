import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, Coin }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

      
        <div className="col-6 p-3">
          <img src={imageURL} alt={productName} style={{ maxWidth: "100%", paddingLeft:"6rem" }} />
        </div>

      
        <div className="col-6 pl-2" style={{ paddingLeft:"5rem" }}>
          <h2 style={{ paddingBottom:"1rem",color:"#424242" }}>{productName}</h2>
          <p style={{ maxWidth:"70%",fontSize:"1.05rem",lineHeight:"1.8" }}>{productDescription}</p>

          <div style={{ paddingBottom: "1.08rem" }}>
            {Coin && (
              <a href={Coin} style={{ textDecoration:"none", color:"#387ed1" }}>
                Coin <i style={{ marginLeft:"0.5rem" }} className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {!Coin && tryDemo && (
              <a href={tryDemo} style={{ textDecoration:"none", color:"#387ed1" }}>
                Try Demo <i style={{ marginLeft:"0.5rem" }} className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {!Coin && learnMore && (
              <a href={learnMore} style={{ marginLeft:"6rem", textDecoration:"none", color:"#387ed1" }}>
                Learn More <i style={{ marginLeft:"0.5rem" }} className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>

          {(googlePlay || appStore) && (
            <div>
              {googlePlay && (
                <a href={googlePlay}>
                  <img src="/media/img/googlePlayBadge.svg" alt="Google Play" />
                </a>
              )}
              {appStore && (
                <a href={appStore}>
                  <img src="/media/img/appstoreBadge.svg" alt="App Store" style={{ marginLeft: "2rem" }} />
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
