import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PassengersInfoBlock from "../PassengersInfoBlock/PassengersInfoBlock";
import PassengersAddInfoBlock from "../PassengersAddInfoBlock/PassengersAddInfoBlock";
import "./PassengersInfo.css";


function PassengersInfo() {
  let passengersCount = 2;
  const [count, setCount] = useState(passengersCount);
  const navigate = useNavigate();

  const handleChange = () => {
    setCount(count + 1);
  };

  const handleDelete = () => {
    setCount(count - 1);
  }

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/fe-diploma/order/payment");
  };


  return (
    <div className="passengers-info__wrapper">
      <div className="passengers-info__container">
        {
          [...Array(count)].map((_, i) => {
            return (
              <PassengersInfoBlock number={i+1} key={i} onChange={handleDelete}/>
          )})
        }

        <PassengersAddInfoBlock onChange={handleChange}/>
      </div>
      
      <button className="passengers-info__btn" type="button" onClick={handleClick}>Далее</button>
    </div>
  );
}

export default PassengersInfo;
