import React from "react";
import img1 from "../../Assets/contact us.jpg";
import img2 from "../../Assets/about 2.jpg";
import img3 from "../../Assets/about 3.jpg";
import square from "../../Assets/shape Square.png";
import line from "../../Assets/line shape.png";
import circle from "../../Assets/circle about.png";
import orangeSquare from "../../Assets/about square.png";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBedPulse,
  faDroplet,
  faSyringe,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
const AboutUs = () => {
  return (
    <>
      <div className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 sqr">
              <img src={square} className="img-square" />
              <div className="container-imgs">
                <img src={img1} className="img1" />
                <img src={img2} className="img2" />
                <img src={img3} className="img3" />
                <div className="experiance-box">
                  20 <span>Year Experience</span>{" "}
                </div>
                <img src={line} className="img-line" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 about-text">
              <img src={square} className="img-square2" />
              <h6>About Us</h6>
              <h2>The Great Place Of Medical Hospital Center</h2>
              <p>
                We provide the special tips and advice’s of heath care treatment
                and high level of best technology involve in the our hospital.
              </p>
              <div className="icons">
                <span className="s1">
                  <FontAwesomeIcon icon={faTruckMedical} /> Emergency Help
                </span>
                <span className="s2">
                  <FontAwesomeIcon icon={faBedPulse} /> Qualified Doctors
                </span>
                <span className="s3">
                  <FontAwesomeIcon icon={faDroplet} /> Best Professionals
                </span>
                <span className="s4">
                  <FontAwesomeIcon icon={faSyringe} /> Medical Treatment
                </span>
              </div>
              <Link to="/aboutUs" className="btn">
                Read More
              </Link>
              <img src={circle} className="img-circle" />
              <img src={orangeSquare} className="orange-square" />
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default AboutUs;
