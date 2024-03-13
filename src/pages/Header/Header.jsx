import React from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderCustom from './HeaderCustom/HeaderCustom';
import HeaderProgressBar from './HeaderProgressBar/HeaderProgressBar';
import './Header.css';


function Header() {
  return (
    <header className='header'>
      <HeaderLogo />
      <HeaderNav />
      <HeaderCustom />
      <HeaderProgressBar />
    </header>
  );
}

export default Header;
