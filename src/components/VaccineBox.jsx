import React from "react";

import "./VaccineBox.css";

const VaccineBox = (props) => {
  const {
    candidate,
    details,
    institutions,
    mechanism,
    sponsors,
    trialPhase,
  } = props.data;
  return (
    <div className="VaccineBox">
      <div className="VaccineBox-table">
        <span>
          Candidate: <span>{candidate}</span>
        </span>
        <span>
          Institutions: <span>{institutions}</span>
        </span>
        <span>
          Mechanism: <span>{mechanism}</span>
        </span>
        <span>
          Sponsors: <span>{sponsors}</span>
        </span>
        <span>
          Trial Phase: <span>{trialPhase}</span>
        </span>
      </div>
      <span
        dangerouslySetInnerHTML={{ __html: details }}
        className="VaccineBox-details"
      ></span>
    </div>
  );
};
export default VaccineBox;
