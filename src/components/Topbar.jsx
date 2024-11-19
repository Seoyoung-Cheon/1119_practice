import React from "react";
import Logo from "../img/logo.png";
import "../components/Topbar.css";

const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="logo">
        <div className="logo-img">
          <img src={Logo} alt="logoimg" />
        </div>
        <div className="logo-name">
          <h2>Level</h2>
        </div>
      </div>
      <div className="navi">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">BLOG ENTRIES</a>
          </li>
          <li className="contact-navi">
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
