import React, { useEffect, useState } from "react";

import axios from "axios";

import { inject, observer } from "mobx-react";

import "./SelectCountry.css";

const SelectCountry = inject("store")(
  observer(({ store }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchAllCountries = async () => {
        const countries = await axios.get(
          "https://covid19.mathdro.id/api/countries"
        );
        const country = await axios.get(
          "https://covid19.mathdro.id/api/countries/croatia"
        );
        store.todos.countriesData = country.data;
        setData(countries.data.countries);
      };
      fetchAllCountries();
    }, []);

    const fetchCountry = async (e) => {
      store.todos.selectedChart = e.target.value;
      const response = await axios.get(
        `https://covid19.mathdro.id/api/countries/${e.target.value}`
      );
      store.todos.countriesData = response.data;
    };

    return (
      <div className="SelectCountry">
        <select onChange={fetchCountry} id="countries" name="countries">
          <option value="world">---</option>
          <option value="world">World</option>
          {data.map((country) => (
            <option key={country.name}>{country.name}</option>
          ))}
        </select>
      </div>
    );
  })
);

export default SelectCountry;
