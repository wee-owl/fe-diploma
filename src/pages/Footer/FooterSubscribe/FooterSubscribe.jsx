import React from 'react';
import { Link } from 'react-router-dom';
import { socials } from '#utils/socials';
import './FooterSubscribe.css';


function FooterSubscribe() {
  return (
    <div className='footer-subscribe subscribe'>
      <p className='subscribe__title'>Подписка</p>
      <p className='subscribe__subtitle'>Будьте в курсе событий</p>
      <div className='subscribe__form-wrapper'>
        <form className='subscribe__form'>
          <div className="subscribe__form-content">
            <input 
              type="email" 
              className="subscribe__input" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
              name="email" 
              placeholder="e-mail" 
              required 
            />
            <span className="subscribe__input-error">
              Введите e-mail в формате example@site.com
            </span>
            <button className="subscribe__button">Отправить</button>
          </div>
        </form>
      </div>
      <div className='subscribe__social'>
        <p className='subscribe__social-title'>Подписывайтесь на нас</p>
        <ul className='subscribe__social-list'>
        {socials.map((item, i) => {
          return (
            <li className='subscribe__social-item' key={i}>
              <Link to={item.href} target="_blank" className='subscribe__social-link'>
                <img src={item.src} alt={item.alt} className='subscribe__social-image'/>
              </Link>
            </li>
          )
        })}
        </ul>
      </div>
      Hello!
    </div>
  );
}

export default FooterSubscribe;
