import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import axios from "axios";

import "./Chart.css";
import { inject, observer } from "mobx-react";

const Chart = inject("store")(
  observer(({ store }) => {
    const [infected, setInfected] = useState([]);
    const [dates, setDates] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [recovered, setRecoverd] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchWorldDaily = async () => {
        setLoading(true);
        console.log(store.todos.selectedChart);
        const worldDaily = await axios
          .get(
            `https://disease.sh/v3/covid-19/historical/${store.todos.selectedChart}?lastdays=350`
          )
          .then((res) => {
            setLoading(false);
            return res.data;
          });
        console.log(worldDaily.timeline);

        const dates = Object.keys(worldDaily.timeline.cases);
        const infected = Object.values(worldDaily.timeline.cases);
        const deathsData = Object.values(worldDaily.timeline.deaths);
        const recovered = Object.values(worldDaily.timeline.recovered);

        setDates(dates);
        setInfected(infected);
        setDeaths(deathsData);
        setRecoverd(recovered);
      };

      fetchWorldDaily();
    }, [store.todos.selectedChart]);

    const lineChart =
      !loading && infected[0] ? (
        <Line
          id="line"
          data={{
            labels: dates.map((date) => date),
            datasets: [
              {
                data: infected.map((data) => data),
                label: "Infected",
                borderColor: "orange",
                backgroundColor: "rgba(255, 165, 0, 0.5)",
                fill: true,
              },

              {
                data: deaths.map((data) => data),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true,
              },
              {
                data: recovered.map((data) => data),
                label: "Recovered",
                borderColor: "green",
                backgroundColor: "lightgreen",
                fill: true,
              },
            ],
          }}
        />
      ) : (
        <h2>Loading</h2>
      );

    return <div className="container"> {lineChart}</div>;
  })
);

export default Chart;
