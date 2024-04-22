import React from "react";
import PropTypes from "prop-types";


function SeatsSchemeFourthClass({seats, onChange}) {
  const getStatus = (i) => {
    const boo = seats.find(item => item.index === i);
    return boo ? boo.available : false;
  };

  const handleSeat = (e) => {
    e.preventDefault();
    const item = e.target.closest(".scheme__seats-item");
    item.classList.toggle("selected");
    const side = +item.textContent % 2 === 0 ? "top" : "bottom";
    onChange({
      type: "fourth",
      seatIndex: item.textContent, 
      seatSide: side, 
      selected: [...item.classList].includes("selected"),
    });
  };


  return (
    <div className="scheme__seats-container scheme__seats-fourth-class">

      <ul className="scheme__seats-fourth-class_right-side">
        {[...Array(16)].map((_, i) => {
          return (
            <div className="scheme__seats-row scheme__seats-row_fourth-class" key={i}>

              <div className="scheme__seats-item-container">
                <button 
                  className="scheme__seats-item scheme__seats-item_fourth-class" 
                  type="button"
                  disabled={!getStatus(i * 2 + 1)}
                  onClick={handleSeat}
                >
                  {i * 2 + 1}
                </button>
              </div>

              <div className="scheme__seats-item-container">
                <button 
                  className="scheme__seats-item scheme__seats-item_fourth-class" 
                  type="button"
                  disabled={!getStatus(i * 2 + 2)}
                  onClick={handleSeat}
                >
                  {i * 2 + 2}
                </button>
              </div>

            </div>
          )
        })}
      </ul>

      <ul className="scheme__seats-fourth-class_left-side">
        {[...Array(16)].map((_, i) => {
          return (
            <div className="scheme__seats-row scheme__seats-row_fourth-class" key={i}>
              <div className="scheme__seats-item-container">
                <button 
                  className="scheme__seats-item scheme__seats-item_fourth-class" 
                  type="button"
                  disabled={!getStatus(i * 2 + 33)}
                  onClick={handleSeat}
                >
                  {i * 2 + 33}
                </button>
              </div>
              <div className="scheme__seats-item-container">
                <button 
                  className="scheme__seats-item scheme__seats-item_fourth-class" 
                  type="button"
                  disabled={!getStatus(i * 2 + 34)}
                  onClick={handleSeat}
                >
                  {i * 2 + 34}
                </button>
              </div>
            </div>
          )
        })}
      </ul>

    </div>
  );
}

export default SeatsSchemeFourthClass;

SeatsSchemeFourthClass.propTypes = {
  seats: PropTypes.array || PropTypes.object,
  onChange: PropTypes.func,
};