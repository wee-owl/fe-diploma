import React from 'react';
import './OrderLine.css';


function OrderLine() {
  return (
    <div className='order-line line'>
      <div className='container'>
        <ol className='line__list line__list-bg'>
          <li className='line__item'>
            <p className='line__title'>
              <span className='line__num'>1</span>
              Билеты
            </p>
          </li>
          <li className='line__item'>
            <p className='line__title'>
              <span className='line__num'>2</span>
              Пассажиры
            </p>
          </li>
          <li className='line__item'>
            <p className='line__title'>
              <span className='line__num'>3</span>
              Оплата
            </p>
          </li>
          <li className='line__item'>
            <p className='line__title'>
              <span className='line__num'>4</span>
              Проверка
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default OrderLine;
