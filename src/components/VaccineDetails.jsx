import React from "react";
import PhasesTable from "./PhasesTable";
import VaccineData from "./VaccineData";

import "./VaccineDetails.css";

const VaccineDetails = () => {
  return (
    <section className="VaccineDetails">
      <span id="VaccineDetails-h2"></span>
      <h2>Vaccine Details</h2>
      <PhasesTable />
      <VaccineData />
    </section>
  );
};
export default VaccineDetails;
