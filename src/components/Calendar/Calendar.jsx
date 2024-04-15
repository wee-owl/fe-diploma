import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import "./Calendar.css";


function Calendar({name}) {
  let $input = useRef();
  let element = useRef();

  useEffect(() => {
    element.current = new AirDatepicker($input.current, {
      navTitles: {
        days: "MMMM",
      }
    });
  }, []);

  useEffect(() => {
    element.current.update({});
  }, []);


  return (
    <input 
      ref={$input} 
      placeholder="ДД/ММ/ГГ" 
      className={`fieldset__input ${name}`} 
      required 
    />
  );
}

export default Calendar;

Calendar.propTypes = {
  name: PropTypes.string.isRequired,
};