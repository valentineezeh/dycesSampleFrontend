import React, { Component } from 'react';
import logo from '../../logo.svg';
import constructionImg from '../../template/utils/images/hammer2.svg';


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
          <p style={{
            fontFamily: 'DM Sans',
            color: '#0271E3',
            fontSize: '50px',
            fontWeight: 'bold'
          }}
          >
          Page In Works
            {' '}
            {' '}
            <img
              src={constructionImg}
              style={{ height: '40px' }}
              alt="logo"
            />
          </p>
          <span style={{
            color: '#FF0000',
            fontSize: '30px',
            position: 'absolute',
            top: '525px',
          }}
          >
            Error 505
          </span>
        </header>
      </div>
    );
  }
}

export default LandingPage;
