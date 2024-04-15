import React from "react";
import SVGicon from "#components/SVGicon/SVGicon";
import "./SeatsTrain.css";


function SeatsTrain() {
  return (
    <div className="seats__about-train">

      <div className="seats__about-block">
        <div className="seats__about-icon">
          <SVGicon name={"train"}/>
        </div>
        <div className="seats__about-train-block about-train">
          <p className="about-train__number">116С</p>
          <p className="about-train__city">Адлер</p>
          <p className="about-train__city">Москва</p>
          <p className="about-train__city">Санкт-Петербург</p> 
        </div>
      </div>

      <div className="seats__about-train-direction">
        <div>
          <time dateTime="2001-05-15 19:00">00:10</time>
          <p>Москва</p>
          <p>Курский вокзал</p>
        </div>
        <div>
          <div className="train__time-arrow arrow-right"></div>
        </div>
        <div>
          <time dateTime="2024-05-15 19:00">09:52</time>
          <p>Санкт-Петербург</p>
          <p>Ладожский вокзал</p>
        </div>
      </div>

      <div className="seats__about-clock">
        <div className="seats__about-clock-icon clock-icon">
          <SVGicon name={"clock"}/>
        </div>
        <p>
          <span className="seats__about-clock-hour">9</span> часов <br/>
          <span className="seats__about-clock-minute">42</span> минуты
        </p>
      </div>
    </div>
  );
}

export default SeatsTrain;
