import React from 'react';
import displayStyles from '../styles/Display.js';

const Display = props => {
  const display = props.display === null ? 0 : props.display;

  return (
    <div style={displayStyles}><h3 style={displayStyles.h3}>{display}</h3></div>
  );
}

Display.propTypes = { display: React.PropTypes.oneOfType(
                        [React.PropTypes.number, React.PropTypes.string])
                    };

Display.defaultProps = { display: 0 };

export default Display
