import { observable } from "mobx";

import { configure } from "mobx";

configure({
  enforceActions: "never",
});

class Store {
  todos = observable({
    selectedChart: "Croatia",
    selectedCountry: "",
    countriesData: [],
    allCountries: [],
    error: "",
  });
}

const store = new Store();

export default store;
