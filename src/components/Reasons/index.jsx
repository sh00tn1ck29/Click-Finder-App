import { reasonsConfig } from './configs/index.js';
import './index.scss';

export const Reasons = () => {
  return (
    <section className="reasons">
      <p className="reasons__question">
        Why <strong className="reasons__strong">small business owners love</strong> ClickFinder?
      </p>
      <p className="reasons__paragraph">
        Our design projects are fresh and simple and will benefit your business greatly. Learn more
        about our work!
      </p>

      <ul className="reasons__list">
        {reasonsConfig.map(({ id, icon, title, description }) => (
          <li key={id} className="reasons__item card">
            <img className="reasons__icon" src={`${import.meta.env.BASE_URL}${icon}`} alt={title} />
            <h3 className="reasons__title">{title}</h3>
            <p className="reasons__description">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reasons;
