import React from "react";
import SeatsWagonDetailsBody from "./SeatsWagonDetailsBody/SeatsWagonDetailsBody";
import SeatsScheme from "../SeatsScheme/SeatsScheme";
import "./SeatsWagonDetails.css";


function SeatsWagonDetails() {
  return (
    <div className="seats__wagon-details wagon-details">
      <SeatsWagonDetailsBody />
      <SeatsScheme />
    </div>
  );
}

export default SeatsWagonDetails;
