import React from 'react';
import SelectLocation from '#components/Select/SelectLocation';
import Calendar from '#components/Calendar/Calendar';
import './HeaderSearchWidget.css';


function HeaderSearchWidget() {
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
            <button className="fieldset-direction__btn" type='button' />
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
          <button className='form__btn-send'>Найти билеты</button>
        </div>
      </form>
    </div>
  );
}

export default HeaderSearchWidget;
