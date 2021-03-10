import React from "react";

// Components
import Header from "./components/Header";
import CountsContainer from "./components/CountsContainer";
import VaccineCoverage from "./components/VaccineCoverage";
import AppBar from "./components/AppBar";
import SelectCountry from "./components/SelectCountry";
import Chart from "./components/Chart";

import { inject } from "mobx-react";

import "./App.css";

const App = inject("store")(function App(props) {
  return (
    <main className="App">
      {" "}
      <Header />
      <AppBar />
      <SelectCountry />
      <CountsContainer />
      <Chart />
      <VaccineCoverage />
    </main>
  );
});

export default App;
