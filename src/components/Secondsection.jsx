import React from "react";
import { FaHammer } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { PiTestTubeFill } from "react-icons/pi";
import "../components/Section2.css";

const Secondsection = () => {
  return (
    <div className="section2">
      <div className="section2-1">
        <FaHammer className="hammer-icon" />
        <h2>
          Level HTML Template by <br /> Tooplate website
        </h2>
        <h4>
          You are allowed to download, edit and use this <br /> template for
          your business or client websites.
        </h4>
        <a href="#">Continue reading...</a>
      </div>
      <div className="section2-2">
        <GiCommercialAirplane className="airplane-icon" />
        <h2>
          Original Website Template <br /> Producer
        </h2>
        <h4>
          You are NOT allowed to re-distribute the <br /> downloadable template
          ZIP file on any website.
        </h4>
        <a href="#">Continue reading...</a>
      </div>
      <div className="section2-3">
        <PiTestTubeFill className="tube-icon" />
        <h2>
          Contact us if you have any <br /> question
        </h2>
        <h4>
          If you see this template being distributed on any <br /> other site,
          that is an illegal copy.
        </h4>
        <a href="#">Continue reading...</a>
      </div>
    </div>
  );
};

export default Secondsection;
