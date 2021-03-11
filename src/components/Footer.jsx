import React from "react";

import "./Footer.css";

import { mask, distancing, handgel } from "../images/index";

const Footer = () => {
  return (
    <footer className="Footer">
      <div>
        <span>Wear Mask</span>
        <img src={mask} alt="mask-icon" />
      </div>
      <div>
        <span>Keep Distance</span>
        <img src={distancing} alt="distancing-icon" />
      </div>
      <div>
        <span>Wash Hands</span>
        <img src={handgel} alt="handgel-icon" />
      </div>
    </footer>
  );
};
export default Footer;
