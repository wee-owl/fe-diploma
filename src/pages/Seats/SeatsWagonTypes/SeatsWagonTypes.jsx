import React from "react";
import PropTypes from "prop-types";
import SVGicon from "#components/SVGicon/SVGicon";
import "./SeatsWagonTypes.css";


function SeatsWagonTypes({data, identity, onChange}) {
  const wagonClasses = [];
  data.forEach(obj => wagonClasses.push(obj.coach.class_type));

  const changeWagonClass = (e) => {
    e.preventDefault();
    const classElements = e.target.ownerDocument.querySelector(`[id="wagon-types-${identity}"] .wagon-types__list`).children;
    [...classElements].forEach(item => 
      [...item.classList].includes("wagon-types__item-active") ? 
      item.classList.remove("wagon-types__item-active") : false);
    e.target.closest("button").classList.add("wagon-types__item-active");
    const targetClass = e.target.closest("button").id;
    onChange({[`${identity}Class`]: targetClass});
  };


  return (
    <div className="seats__wagon-types wagon-types" id={`wagon-types-${identity}`}>
      <p className="wagon-types__title">Тип вагона</p>
      <div className="wagon-types__list">

        <button 
          className="wagon-types__item wagon-type__have_fourth_class" 
          id="fourth"
          type="button" 
          disabled={!wagonClasses.includes("fourth")}
          onClick={changeWagonClass}
        >
          <div className="wagon-type__icon">
            <SVGicon name={"have_fourth_class"}/>
          </div>
          <p className="wagon-type__text">Сидячий</p>
        </button>

        <button 
          className="wagon-types__item wagon-type__have_third_class" 
          id="third"
          type="button" 
          disabled={!wagonClasses.includes("third")}
          onClick={changeWagonClass}
        >
          <div className="wagon-type__icon">
            <SVGicon name={"have_third_class"}/>
          </div>
          <p className="wagon-type__text">Плацкарт</p>
        </button>

        <button 
          className="wagon-types__item wagon-type__have_second_class" 
          id="second"
          type="button" 
          disabled={!wagonClasses.includes("second")}
          onClick={changeWagonClass}
        >
          <div className="wagon-type__icon">
            <SVGicon name={"have_second_class"}/>
          </div>
          <p className="wagon-type__text">Купе</p>
        </button>

        <button 
          className="wagon-types__item wagon-type__have_first_class" 
          id="first"
          type="button" 
          disabled={!wagonClasses.includes("first")}
          onClick={changeWagonClass}
        >
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

SeatsWagonTypes.propTypes = {
  data: PropTypes.array.isRequired, 
  identity: PropTypes.string.isRequired, 
  onChange: PropTypes.func, 
};