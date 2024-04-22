import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppContext from "#context/appContext";
import RouteContext from "#context/routeContext";
import { initialAppState } from "#utils/initialAppState";
import { initialRouteState } from "#utils/initialRouteState";
import StartPage from "./pages/StartPage/StartPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import PassengersPage from "./pages/PassengersPage/PassengersPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage.js";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage";
import FinishPage from "./pages/FinishPage/FinishPage";
import "./App.css";


function App() {
  const [appState, setAppState] = useState(initialAppState);
  const [routeState, setRouteState] = useState(initialRouteState);


  return (
    <div className="app">
      <AppContext.Provider value={{appState, setAppState}}>
        <RouteContext.Provider value={{routeState, setRouteState}}>
          <Routes>
            <Route path="/fe-diploma" Component={StartPage} />
            <Route path="/fe-diploma/order" Component={OrderPage} />
            <Route path="/fe-diploma/order/seats" Component={SeatsPage} />
            <Route path="/fe-diploma/order/passengers" Component={PassengersPage} />
            <Route path="/fe-diploma/order/payment" Component={PaymentPage} />
            <Route path="/fe-diploma/order/confirm" Component={ConfirmPage} />
            <Route path="/fe-diploma/finish" Component={FinishPage} />
          </Routes>
        </RouteContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
