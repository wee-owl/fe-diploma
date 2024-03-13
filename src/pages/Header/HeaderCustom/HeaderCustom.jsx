import React from 'react';
import HeaderCustomTitle from './HeaderCustomTitle/HeaderCustomTitle';
import HeaderSearchWidget from './HeaderSearchWidget/HeaderSearchWidget';
import './HeaderCustom.css'


function HeaderCustom() {
  return (
    <div className='header-custom container'>
      <HeaderCustomTitle />
      <HeaderSearchWidget />
    </div>
  );
}

export default HeaderCustom;
