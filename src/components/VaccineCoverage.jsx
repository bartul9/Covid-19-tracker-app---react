/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

import "./VaccineCoverage.css";

import axios from "axios";

import { inject, observer } from "mobx-react";

import Spinner from "./Spinner";

const VaccineCoverage = inject("store")(
  observer(({ store }) => {
    const [data, setData] = useState([]);
    const [dates, setDates] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      store.todos.error = "";
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await axios
            .get(
              `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${store.todos.selectedChart}?lastdays=all`
            )
            .then((res) => {
              console.log(res.data);
              setLoading(false);
              return res.data.timeline;
            });
          setData(Object.values(data));
          setDates(Object.keys(data));
        } catch {
          store.todos.error = "No Data";
        }
      };
      fetchData();
    }, [store.todos.selectedChart]);

    const lineChart = !loading ? (
      <Line
        id="line"
        data={{
          labels: dates.map((date) => date),
          datasets: [
            {
              data: data.map((data) => data),
              label: "Vaccine",
              borderColor: "steelblue",
              backgroundColor: "lightblue",
              fill: true,
            },
          ],
        }}
      />
    ) : (
      <h2 className="VaccineCoverage-h2">{store.todos.error || <Spinner />}</h2>
    );

    return (
      <div className="VaccineCoverage">
        <span className="VaccineCoverage-doses">
          Vaccine Doses Administrated for {store.todos.selectedChart}
        </span>
        {lineChart}
      </div>
    );
  })
);

export default VaccineCoverage;
