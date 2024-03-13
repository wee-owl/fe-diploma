import React from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderCustom from './HeaderCustom/HeaderCustom';
import HeaderProgressBar from './HeaderProgressBar/HeaderProgressBar';
import './Header.css';


function Header() {
  return (
    <div className='header'>
      <HeaderLogo />
      <HeaderNav />
      <HeaderCustom />
      <HeaderProgressBar />
    </div>
  );
}

export default Header;
