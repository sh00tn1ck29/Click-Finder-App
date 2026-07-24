import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { StatsPage } from './pages/StatsPage';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/stats" component={StatsPage} />
      </Switch>
    </Router>
  );
};

export default App;
