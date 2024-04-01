import React from 'react';
import { Routes, Route } from "react-router-dom";
import StartPage from './pages/StartPage/StartPage';
import OrderPage from './pages/OrderPage/OrderPage';
import FinishPage from './pages/FinishPage/FinishPage';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/fe-diploma' Component={StartPage} />
        <Route path='/fe-diploma/order' Component={OrderPage} />
        <Route path='/fe-diploma/finish' Component={FinishPage} />
      </Routes>
    </div>
  );
}

export default App;
