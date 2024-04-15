import React from "react";
import SeatsExchange from "../SeatsExchange/SeatsExchange";
import SeatsTrain from "../SeatsTrain/SeatsTrain";
import SeatsTicketAmount from "../SeatsTicketAmount/SeatsTicketAmount";
import SeatsWagonTypes from "../SeatsWagonTypes/SeatsWagonTypes";
import SeatsWagonHeader from "../SeatsWagonHeader/SeatsWagonHeader";
import SeatsWagonDetails from "../SeatsWagonDetails/SeatsWagonDetails";
import SeatsTotalCost from "../SeatsTotalCost/SeatsTotalCost";
import "./SeatsContainer.css";


function SeatsContainer() {
  return (
    <div className="seats__container">
      <SeatsExchange />
      <SeatsTrain />
      <SeatsTicketAmount />
      <SeatsWagonTypes />
      <SeatsWagonHeader />
      <SeatsWagonDetails />
      <SeatsTotalCost />
    </div>
  );
}

export default SeatsContainer;
