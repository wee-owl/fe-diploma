import React from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentInfo.css";


function PaymentInfo() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/fe-diploma/order/confirm");
  };


  return (
    <div className="payment-info__wrapper">
      <div className="payment-info__personal-container">
        <div className="payment-info__personal-block">
          <p className="payment-info__personal-title">Персональные данные</p>

          <div className="payment-info__content">
            <div className="info-block__personal-info payment-info__second-name">
              <label htmlFor="second-name">Фамилия</label>
              <input type="text" name="second-name" id="second-name"/>
            </div>

            <div className="info-block__personal-info payment-info__first-name">
              <label htmlFor="first-name">Имя</label>
              <input type="text" name="first-name" id="first-name"/>
            </div>

            <div className="info-block__personal-info payment-info__third-name">
              <label htmlFor="third-name">Отчество</label>
              <input type="text" name="third-name" id="third-name"/>
            </div>

            <div className="info-block__personal-info payment-info__phone">
              <label htmlFor="phone">Контактный телефон</label>
              <input type="tel" name="phone" id="phone" placeholder="+7"/>
            </div>

            <div className="info-block__personal-info payment-info__mail">
              <label htmlFor="mail">E-mail</label>
              <input type="email" name="mail" id="mail" placeholder="inbox@gmail.com"/>
            </div>
          </div>
        </div>

        <div className="payment-info__pay-block">
          <p className="payment-info__pay-title">Способ оплаты</p>
          <div className="info-block__checkbox payment-info__pay-checkbox info__pay-online">
            <input className="personal__checkbox-input" id="pay-online" name="pay-online" type="checkbox" value="pay-online"/>
            <label className="personal__checkbox-label" htmlFor="pay-online">Онлайн</label>
          </div>
          <div className="payment-info__pay-options">
            <p>Банковской картой</p>
            <p>PayPal</p>
            <p>Visa QIWI Wallet</p>
          </div>
          <div className="info-block__checkbox payment-info__pay-checkbox info__pay-checkbox">
            <input className="personal__checkbox-input" id="pay-cash" name="pay-cash" type="checkbox" value="pay-cash"/>
            <label className="personal__checkbox-label" htmlFor="pay-cash">Наличными</label>
          </div>
        </div>
      </div>

      <div className="payment-info__pay-btn">
        <button className="payment-info__btn" type="button" onClick={handleClick}>Купить билеты</button>
      </div>
    </div>
  );
}

export default PaymentInfo;
