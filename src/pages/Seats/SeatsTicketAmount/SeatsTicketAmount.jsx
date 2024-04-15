import React from "react";
import "./SeatsTicketAmount.css";


function SeatsTicketAmount() {
  const handleInputValue = (e) => {
    e.preventDefault();
    console.log(`${e.target.name}: ${e.target.value}`);
  };


  return (
    <div className="seats__ticket-amount ticket-amount">
      <p className="ticket-amount__title">Количество билетов</p>
      <form className="ticket-amount__form">
        <div className="ticket-amount__block">
          <label className="ticket-amount__input_label">
            <div className="ticket-amount__input_text">Взрослых — 
            </div>
            <input className="ticket-amount__input" name="adult" min="0" max="3" type="number" placeholder="0" onChange={handleInputValue}/>
          </label>
          <div className="ticket-amount__block_description">Можно добавить еще 3 пассажиров
          </div>
        </div>

        <div className="ticket-amount__block">
          <label className="ticket-amount__input_label">
            <div className="ticket-amount__input_text">Детских — 
            </div>
            <input className="ticket-amount__input" name="child" min="0" max="3" type="number" placeholder="0" onChange={handleInputValue}/>
          </label>
          <div className="ticket-amount__block_description">Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%
          </div>
        </div>

        <div className="ticket-amount__block">
          <label className="ticket-amount__input_label">
            <div className="ticket-amount__input_text">Детских «без места» — 
            </div>
            <input className="ticket-amount__input" name="baby" min="0" max="0" type="number" placeholder="0" onChange={handleInputValue}/>
          </label>
          <div className="ticket-amount__block_description">
          </div>
        </div>
      </form>
    </div>
  );
}

export default SeatsTicketAmount;
