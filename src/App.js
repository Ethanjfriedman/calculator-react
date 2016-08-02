import React, { Component } from 'react';
import './styles/App.css';
import Calculator from './Calculator.js';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>React Calculator!</h2>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
