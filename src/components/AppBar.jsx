import React, { useEffect, useState } from "react";

import "./AppBar.css";

import { totop } from "../images/index";

const Bar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset >= 128) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  return (
    <nav id="navbar" className={`AppBar ${nav && "sticky"}`}>
      <ul>
        <li>
          <a href="#countries-href">Countries</a>
        </li>
        <li>
          <a href="#VaccineDetails-h2">Vaccine</a>
        </li>
      </ul>{" "}
      {nav && (
        <a href="#top">
          <img className="BackToTop" src={totop} alt="backtotop" />
        </a>
      )}
    </nav>
  );
};
export default Bar;
