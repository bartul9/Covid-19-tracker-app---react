import React, { Component } from "react";

import "./Header.css";

import { image } from "../images/index";

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={image} alt="corona-img" />
        {/* <h1>COVID - 19</h1> */}
      </header>
    );
  }
}
