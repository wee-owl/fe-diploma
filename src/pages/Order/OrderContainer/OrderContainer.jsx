import React from 'react';
import OrderFilters from '../OrderFilters/OrderFilters';
import OrderLastTickets from '../OrderLastTickets/OrderLastTickets';
import OrderResultsControl from '../OrderResultsControl/OrderResultsControl';
import './OrderContainer.css';


function OrderContainer() {
  return (
    <div className='order-container'>
      <div className='container'>
        <div className='order-content'>
          <div className='order-sidebar'>
            <OrderFilters />
            <OrderLastTickets />
          </div>
          <div className='order-results'>
            <OrderResultsControl />
            <div className='order-results__wrapper'>order-results__wrapper</div>
            <div className='order-results__pagination'>order-results__pagination</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderContainer;
