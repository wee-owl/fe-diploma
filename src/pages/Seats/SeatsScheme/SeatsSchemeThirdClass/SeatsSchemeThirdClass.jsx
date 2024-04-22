import React from "react";
import PropTypes from "prop-types";


function SeatsSchemeThirdClass({seats, onChange}) {
  const getStatus = (i) => {
    const boo = seats.find(item => item.index === i);
    return boo ? boo.available : false;
  };

  const handleSeat = (e) => {
    e.preventDefault();
    const item = e.target.closest(".scheme__seats-item");
    item.classList.toggle("selected");
    const side = +item.textContent > 31 ? "side" : +item.textContent % 2 === 0 ? "top" : "bottom";
    onChange({
      type: "third",
      seatIndex: item.textContent, 
      seatSide: side, 
      selected: [...item.classList].includes("selected"),
    });
  };


  return (
    <div className="scheme__seats-container scheme__seats-third-class">

      <ul className="scheme__seats-list scheme__seats-third-class scheme__seats-right-side">
        {[...Array(8)].map((_, i) => {
          return (
            <li className="scheme__seats-placement" key={i}>

              <div className="scheme__seats-row scheme__seats-row_third-class">
                <div className="scheme__seats-item-container">
                  <button 
                    className="scheme__seats-item scheme__seats-item_third-class" 
                    type="button" 
                    disabled={!getStatus(i*4 + 1)}
                    onClick={handleSeat}
                  >
                    {i*4 + 1}
                  </button>
                </div>
                <div className="scheme__seats-item-container">
                  <button 
                    className="scheme__seats-item scheme__seats-item_third-class" 
                    type="button" 
                    disabled={!getStatus(i*4 + 2)}
                    onClick={handleSeat}
                  >
                    {i*4 + 2}
                  </button>
                </div>
              </div>

              <div className="scheme__seats-row scheme__seats-row_third-class">
                <div className="scheme__seats-item-container">
                  <button 
                    className="scheme__seats-item scheme__seats-item_third-class" 
                    type="button" 
                    disabled={!getStatus(i*4 + 3)}
                    onClick={handleSeat}
                  >
                    {i*4 + 3}
                  </button>
                </div>
                <div className="scheme__seats-item-container">
                  <button 
                    className="scheme__seats-item scheme__seats-item_third-class" 
                    type="button" 
                    disabled={!getStatus(i*4 + 4)}
                    onClick={handleSeat}
                  >
                    {i*4 + 4}
                  </button>
                </div>
              </div>

            </li>
          )
        })}
      </ul>

      <ul className="scheme__seats-list scheme__seats-third-class scheme__seats-left-side">
        {[...Array(8)].map((_, i) => {
          return (
            <li className="scheme__seats-row_left-train-side" key={i}>
              <div className="scheme__seats-item-container">
                <button 
                  className="scheme__seats-item scheme__seats-item_third-class scheme__seats-item_left-train-side" 
                  type="button" 
                  disabled={!getStatus(i * 2 + 33)}
                  onClick={handleSeat}
                >
                  {i * 2 + 33}
                </button>
              </div>
              <div className="scheme__seats-item-container">
                <button 
                  className="scheme__seats-item scheme__seats-item_third-class scheme__seats-item_left-train-side" 
                  type="button" 
                  disabled={!getStatus(i * 2 + 34)}
                  onClick={handleSeat}
                >
                  {i * 2 + 34}
                </button>
              </div>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default SeatsSchemeThirdClass;

SeatsSchemeThirdClass.propTypes = {
  seats: PropTypes.array || PropTypes.object,
  onChange: PropTypes.func,
};