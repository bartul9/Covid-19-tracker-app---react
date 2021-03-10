import React, { useState, useEffect } from "react";

import axios from "axios";

import Spinner from "./Spinner";

import "./PhasesTable.css";

export default function PhasesTable() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("https://disease.sh/v3/covid-19/vaccine");
        setData(data.data);
      } catch {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  return data === null ? (
    <Spinner />
  ) : (
    <div className="PhasesTable">
      <h4>Total Candidates: {data.totalCandidates}</h4>
      <table>
        <tbody>
          <tr>
            <th>Phase</th>
            <th>Candidates</th>
          </tr>
          {data.phases.map((phase) => (
            <tr key={phase.phase}>
              <td>{phase.phase}</td>
              <td>{phase.candidates}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
