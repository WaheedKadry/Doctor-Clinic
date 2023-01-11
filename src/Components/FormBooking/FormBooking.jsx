import React from "react";
import "./FormBooking.css";
import mobile from "../../Assets/booking mobile.png";
import Women from "../../Assets/booking Women.png";
import message from "../../Assets/booking message.png";
import True from "../../Assets/booking true.png";
import location from "../../Assets/booking location.png";
import setting from "../../Assets/booking setting.png";
import blueLine from "../../Assets/footer line.png";
import triangle from "../../Assets/Triangle shape.png";
import orangeLine from "../../Assets/line shape.png";
import orangeCircle from "../../Assets/area circle.png";

/**

 */
const FormBooking = () => {
  return (
    <div className="FormBooking">
      <img src={orangeCircle} className="orangeCircle-2" />
      <img src={blueLine} className="blueLine" />
      <div className="container">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 form-book">
          <img src={triangle} className="triangle" />
          <div className="after-form">
            <form>
              <h2>Book Appointment</h2>
              <div className="con-f">
                <select>
                  <option value="Select Department">Select Department</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
              <div className="con-f">
                <select>
                  <option value="Select Doctor">Select Doctor</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
              <div className="con-f">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="con-f">
                <input type="number" placeholder="Phone Nambers" />
              </div>
              <div className="con-f con-date">
                <input type="date" placeholder="mm/dd/yyyy" />
              </div>
              <div className="con-f">
                <a href="" className="btn">
                  Appointment Now
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 img-animation">
          <div className="container-images">
            <img src={mobile} className="mobile" />
            <img src={Women} className="Women" />
            <div className="imgs">
              <img src={message} className="message" />
              <img src={True} className="True" />
              <img src={location} className="location" />
              <img src={setting} className="setting" />
            </div>
          </div>
        </div>
      </div>

      <img src={orangeLine} className="orangeLine" />
    </div>
  );
};
export default FormBooking;
