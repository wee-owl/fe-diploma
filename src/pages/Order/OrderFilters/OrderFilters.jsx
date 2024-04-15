import React from "react";
import { switchFilters } from "#utils/switchFilters";
import SVGicon from "#components/SVGicon/SVGicon";
import Calendar from "#components/Calendar/Calendar";
import SidebarSwitch from "#components/Switch/SidebarSwitch";
import SliderPrice from "#components/SliderPrice/SliderPrice";
import SliderPeriod from "#components/SliderPeriod/SliderPeriod";
import ArrivalImage from "#assets/slider-filter-period-arrival.png";
import DepartureImage from "#assets/slider-filter-period-departure.png";
import "./OrderFilters.css";


function OrderFilters() {
  return (
    <div className="order-filters filter">

      <div className="filter__date">
        <fieldset className="filter__fieldset">
          <legend className="fieldset__legend">Дата поездки</legend>
          <div className="fieldset__input-wrapper">
            <label className="fieldset__label" />
            <Calendar name={"fieldset__input-thither"} />
          </div>
        </fieldset>
        <fieldset className="filter__fieldset">
          <legend className="fieldset__legend">Дата возвращения</legend>
          <div className="fieldset__input-wrapper">
            <label className="fieldset__label" />
            <Calendar name={"fieldset__input-back"} />
          </div>
        </fieldset>
      </div>

      <div className="filter__switch switch">
        {switchFilters.map(item => {
          return (
            <div className="switch__component" key={item.name}>
              <div className="switch__image">
                <SVGicon name={item.name}/>
              </div>
              <span className="switch__title">{item.alt}</span>
              <SidebarSwitch name={item.name}/>
            </div>
            )
          })
        }
      </div>

      <div className="filter__price price">
        <p className="price__title">Стоимость</p>
        <div className="price__under-range"><p>от</p><p>до</p></div>
        <SliderPrice />
      </div>

      <div className="filter__period period-departure">
        <div className="filter__period-control">
          <img className="filter__period-img" src={DepartureImage} alt="DepartureImage"/>
          <p className="filter__period-title">Туда</p>
          <input className="filter__period-btn" id="period-btn-departure" type="checkbox"/>
          <label htmlFor="period-btn-departure"/>
          <div className="filter__period-content">
            <p className="filter__period-subtitle departure-subtitle-left">Время отправления</p>
            <SliderPeriod data={{from: 0, to: 10}}/>
            <p className="filter__period-subtitle departure-subtitle-right">Время прибытия</p>
            <SliderPeriod data={{from: 6, to: 16}}/>
          </div>
        </div>
      </div>

      <div className="filter__period period-arrival">
        <div className="filter__period-control">
          <img className="filter__period-img" src={ArrivalImage} alt="ArrivalImage"/>
          <p className="filter__period-title">Обратно</p>
          <input className="filter__period-btn" id="period-btn-arrival" type="checkbox"/>
          <label htmlFor="period-btn-arrival"/>
          <div className="filter__period-content">
            <p className="filter__period-subtitle arrival-subtitle-left">Время отправления</p>
            <SliderPeriod data={{from: 0, to: 9}}/>
            <p className="filter__period-subtitle arrival-subtitle-right">Время прибытия</p>
            <SliderPeriod data={{from: 5, to: 14}}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default OrderFilters;
