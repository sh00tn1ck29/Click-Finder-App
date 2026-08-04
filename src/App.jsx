import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { StatsPage } from './pages/Stats';

export const App = () => {
  return (
    <Router basename={'/Click-Finder-App/'}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
