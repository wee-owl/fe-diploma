import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
