import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Footer from './pages/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
