import React from "react";
import PropTypes from "prop-types";
import WagonHeader from "#assets/wagon-header.png";
import WagonFooter from "#assets/wagon-footer.png";
import SeatsSchemeFourthClass from "./SeatsSchemeFourthClass/SeatsSchemeFourthClass";
import SeatsSchemeThirdClass from "./SeatsSchemeThirdClass/SeatsSchemeThirdClass";
import SeatsSchemeSecondClass from "./SeatsSchemeSecondClass/SeatsSchemeSecondClass";
import SeatsSchemeFirstClass from "./SeatsSchemeFirstClass/SeatsSchemeFirstClass";
import "./SeatsScheme.css";


function SeatsScheme({data, wagonType, wagonId}) {
  let obj;
  let classArray = data.filter(item => item.coach.class_type === wagonType);

  if (data && wagonType && !wagonId) {
    obj = data.filter(item => item.coach.class_type === wagonType)[0];

  } else if (data && wagonType && wagonId && !classArray.find(item => item.coach._id === wagonId)) {
    obj = data.filter(item => item.coach.class_type === wagonType)[0];

  } else if (data && wagonType && wagonId && classArray.find(item => item.coach._id === wagonId)) {
    obj = data.filter(item => item.coach._id === wagonId)[0];
  }

  const handleSeats = (value) => {
    //console.log(value);
  };


  return (
    <div className="seats__scheme scheme">
      <p className="scheme__wagon-number">{obj.coach.name}</p>
      <div className="scheme__container">
        <img className="scheme__wagon-img" src={WagonHeader} alt="Wagon"/>
        <div className="scheme__seats-wrapper">
        {
          obj.coach.class_type === "fourth" ? <SeatsSchemeFourthClass seats={obj.seats} onChange={handleSeats}/> : ""
        }
        {
          obj.coach.class_type === "third" ? <SeatsSchemeThirdClass seats={obj.seats} onChange={handleSeats}/> : ""
        }
        {
          obj.coach.class_type === "second" ? <SeatsSchemeSecondClass seats={obj.seats} onChange={handleSeats}/> : ""
        }
        {
          obj.coach.class_type === "first" ? <SeatsSchemeFirstClass seats={obj.seats} onChange={handleSeats}/> : ""
        }
        </div>
        <img className="scheme__wagon-img" src={WagonFooter} alt="Wagon"/>
      </div>
    </div>
  );
}

export default SeatsScheme;

SeatsScheme.propTypes = {
  data: PropTypes.array, 
  wagonType: PropTypes.string, 
  wagonId: PropTypes.string, 
};