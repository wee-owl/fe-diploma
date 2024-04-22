import React from "react";
import PropTypes from "prop-types";
import SVGicon from "#components/SVGicon/SVGicon";
import TooltipBlock from "#components/Tooltip/TooltipBlock";


function SeatsWagonDetailsBody({data, wagonType, wagonId}) {
  const obj = wagonId ? 
    data.filter(item => item.coach._id === wagonId)[0] : 
    data.filter(item => item.coach.class_type === wagonType)[0];


  return (
    <>
      <div className="wagon-details__number">
        <p className="wagon-number">{obj.coach.name}</p>
        <p>вагон</p>
      </div>

      <div className="wagon-details__place">
        <p>Места <span className="wagon-details__place-count">{obj.coach.available_seats}</span></p>
        {
          wagonType === "fourth" ?
          <>
            <p>Верхние <span className="wagon-details__place-count"></span></p>
            <p>Нижние <span className="wagon-details__place-count"></span></p>
          </> :
          wagonType === "third" ?
          <>
            <p>Верхние <span className="wagon-details__place-count"></span></p>
            <p>Нижние <span className="wagon-details__place-count"></span></p>
            <p>Боковые <span className="wagon-details__place-count"></span></p>
          </> :
          wagonType === "second" ?
          <>
            <p>Верхние <span className="wagon-details__place-count"></span></p>
            <p>Нижние <span className="wagon-details__place-count"></span></p>
          </> : ""
        }
      </div>

      <div className="wagon-details__price">
        <p>Стоимость</p>
        {
          wagonType === "fourth" ?
          <>
            <p><span className="wagon-details__price-count">{obj.coach.top_price}</span>&#8381;</p>
            <p><span className="wagon-details__price-count">{obj.coach.bottom_price}</span>&#8381;</p>
          </> :
          wagonType === "third" ?
          <>
            <p><span className="wagon-details__price-count">{obj.coach.top_price}</span>&#8381;</p>
            <p><span className="wagon-details__price-count">{obj.coach.bottom_price}</span>&#8381;</p>
            <p><span className="wagon-details__price-count">{obj.coach.side_price}</span>&#8381;</p>
          </> :
          wagonType === "second" ?
          <>
            <p><span className="wagon-details__price-count">{obj.coach.top_price}</span>&#8381;</p>
            <p><span className="wagon-details__price-count">{obj.coach.bottom_price}</span>&#8381;</p>
          </> : 
          <p><span className="wagon-details__price-count">{obj.coach.price}</span>&#8381;</p>
        }
      </div>

      <div className="wagon-details__service">
        <p>Обслуживание ФПК</p>
        <ul className="wagon-details__service-list">
          <li className="wagon-details__service-item" 
            data-tooltip-id="have_air_conditioning" 
            data-tooltip-content="кондиционер" 
            data-tooltip-place="bottom">
            <TooltipBlock id="have_air_conditioning" />
            <div className="wagon-details__service-icon wagon-details__service-icon-active">
              <SVGicon name={"have_air_conditioning"}/>
            </div>
          </li>
          <li className="wagon-details__service-item"
            data-tooltip-id="have_wifi" 
            data-tooltip-content="WI-FI" 
            data-tooltip-place="bottom">
            <TooltipBlock id="have_wifi" />
            <div className="wagon-details__service-icon">
              <SVGicon name={"have_wifi"}/>
            </div>
          </li>
          <li className="wagon-details__service-item"
            data-tooltip-id="have_bed_linen" 
            data-tooltip-content="белье" 
            data-tooltip-place="bottom">
            <TooltipBlock id="have_bed_linen" />
            <div className="wagon-details__service-icon wagon-details__service-icon-include">
              <SVGicon name={"have_bed_linen"}/>
            </div>
          </li>
          <li className="wagon-details__service-item"
            data-tooltip-id="have_train_food" 
            data-tooltip-content="питание" 
            data-tooltip-place="bottom">
            <TooltipBlock id="have_train_food" />
            <div className="wagon-details__service-icon">
              <SVGicon name={"have_train_food"}/>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SeatsWagonDetailsBody;

SeatsWagonDetailsBody.propTypes = {
  data: PropTypes.array.isRequired, 
  wagonType: PropTypes.string, 
  wagonId: PropTypes.string, 
};