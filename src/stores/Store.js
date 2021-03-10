import { observable } from "mobx";

import axios from "axios";

class Store {
  todos = observable({
    selectedChart: "Croatia",
    selectedCountry: "",
    countriesData: [],
    allCountries: [],
  });
}

const store = new Store();

export default store;
