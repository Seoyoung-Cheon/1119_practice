import React from "react";
import Main from "../img/bg-img-1.jpg";
import "../components/Topbar.css";

const Mainsection = () => {
  return (
    <div className="main-section">
      <div className="mainimg">
        <img src={Main} alt="mainimg" />
        <div className="inside-input"></div>
      </div>
      <div className="section1">
        <h1 className="section1-title">We are here to help you?</h1>
        <h4 className="section1-sub">Subscribe to get our newsletters</h4>
        <button className="setion1-btn">SUBSCRIBE NEWLETTERS</button>
      </div>
      <div className="section1-arrow"></div>
    </div>
  );
};

export default Mainsection;
