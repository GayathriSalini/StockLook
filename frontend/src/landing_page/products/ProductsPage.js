import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
          <Hero/>

          <LeftSection 
            imageURL="/media/img/kite.png"
            productName="Kite"
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
            tryDemo="/kite-demo"
            learnMore="/kite-learn"
            googlePlay="/media/img/googlePlayBadge.svg"
            appStore="/media/img/appstoreBadge.svg"
          />

          <RightSection 
          productName="Console"
          productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
          learnMore="/learn-More"
          imageURL="/media/img/console.png"
          />
          
          <LeftSection 
            imageURL="/media/img/coin.png"
            productName="Coin"
            productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
            Coin ="/Coin"
            googlePlay="/media/img/googlePlayBadge.svg"
            appStore="/media/img/appstoreBadge.svg"
          />

          <RightSection 
            productName="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            kiteConnect="/kite_connect"
            imageURL="/media/img/kiteconnect.png"
          />
 
          <LeftSection 
            imageURL="/media/img/varsity.png"
            productName="Varsity mobile"
            productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            googlePlay="/media/img/googlePlayBadge.svg"
            appStore="/media/img/appstoreBadge.svg"
          />


          <Universe/>
        </>
     );
}

export default ProductPage;
