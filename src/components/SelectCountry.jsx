import React, { Component } from "react";

import axios from "axios";

import { inject, observer } from "mobx-react";

import "./SelectCountry.css";

class SelectCountry extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, data: [] };
    this.fetchCountry = this.fetchCountry.bind(this);
  }

  componentDidMount() {
    const fetchAllCountries = async () => {
      const countries = await axios.get(
        "https://covid19.mathdro.id/api/countries"
      );
      const country = await axios.get(
        "https://covid19.mathdro.id/api/countries/croatia"
      );
      this.props.store.todos.countriesData = country.data;
      this.setState({ data: countries.data.countries });
    };
    fetchAllCountries();
  }

  async fetchCountry(e = "Croatia") {
    this.props.store.todos.selectedChart = e.target.value;
    const response = await axios.get(
      `https://covid19.mathdro.id/api/countries/${e.target.value}`
    );
    this.props.store.todos.countriesData = response.data;
  }

  render() {
    return (
      <div className="SelectCountry">
        <select onChange={this.fetchCountry} id="countries" name="countries">
          <option value="world">---</option>
          <option value="world">World</option>
          {this.state.data.map((country) => (
            <option key={country.name}>{country.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default inject("store")(observer(SelectCountry));
