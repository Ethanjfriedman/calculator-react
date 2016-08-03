import React, { Component } from 'react';
import keys from '../utils/keys.js';
import Key from './Key.js';
import keyStyles from '../styles/keyStyles.js';
import keyboardStyles from '../styles/Keyboard.js';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numKeys: keys.numKeys,
      operatorKeys: keys.operatorKeys,
      enterKey: keys.enterKey
    };
  }

  mergeStyles(keyType) {
    return Object.assign(keyStyles[keyType], keyStyles.keys);
  }

  render() {
    const numStyles = this.mergeStyles('numKeys');
    const opStyles = this.mergeStyles('opKeys');
    const enterStyles = this.mergeStyles('enterKey');
    enterStyles.width = '20vw';
    
    const numKeys = this.state.numKeys.map(k =>
      <Key key={k.value}
           value={k.value}
           keyStyle={numStyles}
           onClickHandler={this.props.handleNumEntry} />);
    const opKeys = this.state.operatorKeys.map(k =>
      <Key key={k.value}
           value={k.value}
           keyStyle={opStyles}
           onClickHandler={this.props.handleOp} />);
    const enterKey = <Key key={this.state.enterKey.value}
                          value={this.state.enterKey.value}
                          keyStyle={enterStyles}
                          onClickHandler={this.props.handleCalculate}/>;

    return (
      <div className='keyboard' style={keyboardStyles.keyboard}>
        <div className='numkeys'
             style={keyboardStyles.keyboardSections}>{numKeys}</div>
        <div className='opKeys'
             style={keyboardStyles.keyboardSections}>{opKeys}</div>
        <div className='enterKey'>{enterKey}</div>
      </div>
    );
  }
};

Keyboard.propTypes = {
  handleNumEntry: React.PropTypes.func.isRequired,
  handleOp: React.PropTypes.func.isRequired,
  handleCalculate: React.PropTypes.func.isRequired
};

export default Keyboard;
