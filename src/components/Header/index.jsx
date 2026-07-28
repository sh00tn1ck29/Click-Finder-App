import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__text">
          <h1 className="header__logo">ClickFinder</h1>
          <p className="header__headline">Brainstorming for desired perfect usability</p>
          <p className="header__description">
            Our design projects are fresh and simple and will benefit your business greatly. Learn
            more about our work!
          </p>

          <Link to="/stats" className="header__btn button">
            Learn more
          </Link>
        </div>
        <img
          className="header__photo"
          src={`${import.meta.env.BASE_URL}images/headerPhonePng.png`}
          alt="Header illustration"
        />
      </header>
    </div>
  );
};
