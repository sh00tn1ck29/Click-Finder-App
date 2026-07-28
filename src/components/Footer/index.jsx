import React from 'react';
import './index.scss';

export const Footer = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <form className="footer__form" onSubmit={handleSubmit}>
        <input className="footer__input" type="email" placeholder="Your email address" required />
        <button className="footer__btn button" type="submit">
          Subscribe
        </button>
      </form>

      <div className="footer__bottom">
        <h2 className="footer__logo">ClickFinder</h2>
        <p className="footer__rights">All rights reserved by ThemeTags</p>
        <p className="footer__copyright">Copyrights © 2025</p>
      </div>
    </footer>
  );
};
