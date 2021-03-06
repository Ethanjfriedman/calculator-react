import React, { Component } from 'react';
import keys from '../utils/keys.js';
import Key from './Key.js';
import keyStyles from '../styles/keyStyles.js';
import keyboardStyles from '../styles/Keyboard.js';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numKeys: keys.filter(k => k.type === 'num'),
      operatorKeys: keys.filter(k => k.type === 'op'),
      otherKeys: keys.filter(k => k.type === 'other'),
      enterKey: keys.filter(k => k.type === 'enter')[0]
    };
  }

  mergeStyles(keyType, otherParamObj={}) {
    return Object.assign(keyStyles[keyType], keyStyles.keys, otherParamObj);
  }

  render() {
    const numStyles = this.mergeStyles('numKeys');
    const opStyles = this.mergeStyles('opKeys');
    const enterStyles = this.mergeStyles('enterKey', {width: '18vw'});
    const otherStyles = this.mergeStyles('otherKeys');

    const numKeys = this.state.numKeys.map(k =>
      <Key key={k.value}
           value={k.value}
           keyStyle={numStyles}
           onClickHandler={this.props.handleNumEntry} />
    );
    const opKeys = this.state.operatorKeys.map(k =>
      <Key key={k.value}
           value={k.value}
           tooltip={k.tooltip}
           keyStyle={opStyles}
           onClickHandler={this.props.handleOp} />
    );
    const otherKeys = this.state.otherKeys.map(k => {
      if (k.value === 'copy') {
        const copyText = this.props.copyText || null;
        return <Key key={k.value}
                    value={k.value}
                    tooltip={k.tooltip}
                    copyText={copyText}
                    keyStyle={otherStyles}
                    onClickHandler={this.props.handleOther} />
      } else {
        return <Key key={k.value}
                    value={k.value}
                    tooltip={k.tooltip}
                    keyStyle={otherStyles}
                    onClickHandler={this.props.handleOther} />
        }
    });

    const enterKey = <Key value={this.state.enterKey.value}
                          keyStyle={enterStyles}
                          onClickHandler={this.props.handleCalculate} />;
    return (
      <div className='keyboard' style={keyboardStyles.keyboard}>
        <div className='numkeys'
             style={keyboardStyles.keyboardSections}>{numKeys}</div>
        <div className='opKeys'
             style={keyboardStyles.keyboardSections}>{opKeys}</div>
        <div className='otherKeys'
             style={keyboardStyles.keyboardSections}>{otherKeys}</div>
        <div className='enterKey'>{enterKey}</div>
      </div>
    );
  }
};

Keyboard.propTypes = {
  handleNumEntry: React.PropTypes.func.isRequired,
  handleOp: React.PropTypes.func.isRequired,
  copyText: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  handleCalculate: React.PropTypes.func.isRequired
};

Keyboard.defaultProps = { copyText: 0 };

export default Keyboard;
