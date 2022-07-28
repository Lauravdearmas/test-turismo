import React from "react";
import './footer.css'


function FooterTest() {
  

  return (
    <div className="footer-container">
       <div>
            <h4>Follow Us</h4>
       </div>
       <div>
            <div><a href="/">1</a></div>
            <div><a href="/">2</a></div>
            <div><a href="/">3</a></div>
       </div>
       <div>
            <div>
                <h5 className="title-item-footer">About Us</h5>
                <p>We want to help passangers to reach their destinations</p>
            </div>
            <div>
                <div>
                    <h5 className="title-item-footer">Explore</h5>
                    <div>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">Destinations</a>
                            </li>
                            <li>
                                <a href="/">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h5 className="title-item-footer">Information</h5>
                    <div>
                        <ul>
                            <li>
                                <a href="/">More search</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                            <li>
                                <a href="/">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h5 className="title-item-footer">Services</h5>
                    <div>
                        <ul>
                            <li>
                                <a href="/">Manage My Booking</a>
                            </li>
                            <li>
                                <a href="/">Chekin</a>
                            </li>
                            <li>
                                <a href="/">Hotel</a>
                            </li>
                            <li>
                                <a href="/">Cars</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       </div>

    </div>
  )
}

export default FooterTest