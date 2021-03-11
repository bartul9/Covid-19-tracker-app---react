import React from "react";

// Components
import Header from "./components/Header";
import CountsContainer from "./components/CountsContainer";
import VaccineCoverage from "./components/VaccineCoverage";
import AppBar from "./components/AppBar";
import SelectCountry from "./components/SelectCountry";
import Chart from "./components/Chart";
import VaccineDetails from "./components/VaccineDetails";
import Footer from "./components/Footer";

import "./App.css";

const App = function App() {
  return (
    <main className="App">
      {" "}
      <Header />
      <AppBar />
      <SelectCountry />
      <CountsContainer />
      <Chart />
      <VaccineCoverage />
      <VaccineDetails />
      <Footer />
    </main>
  );
};

export default App;
