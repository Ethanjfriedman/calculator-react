import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <h1>React Calculator!</h1>
          <h3>By <a href="http://www.ethanjfriedman.com">Ethan Friedman</a></h3>
          <h5>Check out the <a>Github repo</a></h5>
      </header>
    );
  }
}

export default Header;
