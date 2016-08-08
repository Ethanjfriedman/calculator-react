import React from 'react';
import displayStyles from '../styles/Display.js';

const Display = props => {
  const numDisplay = props.num === null ? 0 : props.num;
  // FIXME this next line is ugly. 
  const color = (typeof numDisplay === 'string' && numDisplay.includes('Error')) || props.copied ? { num: { color: 'rgba(136, 61, 57, 1.0)' } } : { num: { color: 'white' } };
  const display = Object.assign({}, displayStyles, color);

  return (
    <div style={display}>
      <h3 style={display.op}>{props.op}</h3>
      <h3 style={display.num}>{numDisplay}</h3>
    </div>
  );
}

Display.propTypes = {
    num: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    op: React.PropTypes.string,
    copied: React.PropTypes.bool
};

Display.defaultProps = { num: 0, op: null, copied: false };

export default Display
