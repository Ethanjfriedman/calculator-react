import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div><h3>{this.props.display}</h3></div>
    );
  }
}

Display.propTypes = { display: React.PropTypes.number };

export default Display
