import React from 'react';
import displayStyles from '../styles/Display.js';

const Display = props => {
  return (
    <div style={displayStyles}><h3 style={displayStyles.h3}>{props.display}</h3></div>
  );
}

Display.propTypes = { display: React.PropTypes.number };

export default Display
