'use client'
import "../Design/Heder.css";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";

const Header = () => {
  const [bar, setBar] = useState(true);
  const postData = () => {
    alert('data')
  }
  return (
    <div>
      <div className="Countuner">
        <div className="navBar">
          <div className="logo">Travel</div>
          <div className={bar ? "menu hide" : "menu show"}>
            <p>Home</p>
            <p>Service</p>
            <p>Destination</p>
            <p>Contact Us</p>
          </div>
          <div className="ICON">
            <HiMiniBars3CenterLeft onClick={() => setBar(!bar)} />
          </div>
        </div>
        <div className="BoldText">Fuel Mind Travel</div>
        <div className="smallText">
          Enthusiastically extend extensive Customer service before best breed
          convergence company.
        </div>
        <div className="BTN">
          <button
            onClick={() => {
              postData();
            }}
          >
            Let's go 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
