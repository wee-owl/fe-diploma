import React from "react";
import "./SeatsWagonHeader.css";


function SeatsWagonHeader() {
  return (
    <div className="seats__wagon-details-header">
      <p>Вагоны</p>
      <div className="wagon-details__list">
        <button className="wagon-details__item" type="button">10</button>
        <button className="wagon-details__item wagon-details__item-active" type="button">12</button>
        <button className="wagon-details__item" type="button">15</button>
      </div>
      <p>Нумерация вагонов начинается с головы поезда</p>
    </div>
  );
}

export default SeatsWagonHeader;
