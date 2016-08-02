import React, { Component } from 'react';
import '../styles/App.css';
import Calculator from './Calculator.js';
import Header from '../components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="app-header" />
        <Calculator />
      </div>
    );
  }
}

export default App;
