import React from "react";
import { useNavigate } from "react-router-dom";
import SVGicon from "#components/SVGicon/SVGicon";
import "./FinishInfo.css";


function FinishInfo() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/fe-diploma");
  };


  return (
    <div className="finish-info__wrapper">
      <div className="finish-info__container">
        <p className="finish-info__title">Благодарим Вас за заказ!</p>
        <div className="finish-info__bg-wrapper">

          <div className="finish-info__order-info">
            <p>№ Заказа 285АА</p>
            <p>сумма<span className="finish-info__order-cost">7760</span>&#8381;</p>
          </div>

          <div className="finish-info__tickets-info">
            <div className="finish-info__ticket-info">
              <SVGicon name={"pc"}/>
              <p>билеты будут<br/>отправлены<br/>на ваш <b>e-mail</b></p>
            </div>
            <div className="finish-info__ticket-info">
              <SVGicon name={"tickets"}/>
              <p><b>распечатайте</b><br/>и сохраняйте билеты<br/>до даты поездки</p>
            </div>
            <div className="finish-info__ticket-info">
              <SVGicon name={"driver"}/>
              <p><b>предьявите</b><br/>распечатанные<br/>билеты при посадке</p>
            </div>
          </div>

          <div className="finish-info__appeal-info">
            <p>Ирина Эдуардовна!</p>
            <p>Ваш заказ успешно оформлен.<br/>В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
            <p>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</p>
          </div>

          <div className="finish-info__service-rating">
            <p className="service-rating__title">Оценить сервис</p>
            <div className="service-rating__stars">
              <div className="service-rating__star"></div>
              <div className="service-rating__star"></div>
              <div className="service-rating__star"></div>
              <div className="service-rating__star"></div>
              <div className="service-rating__star"></div>
            </div>
            <button className="service-rating__btn" type="button" onClick={handleClick}>Вернуться на главную</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FinishInfo;
