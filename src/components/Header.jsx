import React from "react";

import "./Header.css";

import { rotating } from "../images/index";

const Header = () => {
  return (
    <header className="Header">
      {" "}
      <span className="Header-span-c">C</span>
      <img className="image" src={rotating} alt="corona-img" />{" "}
      <span className="Header-span-vid">VID - 19</span>
    </header>
  );
};

export default Header;
