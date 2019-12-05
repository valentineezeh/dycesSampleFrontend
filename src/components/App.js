/* eslint-disable react/jsx-fragments */
import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../template/css/App.css';
import LandingPage from './unauthenticated.components/LandingPage';

/**
 * @class App
 */
class App extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const history = createBrowserHistory();
    return (
      <>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
