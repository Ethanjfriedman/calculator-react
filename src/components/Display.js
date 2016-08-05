import React from 'react';
import displayStyles from '../styles/Display.js';

const Display = props => {
  const numDisplay = props.num === null ? 0 : props.num;
  if (typeof numDisplay === 'string' && numDisplay.includes('Error')) {
    displayStyles.num.color = 'rgba(136, 61, 57, 1.0)';
  }
  return (
    <div style={displayStyles}>
      <h3 style={displayStyles.op}>{props.op}</h3>
      <h3 style={displayStyles.num}>{numDisplay}</h3>
    </div>
  );
}

Display.propTypes = {
    num: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
    op: React.PropTypes.string
};

Display.defaultProps = { num: 0, op: null };

export default Display
