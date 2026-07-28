import React from 'react';
import './index.scss';

const baseUrl = import.meta.env.BASE_URL;

const REASONS_DATA = [
  {
    id: 1,
    icon: `${baseUrl}images/cleanDesign.png`,
    title: 'Clean Design',
    description: 'We create intuitive and modern digital interfaces.',
  },
  {
    id: 2,
    icon: `${baseUrl}images/secureData.png`,
    title: 'Secure Data',
    description: 'Our products are easy to navigate and user friendly.',
  },
  {
    id: 3,
    icon: `${baseUrl}images/RetinaReady.png`,
    title: 'Retina Ready',
    description: 'Clean code built with modern web development tools.',
  },
];

export const Reasons = () => {
  return (
    <section className="reasons">
      <h2 className="reasons__question">
        Why <strong className="reasons__strong">ClickFinder?</strong>
      </h2>
      <p className="reasons__paragraph">
        Our design projects are fresh and simple and will benefit your business greatly. Learn more
        about our work!
      </p>

      <ul className="reasons__list">
        {REASONS_DATA.map(item => (
          <li key={item.id} className="reasons__item">
            <img className="reasons__icon" src={item.icon} alt={item.title} />
            <h3 className="reasons__title">{item.title}</h3>
            <p className="reasons__description">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
