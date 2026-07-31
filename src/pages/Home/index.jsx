import Header from '@components/Header';
import Headline from '@components/Headline';
import Reasons from '@components/Reasons';
import Footer from '@components/Footer';
import './index.scss';

export const HomePage = () => {
  return (
    <>
      <div className="hero-wrapper">
        <Header />
        <Headline />
      </div>
      <Reasons />
      <Footer />
    </>
  );
};

export default HomePage;
