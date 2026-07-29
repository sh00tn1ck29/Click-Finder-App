import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { StatsPage } from './components/StatsPage';

export const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users/stats" component={StatsPage} />
      </Switch>
    </Router>
  );
};

export default App;
