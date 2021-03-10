import React from "react";
import { Component } from "react";

import "./AppBar.css";

export default class AppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: false,
    };

    this.navbarRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    if (window.pageYOffset >= 128) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };
  render() {
    return (
      <nav
        ref={this.navbarRef}
        id="navbar"
        className={`AppBar ${this.state.nav && "sticky"}`}
      >
        <ul>
          <li>Countries-Data</li>
          <li>Vaccines</li>
        </ul>{" "}
      </nav>
    );
  }
}
