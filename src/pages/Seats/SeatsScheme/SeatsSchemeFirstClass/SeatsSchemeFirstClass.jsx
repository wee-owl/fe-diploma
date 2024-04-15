import React from "react";


function SeatsSchemeFirstClass() {
  return (
    <div className="scheme__seats-container scheme__seats-first-class">

      <ul className="scheme__seats-list scheme__seats-first-class scheme__seats-right-side">
        {[...Array(8)].map((_, i) => {
          return (
            <li className="scheme__seats-placement" key={i}>

              <div className="scheme__seats-row scheme__seats-row_first-class">
                <div className="scheme__seats-item-container">
                  <button className="scheme__seats-item scheme__seats-item_first-class" type="button">
                    {i*2 + 1}
                  </button>
                </div>
              </div>

              <div className="scheme__seats-row scheme__seats-row_first-class">
                <div className="scheme__seats-item-container">
                  <button className="scheme__seats-item scheme__seats-item_first-class" type="button">
                    {i*2 + 2}
                  </button>
                </div>
              </div>

            </li>
          )
        })}
      </ul>

      <ul className="scheme__seats-list scheme__seats-first-class scheme__seats-left-side">
        {[...Array(8)].map((_, i) => {
          return (
            <div className="scheme__seats-row_left-train-side scheme__seats-row_empty" key={i}></div>
          )
        })}
      </ul>

    </div>
  );
}

export default SeatsSchemeFirstClass;
