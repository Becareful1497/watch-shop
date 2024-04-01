import React from 'react';
import './App.css'; // Подключаем файл стилей
import Logg from './time-clock-logo-design-template_7492-353.avif'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logg} alt="Логотип" className="logo-img" />
          <h1 className="logo-text"> FAM SOLAR </h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакты 0555499222</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Все права защищены</p>
      </div>
    </footer>
  );
}

export default Footer;
