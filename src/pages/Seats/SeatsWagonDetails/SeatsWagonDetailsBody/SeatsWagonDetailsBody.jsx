import React from "react";
import PropTypes from "prop-types";
import SVGicon from "#components/SVGicon/SVGicon";
import TooltipBlock from "#components/Tooltip/TooltipBlock";


function SeatsWagonDetailsBody({data, wagonType, wagonId}) {
  let obj;
  if (data && !wagonType) {
    obj = data[0];
  } else if (data && wagonType && !wagonId) {
    obj = data.filter(item => item.coach.class_type === wagonType)[0];
  } else {
    obj = data.filter(item => item.coach._id === wagonId)[0];
  }

  const chooseService = (e) => {
    //console.dir(e.target);
  };


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
            onClick={chooseService}
            data-tooltip-id="have_air_conditioning" 
            data-tooltip-content={obj.coach.have_air_conditioning ? "кондиционер работает" : "кондиционер отсутствует"}   
            data-tooltip-place="bottom">
            <TooltipBlock id="have_air_conditioning" />
            <div className={obj.coach.have_air_conditioning ? "wagon-details__service-icon wagon-details__service-icon-include" : "wagon-details__service-icon wagon-details__service-icon-exclude"}>
              <SVGicon name={"have_air_conditioning"}/>
            </div>
          </li>

          <li className="wagon-details__service-item"
            onClick={chooseService}
            data-tooltip-id="have_wifi" 
            data-tooltip-content={obj.coach.have_wifi ? `WI-FI, стоимость ${obj.coach.wifi_price} ₽` : "WI-FI отсутствует"}
            data-tooltip-place="bottom">
            <TooltipBlock id="have_wifi" />
            <div className={obj.coach.have_wifi ? "wagon-details__service-icon" : "wagon-details__service-icon wagon-details__service-icon-exclude"}>
              <SVGicon name={"have_wifi"}/>
            </div>
          </li>

          <li className="wagon-details__service-item"
            onClick={chooseService}
            data-tooltip-id="have_bed_linen" 
            data-tooltip-content={obj.coach.is_linens_included ? "белье включено в стоимость" : `белье, стоимость ${obj.coach.linens_price} ₽`}
            data-tooltip-place="bottom">
            <TooltipBlock id="have_bed_linen" />
            <div className={obj.coach.is_linens_included ? "wagon-details__service-icon wagon-details__service-icon-include" : "wagon-details__service-icon"}>
              <SVGicon name={"have_bed_linen"}/>
            </div>
          </li>

          {/* <li className="wagon-details__service-item"
            onClick={chooseService}
            data-tooltip-id="have_train_food" 
            data-tooltip-content="питание" 
            data-tooltip-place="bottom">
            <TooltipBlock id="have_train_food" />
            <div className="wagon-details__service-icon">
              <SVGicon name={"have_train_food"}/>
            </div>
          </li> */}

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