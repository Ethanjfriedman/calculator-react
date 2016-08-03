import React, { Component } from 'react';

class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  makeKeyStyle() {
    let style = {};
    Object.assign(style, this.props.keyStyle);
    if (this.state.hover) {
      style.backgroundColor = this.props.keyStyle.hoverColor;
      style.fontWeight = 'bold';
      style.color = 'white';
    } else {
      style.backgroundColor = this.props.keyStyle.backgroundColor;
      style.fontWeight = 'normal';
      style.color = 'black';
    }
    return style;
  }

  render() {
    const finalStyle = this.makeKeyStyle();

    return (
      <div style={finalStyle}
           onClick={event => this.props.onClickHandler(this.props.value)}
           onMouseEnter={this.toggleHover}
           onMouseLeave={this.toggleHover} ><span>{this.props.value}</span></div>
    );
  }
}

export default Key
