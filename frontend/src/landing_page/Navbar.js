import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        {/* <div className="container mt-3"> */}
          <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
          <div class="container p-2">
           <Link class="navbar-brand" to="/"><img src="/media/img/logo.svg" style={{maxWidth:"25%"}} ></img></Link>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <form class="d-flex" role="search">
               <ul class="navbar-nav  mb-lg-0">
               <li class="nav-item">
                 <Link class="nav-link active" style={{color:"#666"}} aria-current="page" to="/login">Login</Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link active" style={{color:"#666"}} to="/about">About</Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link active" style={{color:"#666"}} to="/product">Product</Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link active" style={{color:"#666"}} to="/pricing">Pricing</Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link active" style={{color:"#666"}} to="/support">Support</Link>
               </li>
               </ul>
             </form>
           </div>
           <i class="fa-solid fa-bars " style={{paddingRight:"6rem"}}></i>
          </div>
          
          </nav>
        {/* </div> */}
        </>
    )
};

export default Navbar;