import React from 'react';
import OrderFilters from '../OrderFilters/OrderFilters';
import './OrderContainer.css';


function OrderContainer() {
  return (
    <div className='order-container'>
      <div className='container'>
        <div className='order-content'>
          <div className='order-sidebar'>
            <OrderFilters />
            <div>Last tickets</div>
          </div>
          <div>Search results</div>
        </div>
      </div>
    </div>
  );
}

export default OrderContainer;
