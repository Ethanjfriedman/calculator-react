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
      float: null, // TODO add in support for floating point numbers
      priorNum: null,
      operation: null,
      base: 10          // TODO: add in support for non-base 10 arithmetic
    };
  }

  handleNumEntry(n) {
    const num = calcFxns.incrementByBase(this.state.currNum, n, this.state.base);
    if (this.state.float === null) {
      this.setState({ currNum: num,
                      display: num });
    } else {
      this.setState({ currNum: num,
                      display: num / this.state.float });
    }
  }

  handleUpdateDisplay(n) {

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
                        float: null,
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
      case '.':
        if (!this.state.float) {
          let numStr = this.state.currNum.toString();
          const digits = numStr.length * this.state.base;
          this.setState({ float: digits, display: `${numStr}.` });
        }
      break;
      default:
        console.error('Unrecognized key');
    }
  }

  handleOp(op) {
    if (!this.state.operation) {
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
      float: null,
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
