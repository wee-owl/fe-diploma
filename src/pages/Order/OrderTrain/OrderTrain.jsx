import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import SVGicon from "#components/SVGicon/SVGicon";
import "./OrderTrain.css";


function OrderTrain({ item }) {
  console.dir(item);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/fe-diploma/order/seats");
  };


  return (
    <div className="order-train train">

      <div className="train__name-wrapper">
        <div className="train__name-icon">
          <SVGicon name={"train"}/>
        </div>
        <p className="train__name-number">116С</p>
        <div className="train__name-place">
          <p className="train__name-city">Адлер</p>
          <p className="train__name-city">Москва</p>
          <p className="train__name-city">Санкт-Петербург</p> 
        </div>
      </div>

      <div className="train__time-wrapper">

        <div className="train__time-to">
          <div>
            <time dateTime="2001-05-15 19:00">00:10</time>
            <p>Москва</p>
            <p>Курский вокзал</p>
          </div>
          <div>
            <p>09:42</p>
            <div className="train__time-arrow arrow-right"></div>
          </div>
          <div>
            <time dateTime="2024-05-15 19:00">09:52</time>
            <p>Санкт-Петербург</p>
            <p>Ладожский вокзал</p>
          </div>
        </div>

        <div className="train__time-from">
          <div>
            <time dateTime="2001-05-15 19:00">00:10</time>
            <p>Санкт-Петербург</p>
            <p>Ладожский вокзал</p>
          </div>
          <div>
            <p>09:42</p>
            <div className="train__time-arrow arrow-left"></div>
          </div>
          <div>
            <time dateTime="2024-05-15 19:00">09:52</time>
            <p>Москва</p>
            <p>Курский вокзал</p>
          </div>
        </div>
      </div>

      <div className="train__price-wrapper">
        <div className="train__price-seats">
          <div className="train__price-seat">
            <p className="train__price-seat-type">Сидячий</p>
            <p className="train__price-seat-count">88</p>
            <p>от
              <span className="train__price-seat-sum">1920</span>
              <span className="train__price-seat-currency">&#8381;</span>
            </p>
          </div>
          <div className="train__price-seat">
            <p className="train__price-seat-type">Плацкарт</p>
            <p className="train__price-seat-count">52</p>
            <p>от
              <span className="train__price-seat-sum">2530</span>
              <span className="train__price-seat-currency">&#8381;</span>
            </p>
          </div>
          <div className="train__price-seat">
            <p className="train__price-seat-type">Купе</p>
            <p className="train__price-seat-count">24</p>

            <div className="train__price-seat-up-down">
              <div className="train__price-seat-up">
                <p className="train__price-seat-up-type">верхние</p>
                <p className="train__price-seat-up-count">19</p>
                <p>
                  <span className="train__price-seat-up-sum">2920</span>
                  <span className="train__price-seat-up-currency">&#8381;</span>
                </p>
              </div>
              <div className="train__price-seat-down">
                <p className="train__price-seat-down-type">нижние</p>
                <p className="train__price-seat-down-count">5</p>
                <p>
                  <span className="train__price-seat-down-sum">3530</span>
                  <span className="train__price-seat-down-currency">&#8381;</span>
                </p>
              </div>
            </div>

            <p>от
              <span className="train__price-seat-sum">3820</span>
              <span className="train__price-seat-currency">&#8381;</span>
            </p>
          </div>
          <div className="train__price-seat">
            <p className="train__price-seat-type">Люкс</p>
            <p className="train__price-seat-count">15</p>
            <p>от
              <span className="train__price-seat-sum">4950</span>
              <span className="train__price-seat-currency">&#8381;</span>
            </p>
          </div>
        </div>
        <div className="train__price-icons">
          <SVGicon name={"have_wifi"}/>
          <SVGicon name={"have_air_conditioning"}/>
          <SVGicon name={"is_express"}/>
        </div>
        <button className="train__price-button" type="button" onClick={handleClick}>Выбрать места</button>
      </div>

    </div>
  );
}

export default OrderTrain;

OrderTrain.propTypes = {
  item: PropTypes.object,
};