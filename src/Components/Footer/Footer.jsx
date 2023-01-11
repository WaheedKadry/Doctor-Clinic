import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import fLine from "../../Assets/footer line.png";
import fCircle from "../../Assets/footer circle.png";
import fPlus from "../../Assets/footer plus.png";
import facebook from "../../Assets/facebook.png";
import skybe from "../../Assets/skybe.png";
import instigram from "../../Assets/instigram.png";
import linked from "../../Assets/linked in.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
   
      <img src={fLine} className='f-line'/>
        <div className="row">
          <div className="col-md-4 col-lg-3 col-sm-6">
            <img src={logo} className='f-logo' />
            <p>
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} className="" />
              </div>
              <div className="footer-text">
                <h6>Contact Us</h6>
                <h4>+01 123 456 7890</h4>
              </div>
            </div>
      <img src={fCircle} className='f-circle'/>

          </div>
          <div className="col-md-4 col-lg-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#"> Booking</a>
              </li>
              <li>
                <a href="#"> Faq's</a>
              </li>
              <li>
                <a href="#"> Blogs</a>
              </li>
              <li>
                <a href="#">Out Team</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-sm-6">
            <h2>Our Service</h2>
            <ul>
              <li>
                <a href="#">Dental Care</a>
              </li>
              <li>
                <a href="#">Cardiac Clinic</a>
              </li>
              <li>
                <a href="#">Massege Therapy</a>
              </li>
              <li>
                <a href="#">Cardiology</a>
              </li>
              <li>
                <a href="#">Precise Diagnosis</a>
              </li>
              <li>
                <a href="#">Abmbulance Services </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 container-f-line">
          <img src={fPlus} className='f-plus'/>

            <h2>Subcribe</h2>
            <form>
              <input type="email" placeholder="E-mail Address" />
              <button type="sibmit">Subcribe Now</button>
            
            <ul className="social">
              <li>
                <a href="#">
                  <img src={facebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={skybe} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instigram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linked} />
                </a>
              </li>
            </ul></form>
            <img src={fLine} className='f-line'/>
          </div>
        </div>
        </div>
        
        <div className="copyRight">
        Copyright © 2022 Design & Developed by
        <span> <a href="#">ThemeTrades</a> </span>
        </div>
      
    </footer>
  );
};

export default Footer;
