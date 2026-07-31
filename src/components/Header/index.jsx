import './index.scss';

export const Header = ({ isStatsPage = false }) => {
  if (isStatsPage) {
    return (
      <header className="header header--bg">
        <div className="header__container">
          <div className="header__bottom">
            <div className="header__text header--size">ClickFinder</div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo logo">ClickFinder</p>
      </div>
    </header>
  );
};

export default Header;
