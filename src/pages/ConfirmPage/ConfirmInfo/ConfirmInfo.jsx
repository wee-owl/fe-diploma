import React from "react";
import { useNavigate } from "react-router-dom";
import SVGicon from "#components/SVGicon/SVGicon";
import OrderTrain from "../../Order/OrderTrain/OrderTrain";
import "./ConfirmInfo.css";


function ConfirmInfo() {
  const item = {};
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/fe-diploma/finish");
  };


  return (
    <div className="confirm-info__wrapper">

      <div className="confirm-info__block confirm-info__train-block">
        <p className="confirm-info__block-title">Поезд</p>
        <OrderTrain item={item}/>
        <button className="confirm-info__btn">Изменить</button>
      </div>

      <div className="confirm-info__block confirm-info__passengers-block">
        <p className="confirm-info__block-title">Пассажиры</p>
        <div className="confirm-info__passengers-container">
          <div className="confirm-info__passengers-wrapper">
            <div className="confirm-info__passenger">
              <div className="confirm-info__passenger-logo">
                <SVGicon name={"person-in-circle"}/>
                <p>Взрослый</p>
              </div>
              <div className="confirm-info__passenger-info">
                <p>Иванов Иван Иванович</p>
                <p>Пол мужской</p>
                <p>Дата рождения 01.01.1999</p>
                <p>Паспорт РФ 0000 000000</p>
              </div>
            </div>
            <div className="confirm-info__passenger">
              <div className="confirm-info__passenger-logo">
                <SVGicon name={"person-in-circle"}/>
                <p>Взрослый</p>
              </div>
              <div className="confirm-info__passenger-info">
                <p>Иванов Иван Иванович</p>
                <p>Пол мужской</p>
                <p>Дата рождения 01.01.1999</p>
                <p>Паспорт РФ 0000 000000</p>
              </div>
            </div>
            <div className="confirm-info__passenger">
              <div className="confirm-info__passenger-logo">
                <SVGicon name={"person-in-circle"}/>
                <p>Взрослый</p>
              </div>
              <div className="confirm-info__passenger-info">
                <p>Иванов Иван Иванович</p>
                <p>Пол мужской</p>
                <p>Дата рождения 01.01.1999</p>
                <p>Паспорт РФ 0000 000000</p>
              </div>
            </div>
          </div>
          <div className="confirm-info__cost-wrapper">
            <div className="confirm-info__total-cost">
              <p>Всего</p>
              <p><span className="confirm-info__cost">7760</span>&#8381;</p>
            </div>
            <button className="confirm-info__btn" type="button">Изменить</button>
          </div>
        </div>
      </div>

      <div className="confirm-info__block confirm-info__payment-block">
        <p className="confirm-info__block-title">Способ оплаты</p>
        <div className="confirm-info__payment-wrapper">
          <p className="confirm-info__payment-method">Наличными</p>
          <button className="confirm-info__btn" type="button">Изменить</button>
        </div>
      </div>

      <div className="confirm-info__ok-btn-wrapper">
        <button className="confirm-info__ok-btn" type="button" onClick={handleClick}>подтвердить</button>
      </div>

    </div>
  );
}

export default ConfirmInfo;
