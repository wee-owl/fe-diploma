import React from "react";
import ArrivalImage from "#assets/slider-filter-period-arrival.png";
import DepartureImage from "#assets/slider-filter-period-departure.png";
import PassengersImage from "#assets/order-sidebar-passengers-icon.png";
import "./OrderDetails.css";


function OrderDetails() {
  return (
    <div className="order-details passengers-sidebar">

      <div className="passengers-sidebar__header">
        <p>Детали поездки</p>
      </div>

      <div className="passengers-sidebar__details details-departure">
        <div className="passengers-sidebar__details-control details-control">
          <img className="details-control-img" src={DepartureImage} alt="DepartureImage"/>
          <p className="details-control__title">Туда</p>
          <time className="details-control__time" dateTime="2018-08-30 00:10">30.08.2018</time>
          <input className="details-control-btn" id="details-btn-departure" type="checkbox"/>
          <label htmlFor="details-btn-departure"/>
          <div className="details-control-content details-content__info">

            <div className="details-content__info-train-num">
              <p>№ Поезда</p>
              <p className="details-content__info-num info-num-departure">116C</p>
            </div>

            <div className="details-content__info-train-name">
              <p>Название</p>
              <p className="details-content__info-name info-name-departure">Адлер<br/>Санкт-Петербург</p>
            </div>

            <div className="details-content__info-period">9:42</div>

            <div className="details-content__info-time">
              <time className="info-time__time time-departure-start" dateTime="2018-08-30 00:10">00:10</time>
              <div className="info-period__arrow arrow-right"></div>
              <time className="info-time__time time-departure-end" dateTime="2018-08-31 09:52">09:52</time>
            </div>

            <div className="details-content__info-date">
              <time className="info-date__date date-departure-start" dateTime="2018-08-30 00:10">30.08.2018</time>
              <time className="info-date__date date-departure-end" dateTime="2018-08-31 09:52">31.08.2018</time>
            </div>

            <div className="details-content__info-city">
              <div className="info-city__city city-departure-start">Москва</div>
              <div className="info-city__city city-departure-end">Санкт-Петербург</div>
            </div>

            <div className="details-content__info-station">
              <div className="info-station__station station-departure-start">Курский вокзал</div>
              <div className="info-station__station station-departure-end">Ладожский вокзал</div>
            </div>

          </div>
        </div>
      </div>

      <div className="passengers-sidebar__details details-arrival">
        <div className="passengers-sidebar__details-control details-control">
          <img className="details-control-img" src={ArrivalImage} alt="ArrivalImage"/>
          <p className="details-control__title">Обратно</p>
          <time className="details-control__time" dateTime="2018-09-09 00:10">09.09.2018</time>
          <input className="details-control-btn" id="details-btn-arrival" type="checkbox"/>
          <label htmlFor="details-btn-arrival"/>
          <div className="details-control-content details-content__info">

            <div className="details-content__info-train-num">
              <p>№ Поезда</p>
              <p className="details-content__info-num info-num-arrive">116C</p>
            </div>

            <div className="details-content__info-train-name">
              <p>Название</p>
              <p className="details-content__info-name info-name-arrive">Адлер<br/>Санкт-Петербург</p>
            </div>

            <div className="details-content__info-period">9:42</div>

            <div className="details-content__info-time">
              <time className="info-time__time time-arrive-start" dateTime="2018-08-30 00:10">00:10</time>
              <div className="info-period__arrow arrow-left"></div>
              <time className="info-time__time time-arrive-end" dateTime="2018-08-31 09:52">09:52</time>
            </div>

            <div className="details-content__info-date">
              <time className="info-date__date date-arrive-start" dateTime="2018-08-30 00:10">30.08.2018</time>
              <time className="info-date__date date-arrive-end" dateTime="2018-08-31 09:52">31.08.2018</time>
            </div>

            <div className="details-content__info-city">
              <div className="info-city__city city-arrive-start">Москва</div>
              <div className="info-city__city city-arrive-end">Санкт-Петербург</div>
            </div>

            <div className="details-content__info-station">
              <div className="info-station__station station-arrive-start">Курский вокзал</div>
              <div className="info-station__station station-arrive-end">Ладожский вокзал</div>
            </div>

          </div>
        </div>
      </div>

      <div className="passengers-sidebar__details details-passengers">
        <div className="passengers-sidebar__details-control details-control">
          <img className="details-control-img" src={PassengersImage} alt="PassengersImage"/>
          <p className="details-control__title">Пассажиры</p>
          <input className="details-control-btn" id="details-info-passengers" type="checkbox"/>
          <label htmlFor="details-info-passengers"/>
          <div className="details-control-content details-content__info">
            
            <div className="passengers-info passengers-info__adult">
              <p>Взрослые:</p>
              <p className="passengers-info__count passengers-info__adult-count">2</p>
              <p className="passengers-info__total-cost">
                <span className="passengers-info__adult-total-cost">5840</span>
                &#8381;
              </p>
            </div>

            <div className="passengers-info passengers-info__kid">
              <p>Дети:</p>
              <p className="passengers-info__count passengers-info__kid-count">1</p>
              <p className="passengers-info__total-cost">
                <span className="passengers-info__kid-total-cost">1920</span>
                &#8381;
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="passengers-sidebar__footer footer-total-cost">
        <p className="footer-total-cost__title">Итог</p>
        <p className="footer-total-cost__total-cost">
          <span className="footer-total-cost__total-cost-count">7760</span>
          &#8381;
        </p>
      </div>

    </div>
  );
}

export default OrderDetails;
