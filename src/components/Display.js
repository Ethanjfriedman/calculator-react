import React from 'react';
import displayStyles from '../styles/Display.js';

const Display = props => {
  const numDisplay = props.num === null ? 0 : props.num;
  const display = Object.assign({}, displayStyles);
  if (typeof numDisplay === 'string' && numDisplay.includes('Error')) {
    display.num.color = 'rgba(136, 61, 57, 1.0)';
  }
  return (
    <div style={display}>
      <h3 style={display.op}>{props.op}</h3>
      <h3 style={display.num}>{numDisplay}</h3>
    </div>
  );
}

Display.propTypes = {
    num: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    op: React.PropTypes.string
};

Display.defaultProps = { num: 0, op: null };

export default Display
