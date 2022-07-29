import React from "react";
import './footer.css'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';


function FooterTest() {
  

  return (
    <div className="footer-container">
       <div className="footer-title-central">
            <h4>Follow Us</h4>
       </div>
       <div className="socialmedia">

            <div><a className="item-socialmedia" href="/"><MdFacebook /></a></div>
            <div><a className="item-socialmedia" href="/"><AiFillInstagram /></a></div>
            <div><a className="item-socialmedia" href="/"><AiFillTwitterCircle /></a></div>
       </div>
       <div className="container-links-footer">
            <div className="container-links-footer-one">
                <h5 className="title-item-footer">About Us</h5>
                <p className="text-footer">We want to help passangers </p>
                <p className="text-footer">to reach their destinations</p>
            </div>
            <div className="container-links-footer-two">
                <div className="section-item">
                    
                    <div>
                        <ul>
                            <li className="title-item-footer">
                            Explore
                            </li>
                            <li className="item-footer">
                                <a href="/">Home</a>
                            </li>
                            <li className="item-footer">
                                <a href="/">Destinations</a>
                            </li>
                            <li className="item-footer">
                                <a href="/">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="section-item">
                    
                    <div>
                        <ul>
                            <li className="title-item-footer">
                            Information
                            </li>
                            <li className="item-footer">
                                <a href="/">More search</a>
                            </li>
                            <li className="item-footer">
                                <a href="/">Blog</a>
                            </li>
                            <li className="item-footer">
                                <a href="/">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="section-item">
                    
                    <div>
                        <ul>
                            <li className="title-item-footer">
                                Services
                            </li>
                            <li className="item-footer">
                                <a href="/">Manage My Booking</a>
                            </li>
                            <li className="item-footer">
                                <a href="/">Cheking</a>
                            </li>
                            <li className="item-footer">
                                <a href="/">Hotel</a>
                            </li>
                            <li className="item-footer">
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