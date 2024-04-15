import React from "react";
import SVGicon from "#components/SVGicon/SVGicon";
import "./SeatsWagonTypes.css";


function SeatsWagonTypes() {
  return (
    <div className="seats__wagon-types wagon-types">
      <p className="wagon-types__title">Тип вагона</p>
      <div className="wagon-types__list">
        <button className="wagon-types__item wagon-types__item-active wagon-type__have_fourth_class" type="button">
          <div className="wagon-type__icon">
            <SVGicon name={"have_fourth_class"}/>
          </div>
          <p className="wagon-type__text">Сидячий</p>
        </button>
        <button className="wagon-types__item wagon-type__have_third_class" type="button">
          <div className="wagon-type__icon">
            <SVGicon name={"have_third_class"}/>
          </div>
          <p className="wagon-type__text">Плацкарт</p>
        </button>
        <button className="wagon-types__item wagon-type__have_second_class" type="button">
          <div className="wagon-type__icon">
            <SVGicon name={"have_second_class"}/>
          </div>
          <p className="wagon-type__text">Купе</p>
        </button>
        <button className="wagon-types__item wagon-type__have_first_class" type="button">
          <div className="wagon-type__icon">
            <SVGicon name={"have_first_class"}/>
          </div>
          <p className="wagon-type__text">Люкс</p>
        </button>
      </div>
    </div>
  );
}

export default SeatsWagonTypes;
