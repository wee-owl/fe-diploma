import React from "react";


function SeatsSchemeFourthClass() {
  return (
    <div className="scheme__seats-container scheme__seats-fourth-class">

      <ul className="scheme__seats-fourth-class_right-side">
        {[...Array(16)].map((_, i) => {
          return (
            <div className="scheme__seats-row scheme__seats-row_fourth-class" key={i}>

              <div className="scheme__seats-item-container">
                <button className="scheme__seats-item scheme__seats-item_fourth-class" type="button">
                  {i * 2 + 1}
                </button>
              </div>

              <div className="scheme__seats-item-container">
                <button className="scheme__seats-item scheme__seats-item_fourth-class" type="button">
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
                <button className="scheme__seats-item scheme__seats-item_fourth-class" type="button">
                  {i * 2 + 33}
                </button>
              </div>
              <div className="scheme__seats-item-container">
                <button className="scheme__seats-item scheme__seats-item_fourth-class" type="button">
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
