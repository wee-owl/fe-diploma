import React from 'react';
import OrderFilters from '../OrderFilters/OrderFilters';
import OrderLastTickets from '../OrderLastTickets/OrderLastTickets';
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
          <div>Search results</div>
        </div>
      </div>
    </div>
  );
}

export default OrderContainer;
