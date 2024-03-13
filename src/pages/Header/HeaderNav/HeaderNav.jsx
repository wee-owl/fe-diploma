import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.css';


function HeaderNav() {
  return (
    <div className='header-nav'>
      <div className='container'>
        <nav className='header-nav__nav nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link to="#" className='nav__link'>О нас</Link>
            </li>
            <li className='nav__item'>
              <Link to="#" className='nav__link'>Как это работает</Link>
            </li>
            <li className='nav__item'>
              <Link to="#" className='nav__link'>Отзывы</Link>
            </li>
            <li className='nav__item'>
              <Link to="#" className='nav__link'>Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNav;
