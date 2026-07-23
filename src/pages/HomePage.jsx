import React from 'react';
import { Header } from '../components/Header';
import { Reasons } from '../components/Reasons';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Reasons />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
