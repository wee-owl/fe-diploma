import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import PassengersPage from "./pages/PassengersPage/PassengersPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage.js";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";
import FinishPage from "./pages/FinishPage/FinishPage";
import "./App.css";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/fe-diploma" Component={StartPage} />
        <Route path="/fe-diploma/order" Component={OrderPage} />
        <Route path="/fe-diploma/order/seats" Component={SeatsPage} />
        <Route path="/fe-diploma/order/passengers" Component={PassengersPage} />
        <Route path="/fe-diploma/order/payment" Component={PaymentPage} />
        <Route path="/fe-diploma/order/confirm" Component={ConfirmPage} />
        <Route path="/fe-diploma/finish" Component={FinishPage} />
      </Routes>
    </div>
  );
}

export default App;
