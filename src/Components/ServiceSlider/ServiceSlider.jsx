import React from "react";
import { Link } from "react-router-dom";
import CardService from "../CardService/CardService";
import {
  faBriefcaseMedical,
  faSprayCanSparkles,
  faStethoscope,
  faSyringe,
  faTruckMedical,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import squareLines from "../../Assets/Square Lines.png";
import blueCircleLines from "../../Assets/blue circle lines.png";
import serviceLine from "../../Assets/footer line.png";

import "./ServiceSlider.css";
/*


*/
const ServiceSlider = () => {
  let carouselRef = useRef();
  let [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(carouselRef.current.scrollWidth);
    console.log(carouselRef.current.offsetWidth);
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <div className="ServiceSlider">
      <img src={squareLines} className="squareLines" />

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-left">
            <img src={blueCircleLines} className="blueCircleLines" />

            <h5>Services</h5>
            <h2>We Cover A Big Variety Of Medical Services</h2>
            <p>
              We provide the special tips and advice’s of heath care treatment
              and high level of best.
            </p>
            <Link to="/services" className="btn btn-serve">
              All Services
            </Link>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-6 col-sm-12 slider">
            <div className="bgg"></div>
            <motion.div ref={carouselRef} className="carousel">
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="inner-carousel"
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div className="item">
                  <CardService
                    title="Diagnostics"
                    desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
                    icon={faStethoscope}
                  />
                </motion.div>
                <motion.div className="item">
                  <CardService
                    title="Treatment"
                    desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
                    icon={faSprayCanSparkles}
                  />
                </motion.div>
                <motion.div className="item">
                  <CardService
                    title="Surgery"
                    desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
                    icon={faBriefcaseMedical}
                  />
                </motion.div>
                <motion.div className="item">
                  <CardService
                    title="Vaccine"
                    desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
                    icon={faSyringe}
                  />
                </motion.div>
                <motion.div className="item">
                  <CardService
                    title="Emergency"
                    desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
                    icon={faTruckMedical}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <img src={serviceLine} className="serviceLine" />
    </div>
  );
};

export default ServiceSlider;
