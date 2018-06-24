import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
}

const AppRouter = () => (
  <Router history={history}>
    <div style={styles}>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
