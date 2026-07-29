import { Link } from 'react-router-dom';
import './index.scss';

export const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__text">
          <p className="header__logo logo">ClickFinder</p>
          <h3 className="header__headline">
            <strong>Brainstorming</strong> for desired perfect Usability
          </h3>
          <p className="header__description">
            Our design projects are fresh and simple and will benefit your business greatly. Learn
            more about our work!
          </p>
          <Link className="header__btn button" to="/users/stats">
            Views Stats
          </Link>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}images/mobile.svg`}
          className="header__photo"
          alt="Mobile Preview"
        />
      </header>
    </div>
  );
};

export default Header;
