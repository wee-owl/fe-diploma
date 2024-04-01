import React from 'react';
import HeaderOrder from '../Header/HeaderOrder/HeaderOrder';
import Order from '../Order/Order';
import Footer from '../Footer/Footer';
import './OrderPage.css';


function OrderPage() {
  return (
    <>
      <HeaderOrder />
      <Order />
      <Footer />
    </>
  );
}

export default OrderPage;
