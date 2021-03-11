import React from "react";

import { inject, observer } from "mobx-react";

import "./LastUpdate.css";

const LastUpdate = inject("store")(
  observer(({ store }) => {
    const { selectedChart } = store.todos;
    const { lastUpdate } = store.todos.countriesData;
    return (
      <div className="LastUpdate">
        <h1>{selectedChart}</h1>
        <h5>Last Update:</h5>
        <h4>
          {lastUpdate &&
            lastUpdate.slice(0, 10) +
              " " +
              lastUpdate.slice(11, -5) +
              " " +
              "UTC"}
        </h4>
      </div>
    );
  })
);

export default LastUpdate;
