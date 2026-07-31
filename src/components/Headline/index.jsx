import { Link } from 'react-router-dom';
import './index.scss';

export const Headline = () => {
  return (
    <section className="headline">
      <div className="container">
        <div className="headline__content">
          <h2 className="headline__title">
            <b>Brainstorming</b> for desired perfect Usability
          </h2>
          <p className="headline__description">
            Our design projects are fresh and simple and will benefit your business greatly. Learn
            more about our work!
          </p>
          <Link className="headline__button button" to="/users/stats">
            Views Stats
          </Link>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}images/mobile.svg`}
          className="headline__decoration"
          alt="Mobile Preview"
        />
      </div>
    </section>
  );
};

export default Headline;
