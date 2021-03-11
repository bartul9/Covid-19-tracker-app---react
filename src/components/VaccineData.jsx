import React, { useEffect, useState } from "react";

import axios from "axios";

import VaccineBox from "./VaccineBox";

import "./VaccineData.css";

const VaccineData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://disease.sh/v3/covid-19/vaccine");
      setData(data.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="VaccineData">
      {data.map((vaccine) => (
        <VaccineBox data={vaccine} />
      ))}
    </div>
  );
};
export default VaccineData;
