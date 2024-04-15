import React from "react";
import { useNavigate } from "react-router-dom";
import SelectLocation from "#components/Select/SelectLocation";
import Calendar from "#components/Calendar/Calendar";
import "./HeaderWidget.css";


function HeaderWidget() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/fe-diploma/order");
  };


  return (
    <div className="search-widget">
      <form className="search-widget__form form">

        <fieldset className="form__fieldset fieldset fieldset-direction">
          <legend className="fieldset__legend">Направление</legend>
          <div className="fieldset__input-wrapper">
            <label className="fieldset__label" />
            <SelectLocation name={"fieldset__input-from"} placeholder={"Откуда"} />
          </div>
          <div className="fieldset__btn">
            <button className="fieldset-direction__btn" type="button" />
          </div>
          <div className="fieldset__input-wrapper">
            <label htmlFor="to" className="fieldset__label" />
            <SelectLocation name={"fieldset__input-to"} placeholder={"Куда"} />
          </div>
        </fieldset>

        <fieldset className="form__fieldset fieldset fieldset-date">
          <legend className="fieldset__legend">Дата</legend>
          <div className="fieldset__input-wrapper">
            <label className="fieldset__label" />
            <Calendar name={"fieldset__input-thither"} />
          </div>
          <div className="fieldset__input-wrapper">
            <label className="fieldset__label" />
            <Calendar name={"fieldset__input-back"} />
          </div>
        </fieldset>

        <div className="form__btn">
          <button className="form__btn-send" type="button" onClick={handleClick}>Найти билеты</button>
        </div>
      </form>
    </div>
  );
}

export default HeaderWidget;
