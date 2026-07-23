import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { StatsPage } from './pages/StatsPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/stats" component={StatsPage} />
      </Switch>
    </BrowserRouter>
  );
};
