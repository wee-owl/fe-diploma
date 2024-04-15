import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PassengersInfoBlock.css";


function PassengersInfoBlock({ number, onChange }) {
  const [showComponent, setShowComponent] = useState(true);
  const [age, setAge] = useState({dataValue: "adult", value: "взрослый"});
  const [document, setDocument] = useState({dataValue: "passport", value: "Паспорт"});

  const handleAge = (e) => {
    e.preventDefault();
    setAge({dataValue: e.target.dataValue, value: e.target.value});
    e.target.parentElement.classList.toggle("info-block__select-options-visible");
  };

  const handleDocument = (e) => {
    e.preventDefault();
    setDocument({dataValue: e.target.dataValue, value: e.target.value});
    e.target.parentElement.classList.toggle("info-block__select-options-visible");
  };

  const handleOpenList = (e) => {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle("info-block__select-options-visible");
  };

  const handleChangeDocument = (e) => {
    e.preventDefault();
    const target = e.target.closest(".passengers__select-option");
    const passportBlock = e.target.closest(".info-block__identity").children[1];
    const birthBlock = e.target.closest(".info-block__identity").children[2];
    if (target) {
      if (target.value === "Свидетельство о рождении") {
        passportBlock.classList.add("invisible-block");
        birthBlock.classList.remove("invisible-block");
      } else {
        passportBlock.classList.remove("invisible-block");
        birthBlock.classList.add("invisible-block");
      }
    }
  }

  const handleDeleteBlock = (e) => {
    e.preventDefault();
    if (e.target) onChange(true);
    // setShowComponent(false);
    setShowComponent(true);
  };



  return (
    <>
      { showComponent && 
      <div className={`passengers-info-block info-block passenger-${number}`}>

        <div className="info-block__control">
          <input className="info-block__control-btn" id={`info-block-${number}`} type="checkbox"/>
          <label htmlFor={`info-block-${number}`}>{`Пассажир ${number}`}</label>

          <div className="info-block__container">
            <div className="info-block__select">
              <input 
                className="info-block__select-btn" 
                type="button" 
                data-value={age.dataValue} 
                value={age.value} 
                onClick={handleOpenList}/>
              <div className="info-block__select-options">
                <input 
                  className="info-block__select-option" 
                  type="button" 
                  data-value={"adult"} 
                  value="взрослый" 
                  onClick={handleAge}/>
                <input 
                  className="info-block__select-option" 
                  type="button" 
                  data-value={"kid"} 
                  value="детский" 
                  onClick={handleAge}/>
              </div>
            </div>

            <div className="info-block__personal-container">
              <div className="info-block__personal-info personal-second-name">
                <label htmlFor="second-name">Фамилия</label>
                <input type="text" name="second-name" id="second-name"/>
              </div>

              <div className="info-block__personal-info personal-first-name">
                <label htmlFor="first-name">Имя</label>
                <input type="text" name="first-name" id="first-name"/>
              </div>

              <div className="info-block__personal-info personal-third-name">
                <label htmlFor="third-name">Отчество</label>
                <input type="text" name="third-name" id="third-name"/>
              </div>
            </div>

            <div className="info-block__personal-container">
              <div className="personal-gender">
                <fieldset className="personal-gender__fieldset">
                  <legend className="personal-gender__legend">Пол</legend>
                  <div className="personal-gender__radio-container">
                    <label className="personal-gender__radio-label">
                      <input className="personal-gender__radio-input" name="gender" type="radio" value="male"/>
                      <span className="personal-gender__radio-text">М</span>
                    </label>
                    <label className="personal-gender__radio-label">
                      <input className="personal-gender__radio-input" name="gender" type="radio" value="female"/>
                      <span className="personal-gender__radio-text">Ж</span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className="personal-birth">
                <label className="personal-birth__label" htmlFor="birth">Дата рождения</label>
                <input className="personal-birth__input" type="date" name="birth" id="birth"/>
              </div>
            </div>

            <div className="info-block__checkbox">
              <input className="personal__checkbox-input" id="limited-mobility" name="limited-mobility" type="checkbox" value="limited-mobility"/>
              <label className="personal__checkbox-label" htmlFor="limited-mobility">ограниченная подвижность</label>
            </div>

            <div className="info-block__identity" onClick={handleChangeDocument}>
              <div className="info-block__select info-block__identity-select">
                <label className="info-block__identity-label" htmlFor="document-type">
                  Тип документа
                </label>
                <input 
                  className="info-block__select-btn passengers__select-btn" 
                  name="document-type" 
                  id="document-type" 
                  type="button" 
                  data-value={document.dataValue} 
                  value={document.value} 
                  onClick={handleOpenList}/>
                <div className="info-block__select-options passengers__select-options">
                  <input 
                    className="info-block__select-option passengers__select-option" 
                    type="button" 
                    data-value={"passport"} 
                    value="Паспорт" 
                    onClick={handleDocument}/>
                  <input 
                    className="info-block__select-option passengers__select-option" 
                    type="button" 
                    data-value={"birth-certificate"} 
                    value="Свидетельство о рождении" 
                    onClick={handleDocument}/>
                </div>
              </div>

              <div className="select-option select-option__passport">
                <div className="info-block__personal-info personal-passport">
                  <label htmlFor="series">Серия</label>
                  <input type="number" name="series" id="series" placeholder="__  __  __  __"/>
                </div>

                <div className="info-block__personal-info personal-passport">
                  <label htmlFor="number">Номер</label>
                  <input type="number" name="number" id="number" placeholder="__  __  __  __  __  __"/>
                </div>
              </div>

              <div className="select-option select-option__birth-certificate invisible-block">
                <div className="info-block__personal-info personal-birth-certificate">
                  <label htmlFor="birth-number">Номер</label>
                  <input type="text" name="birth-number" id="birth-number" placeholder="__  __  __  __  __  __  __  __  __  __  __  __"/>
                </div>
              </div>
            </div>

            <div className="info-block__next-section">
              <button className="info-block__next-btn" type="button">Следующий пассажир</button>
              <div className="info-block__next-incorrect invisible-block">
                <div></div>
                <p>Номер свидетельства о рождении указан некорректно<br/>Пример: <b>VIII-ЫП-123456</b></p>
              </div>
              <div className="info-block__next-correct invisible-block">
                <div></div>
                <p>Готово</p>
              </div>
            </div>
          </div>

          <button className="info-block__delete-btn" type="button" onClick={handleDeleteBlock}></button>
        </div>

      </div>
      }
    </>
  );
}

export default PassengersInfoBlock;

PassengersInfoBlock.propTypes = {
  number: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};