import React from "react";
import './cover.css'


function NavTest() {
  

  return (
    <div className="cover">
        <div className="nav-test">
            <div className="logo-test">
                 <p className="logo">AIRLINE</p>
            </div>
            <div className="nav-menu">
                <div className="lenguage-test">
                    <p className="text-lenguage">en</p>
                    <div className="icon-lenguage">
                        <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"  width="15" height="15" ><path d="M81.846 25.388a6.024 6.024 0 0 0-8.45.768L48 56.626l-25.396-30.47a5.999 5.999 0 1 0-9.211 7.688l30.002 36.002a5.997 5.997 0 0 0 9.211 0l30.002-36.002a6.008 6.008 0 0 0-.762-8.456z"/></svg>
                    </div>
                </div>
                <div className="nav-menu-items">
                        <a href="/" className="list-item-nav">Home</a>
                        <a href="/" className="list-item-nav">About</a>
                        <a href="/" className="list-item-nav">Destinations</a>
                        <a href="/" className="list-item-nav">Contact</a>
                </div>
            </div>  
        </div>

    
    <div className="container-title">
        <h1 className="title-page">Visit Canada with prices from $800 </h1>
        <div className="subtitle">
            <h4 className="text-title">Prepare your bags and forget your worries 
                
            </h4>
            <h4 className="text-title">
                to start enjoying your holidays in this fantastic country
            </h4>
        </div>
        <div className="container-cta">
            <a className="cta" href="" >BUY NOW</a>
        </div>
    </div>
    
    


    </div>
  )
}

export default NavTest