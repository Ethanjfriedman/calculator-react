import React, { Component } from 'react';
import Display from '../components/Display.js';
import Keyboard from '../components/Keyboard.js'
import calcFxns from '../utils/calculatorFxns.js';
import calcStyles from '../styles/Calculator.js';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleNumEntry = this.handleNumEntry.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
    this.handleOther = this.handleOther.bind(this);
    this.state = {
      display: null,
      currNum: 0,
      float: false, // TODO add in support for floating point numbers
      priorNum: null,
      operation: null,
      base: 10          // TODO: add in support for non-base 10 arithmetic
    };
  }

  handleNumEntry(n) {
    const newNum = calcFxns.incrementByBase(this.state.currNum, n, this.state.base);
    this.setState({ currNum: newNum, display: newNum });
  }

  handleOther(key) {
    switch (key) {
      case '+/-':
        const n = this.state.currNum * -1;
        this.setState({currNum: n, display: n});
        break
      case 'C':
        this.setState({ display: null,
                        currNum: 0,
                        priorNum: null,
                        operation: null});
        break;
      case 'e':
        this.setState({display: Math.E, currNum: Math.E});
        break;
      case 'π':
        this.setState({display: Math.PI, currNum: Math.PI});
        break;
      case 'Rand':
        const r = Math.random();
        this.setState({display: r, currNum: r});
        break;
      default:
        console.error('Unrecognized key');
    }
  }

  handleOp(op) { // TODO refactor
    if (op === '+/-') {
      const n = this.state.currNum * -1;
      this.setState({currNum: n, display: n});
    } else if (op === 'C') {
      this.setState({ display: null, currNum: 0, priorNum: null, operation: null});
    } else if (op === 'e') {
      this.setState({display: Math.E, currNum: Math.E});
    } else if (op === 'π') {
      this.setState({display: Math.PI, currNum: Math.PI});
    } else if (op === 'Rand'){
      const r = Math.random();
      this.setState({display: r, currNum: r});
    } else if (!this.state.operation) {
      const temp = this.state.currNum;
      this.setState({ operation: op, priorNum: temp, currNum: 0 });
    }
  }

  handleCalculate() {
    if (this.state.operation) {
      const operation = calcFxns.setOperation(this.state.operation);
      this.setResult(operation(this.state.priorNum, this.state.currNum));
    }
  }

  setResult(result) {
    this.setState({
      display: result,
      operation: null,
      priorNum: result,
      currNum: 0
    });
  }

  render() {
    return (
      <div style={calcStyles}>
        <Display display={this.state.display} />
        <Keyboard handleNumEntry={this.handleNumEntry}
                  handleOp={this.handleOp}
                  handleOther={this.handleOther}
                  handleCalculate={this.handleCalculate} />
      </div>
    );
  }
};

export default Calculator
