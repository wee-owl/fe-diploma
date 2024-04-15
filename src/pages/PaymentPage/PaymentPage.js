import React from "react";
import HeaderOrder from "../Header/HeaderOrder/HeaderOrder";
import OrderLine from "../Order/OrderLine/OrderLine";
import OrderDetails from "../Order/OrderDetails/OrderDetails";
import PaymentInfo from "./PaymentInfo/PaymentInfo";
import Footer from "../Footer/Footer";


function PaymentPage() {
  return (
    <>
      <HeaderOrder />
      <OrderLine />
      <div className="order-container">
        <div className="container">
          <div className="order-content">
            <div className="order-sidebar">
              <OrderDetails />
            </div>
            <PaymentInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;
