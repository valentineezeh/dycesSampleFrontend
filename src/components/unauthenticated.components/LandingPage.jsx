import React, { Component } from 'react';
import logo from '../../logo.svg';
import constructionImg from '../../template/utils/images/hammer.png';

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
          <img
            src={constructionImg}
            className="App-logo"
            style={{ height: '40vmin'}}
            alt="logo"

           />
          <p style={{ fontFamily: 'DM Sans' }}>
          Work in progress.
            <br />
            <strong
              style={{ fontSize: '20px' }}
            >
            It is almost ready... honest
            </strong>
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
