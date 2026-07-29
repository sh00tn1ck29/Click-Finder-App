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
        <li className="reasons__item card">
          <img className="reasons__icon" src="public/images/cleanDesign.png" alt="Clean Design" />
          <h3 className="reasons__title">Clean Design</h3>
          <p className="reasons__description">
            Increase sales by showing true dynamics of your website.
          </p>
        </li>
        <li className="reasons__item card">
          <img className="reasons__icon" src="public/images/secureData.png" alt="Secure Data" />
          <h3 className="reasons__title">Secure Data</h3>
          <p className="reasons__description">
            Build your online store’s trust using Social Proof & Urgency.
          </p>
        </li>
        <li className="reasons__item card">
          <img className="reasons__icon" src="public/images/RetinaReady.png" alt="Retina Ready" />
          <h3 className="reasons__title">Retina Ready</h3>
          <p className="reasons__description">
            Realize importance of social proof in customer’s purchase decision.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Reasons;
