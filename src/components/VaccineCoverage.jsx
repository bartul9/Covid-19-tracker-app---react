import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

import "./VaccineCoverage.css";

import axios from "axios";

export default function VaccineCoverage() {
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await axios
        .get("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=100")
        .then((res) => {
          setLoading(false);
          return res.data;
        });
      setData(Object.values(data));
      setDates(Object.keys(data));
    };
    fetchData();
  }, []);

  const lineChart =
    !loading && !data[0] ? (
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
      <h2>Loading</h2>
    );

  return <div className="VaccineCoverage">{lineChart}</div>;
}
