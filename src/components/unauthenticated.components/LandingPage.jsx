import React, { Component } from 'react';
import logo from '../../logo.svg';

/**
 * @class LandingPage
 */
class LandingPage extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Work in progress.
          </p>
          <a
            className="App-link"
          >
          Dyces
          </a>
        </header>
      </div>
    );
  }
}

export default LandingPage;
