export const Footer = () => {
  return (
    <footer className="footer">
      <form className="footer__form" onSubmit={e => e.preventDefault()}>
        <input className="footer__input" name="email" type="email" placeholder="Enter your email" />
        <button className="footer__btn button" type="submit">
          Subscribe
        </button>
      </form>
      <section className="footer__bottom">
        <p className="footer__logo logo">ClickFinder</p>
        <p className="footer__rights">All rights reserved by ThemeTags</p>
        <p className="footer__copyright">Copyrights © 2025</p>
      </section>
    </footer>
  );
};

export default Footer;
