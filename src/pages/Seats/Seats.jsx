import React from "react";
import { useNavigate } from "react-router-dom";
import SeatsContainer from "../Seats/SeatsContainer/SeatsContainer";
import "./Seats.css";


function Seats() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/fe-diploma/order/passengers");
  };


  return (
    <div>
      <p className="seats-title">Выбор мест</p>
      <SeatsContainer />
      <button className="seats-button" type="button" onClick={handleClick}>далее</button>
    </div>
  );
}

export default Seats;
