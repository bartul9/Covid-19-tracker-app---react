import React from "react";
import PhasesTable from "./PhasesTable";
import VaccineData from "./VaccineData";

import "./VaccineDetails.css";

export default function VaccineDetails() {
  return (
    <section className="VaccineDetails">
      <h2>Vaccine Details</h2>
      <PhasesTable />
      <VaccineData />
    </section>
  );
}
