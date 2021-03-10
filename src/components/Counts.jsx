import React from "react";

import "./Counts.css";

function Counts(props) {
  return (
    <article
      style={{
        border: `1px solid ${props.colorStyle}`,
        borderBottom: `3px solid ${props.colorStyle}`,
        backgroundColor: `${props.backgroundColor}`,
      }}
      className="Counts"
    >
      <h2
        style={{
          color: `${props.colorStyle}`,
        }}
      >
        {props.title}
      </h2>
      <h3>{props.numbers.value}</h3>
      <p>Number of {props.text} COVID-19</p>
    </article>
  );
}

export default Counts;
