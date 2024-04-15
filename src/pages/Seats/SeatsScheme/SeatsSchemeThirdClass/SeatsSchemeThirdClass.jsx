import React from "react";


function SeatsSchemeThirdClass() {
  return (
    <div className="scheme__seats-container scheme__seats-third-class">

      <ul className="scheme__seats-list scheme__seats-third-class scheme__seats-right-side">
        {[...Array(8)].map((_, i) => {
          return (
            <li className="scheme__seats-placement" key={i}>

              <div className="scheme__seats-row scheme__seats-row_third-class">
                <div className="scheme__seats-item-container">
                  <button className="scheme__seats-item scheme__seats-item_third-class" type="button">
                    {i*4 + 1}
                  </button>
                </div>
                <div className="scheme__seats-item-container">
                  <button className="scheme__seats-item scheme__seats-item_third-class" type="button">
                    {i*4 + 2}
                  </button>
                </div>
              </div>

              <div className="scheme__seats-row scheme__seats-row_third-class">
                <div className="scheme__seats-item-container">
                  <button className="scheme__seats-item scheme__seats-item_third-class" type="button">
                    {i*4 + 3}
                  </button>
                </div>
                <div className="scheme__seats-item-container">
                  <button className="scheme__seats-item scheme__seats-item_third-class" type="button">
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
                <button className="scheme__seats-item scheme__seats-item_third-class scheme__seats-item_left-train-side" type="button">
                  {i * 2 + 33}
                </button>
              </div>
              <div className="scheme__seats-item-container">
                <button className="scheme__seats-item scheme__seats-item_third-class scheme__seats-item_left-train-side" type="button">
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
