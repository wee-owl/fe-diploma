import React from 'react';
import './HeaderSearchWidget.css';


function HeaderSearchWidget() {
  return (
    <div className="search-widget">
      <form className="search-widget__form form">

        <fieldset className="form__fieldset fieldset fieldset-direction">
          <legend className="fieldset__legend">Направление</legend>
          <div className="fieldset__input-wrapper">
            <label htmlFor="from" className="fieldset__label" />
            <input name="from" id="from" placeholder="Откуда" className="fieldset__input fieldset__input-from" />
          </div>
          <div className="fieldset__btn">
            <button className="fieldset-direction__btn" />
          </div>
          <div className="fieldset__input-wrapper">
            <label htmlFor="to" className="fieldset__label" />
            <input name="to" id="to" placeholder="Куда" className="fieldset__input fieldset__input-to" />
          </div>
        </fieldset>

        <fieldset className="form__fieldset fieldset fieldset-date">
          <legend className="fieldset__legend">Дата</legend>
          <div className="fieldset__input-wrapper">
            <label htmlFor="thither" className="fieldset__label" />
            <input name="thither" id="thither" placeholder="ДД/ММ/ГГ" className="fieldset__input fieldset__input-thither" />
          </div>
          <div className="fieldset__input-wrapper">
            <label htmlFor="back" className="fieldset__label" />
            <input name="back" id="back" placeholder="ДД/ММ/ГГ" className="fieldset__input fieldset__input-back" />
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
