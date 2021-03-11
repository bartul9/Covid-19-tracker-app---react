import React from "react";

import Counts from "./Counts";
import LastUpdate from "./LastUpdate";
import Spinner from "./Spinner";

import { recoveredImg, death, cough } from "../images/index";

import "./CountsContainer.css";

import { inject, observer } from "mobx-react";

const CountsContainer = inject("store")(
  observer(({ store }) => {
    const {
      lastUpdate,
      confirmed,
      deaths,
      recovered,
    } = store.todos.countriesData;
    return !lastUpdate ? (
      <Spinner />
    ) : (
      <section className="CountsContainer">
        {" "}
        <span id="countries-href"></span>
        <LastUpdate />
        <div>
          <Counts
            key={1}
            title={"Infected"}
            colorStyle={"orange"}
            backgroundColor={"#ffa60030"}
            text={"active cases of"}
            numbers={confirmed}
            icon={cough}
          />
          <Counts
            key={2}
            title={"Deaths"}
            text={"recoveries from"}
            colorStyle={"#ff6961"}
            backgroundColor={"#ff696120"}
            numbers={deaths}
            icon={death}
          />
          <Counts
            key={3}
            title={"Recovered"}
            text={"deaths caused by"}
            colorStyle={"#32CD32"}
            backgroundColor={"#32cd3220"}
            numbers={recovered}
            icon={recoveredImg}
          />
        </div>{" "}
      </section>
    );
  })
);

export default CountsContainer;
