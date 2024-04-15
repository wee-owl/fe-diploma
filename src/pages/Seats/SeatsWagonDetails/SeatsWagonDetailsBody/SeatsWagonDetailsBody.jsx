import React from "react";
import SVGicon from "#components/SVGicon/SVGicon";
import TooltipBlock from "#components/Tooltip/TooltipBlock";


function SeatsWagonDetailsBody() {
  return (
    <>
      <div className="wagon-details__number">
        <p className="wagon-number">12</p>
        <p>вагон</p>
      </div>

      <div className="wagon-details__place">
        <p>Места <span className="wagon-details__place-count">21</span></p>
        <p>Верхние <span className="wagon-details__place-count">10</span></p>
        <p>Нижние <span className="wagon-details__place-count">11</span></p>
      </div>

      <div className="wagon-details__price">
        <p>Стоимость</p>
        <p><span className="wagon-details__price-count">2020</span>&#8381;</p>
        <p><span className="wagon-details__price-count">3030</span>&#8381;</p>
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
