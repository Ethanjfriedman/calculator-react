import React, { Component } from 'react';
import Display from './Display.js';
import Keyboard from './Keyboard.js'
import calcFxns from './calculatorFxns.js';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleNumEntry = this.handleNumEntry.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this)
    this.state = {
      display: null,
      currNum: 0,
      priorNum: null,
      operation: null,
      base: 10
    };
  }

  handleNumEntry(n) {
    const newNum = calcFxns.incrementByBase(this.state.currNum, n, this.state.base);
    this.setState({ currNum: newNum, display: newNum });
  }

  handleOp(op) {
    console.log(op);
    if (op === '+/-') {
      const n = this.state.currNum * -1;
      this.setState({currNum: n, display: n});
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
      <div>
        <Display display={this.state.display} />
        <Keyboard handleNumEntry={this.handleNumEntry}
                  handleOp={this.handleOp}
                  handleCalculate={this.handleCalculate} />
      </div>
    );
  }
};

export default Calculator
