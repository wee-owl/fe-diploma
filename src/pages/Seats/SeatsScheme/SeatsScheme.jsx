import React from "react";
import WagonHeader from "#assets/wagon-header.png";
import WagonFooter from "#assets/wagon-footer.png";
import SeatsSchemeFourthClass from "./SeatsSchemeFourthClass/SeatsSchemeFourthClass";
// import SeatsSchemeThirdClass from "./SeatsSchemeThirdClass/SeatsSchemeThirdClass";
// import SeatsSchemeSecondClass from "./SeatsSchemeSecondClass/SeatsSchemeSecondClass";
// import SeatsSchemeFirstClass from "./SeatsSchemeFirstClass/SeatsSchemeFirstClass";
import "./SeatsScheme.css";


function SeatsScheme() {
  return (
    <div className="seats__scheme scheme">
      <p className="scheme__wagon-number">12</p>
      <div className="scheme__container">
        <img className="scheme__wagon-img" src={WagonHeader} alt="Wagon"/>
        <div className="scheme__seats-wrapper">
          <SeatsSchemeFourthClass />
          {/* <SeatsSchemeThirdClass /> */}
          {/* <SeatsSchemeSecondClass /> */}
          {/* <SeatsSchemeFirstClass /> */}
        </div>
        <img className="scheme__wagon-img" src={WagonFooter} alt="Wagon"/>
      </div>
    </div>
  );
}

export default SeatsScheme;
