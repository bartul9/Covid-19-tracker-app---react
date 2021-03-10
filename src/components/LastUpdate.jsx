import React from "react";

import { inject, observer } from "mobx-react";

import "./LastUpdate.css";

function LastUpdate(props) {
  return (
    <div className="LastUpdate">
      <h1>{props.store.todos.selectedChart}</h1>
      <h5>Last Update:</h5>
      <h4>
        {props.store.todos.countriesData.lastUpdate &&
          props.store.todos.countriesData.lastUpdate.slice(0, 10) +
            " " +
            props.store.todos.countriesData.lastUpdate.slice(11, -5) +
            " " +
            "UTC"}
      </h4>
    </div>
  );
}

export default inject("store")(observer(LastUpdate));
