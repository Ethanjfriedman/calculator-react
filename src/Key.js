import React, { Component } from 'react';

class Key extends Component {
  render() {
    return (
      <div onClick={event => this.props.onClickHandler(this.props.value)}>{this.props.value}</div>
    );
  }
}

export default Key
