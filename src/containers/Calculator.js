import React, { Component } from 'react';
import Display from '../components/Display.js';
import Keyboard from '../components/Keyboard.js'
import calcFxns from '../utils/calculatorFxns.js';
import calcStyles from '../styles/Calculator.js';

// TODO use React Immutability helpers for all state modifications

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.bind([
      'handleNumEntry',
      'handleOp',
      'handleCalculate',
      'handleOther'
    ]);
    this.state = {
      display: { num: null,
                 operation: null },
      memory: null, // TODO: implement memory
      currNum: 0,
      repeat: false, // TODO: implement repeating = operation
      float: null,
      priorNum: null,
      operation: null,
      base: 10          // TODO: add in support for non-base 10 arithmetic
    };
  }

  bind(methods) {
    methods.forEach(m => {
      this[m] = this[m].bind(this);
    });
  }

  handleNumEntry(n) {
    const num = calcFxns.incrementByBase(this.state.currNum, n, this.state.base);
    this.handleUpdateDisplay(num, this.state.float);
  }

  handleUpdateDisplay(n, float) {
    if (float === null) {
      this.setState({currNum: n, display: {num: n, operation: this.state.operation }});
    } else {
      this.setState({ currNum: n, display: {num: n / float, operation: this.state.operation }});
    }
  }

  handleOther(key) {
    switch (key) {
      case '+/-':
        const n = this.state.currNum * -1;
        this.setState({currNum: n, display:{num: n, operation: this.state.operation }});
        break
      case 'C':
        this.setState({ display: {num: null, operation: null},
                        currNum: 0,
                        priorNum: null,
                        repeat: false,
                        float: null,
                        operation: null});
        break;
      case '𝑒':
        this.setState({display: { num: Math.E, operation: this.state.operation },
                       currNum: Math.E});
        break;
      case 'π':
        this.setState({display: { num: Math.PI, operation: this.state.operation },
                      currNum: Math.PI});
        break;
      case 'Rand':
        const r = Math.random();
        this.setState({display: {num: r,operation: this.state.operation },
                       currNum: r});
        break;
      case '.':
        if (!this.state.float) { //this ugliness is to display the decimal point when it's pushed
          let numStr = this.state.currNum.toString();
          const digits = numStr.length * this.state.base;
          this.setState({ float: digits,
                          display: {
                            num: `${numStr}.`,
                            operation: this.state.operation }
                        });
        }
      break;
      default:
        console.error('Unrecognized key');
    }
  }

  handleOp(op) {
    if (!this.state.operation) {
      const temp = this.state.currNum;
      this.setState({operation: op,
                     priorNum: temp,
                     currNum: 0,
                     display: {num: this.state.currNum, operation: op}
                    });
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
      display: { num: result, operation: null },
      operation: null,
      float: null,
      priorNum: result,
      currNum: 0
    });
  }

  render() {
    return (
      <div style={calcStyles}>
        <Display num={this.state.display.num}
                 op={this.state.display.operation} />
        <Keyboard handleNumEntry={this.handleNumEntry}
                  handleOp={this.handleOp}
                  handleOther={this.handleOther}
                  handleCalculate={this.handleCalculate} />
      </div>
    );
  }
};

export default Calculator
