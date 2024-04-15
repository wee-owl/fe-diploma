import React from "react";
//import ArrivalImage from "#assets/slider-filter-period-arrival.png";
import DepartureImage from "#assets/slider-filter-period-departure.png";
import "./SeatsExchange.css";


function SeatsExchange() {
  return (
    <div className="seats__exchange">
      <img className="seats__exchange-img" src={DepartureImage} alt="DepartureImage"/>
      <button className="seats__exchange-button" type="button">Выбрать другой поезд</button>
      {/* <img className="filter__period-img" src={ArrivalImage} alt="ArrivalImage"/> */}
    </div>
  );
}

export default SeatsExchange;
