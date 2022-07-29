import React from "react";
import './offer.css'


function OfferTest() {
  

  return (
    <div className="offers-container">
        <div className="cover-offer-one">
            <div className="text-card">
                <h5 className="title-offer">Trip to Moscow</h5>
                <div>
                    <h3 className="subtitle-offer">Price $600,86</h3>
                </div>
            </div>
        </div>
        <div className="cover-offer-two">
            <div className="text-card">
                <h5 className="title-offer">Trip to Puerto Rico</h5>
                <div>
                    <h3 className="subtitle-offer">Price $600,86</h3>
                </div>
            </div>
        </div>
        <div className="cover-offer-three">
            <div className="text-card">
                <h5 className="title-offer">Trip to Honduras</h5>
                <div>
                    <h3 className="subtitle-offer">Price $600,86</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OfferTest