import React, { Component } from "react";

import Counts from "./Counts";
import LastUpdate from "./LastUpdate";

import "./CountsContainer.css";
import { inject, observer } from "mobx-react";

class CountsContainer extends Component {
  render() {
    return !this.props.store.todos.countriesData.lastUpdate ? (
      <h1 className="CountsContainer-loading">Loading...</h1>
    ) : (
      <section className="CountsContainer">
        {" "}
        <LastUpdate />
        <div>
          <Counts
            key={1}
            title={"Infected"}
            colorStyle={"orange"}
            backgroundColor={"#ffa60030"}
            text={"active cases of"}
            numbers={this.props.store.todos.countriesData.confirmed}
          />
          <Counts
            key={2}
            title={"Deaths"}
            text={"recoveries from"}
            colorStyle={"#ff6961"}
            backgroundColor={"#ff696120"}
            numbers={this.props.store.todos.countriesData.deaths}
          />
          <Counts
            key={3}
            title={"Recovered"}
            text={"deaths caused by"}
            colorStyle={"#32CD32"}
            backgroundColor={"#32cd3220"}
            numbers={this.props.store.todos.countriesData.recovered}
          />
        </div>{" "}
      </section>
    );
  }
}

export default inject("store")(observer(CountsContainer));
