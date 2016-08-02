import React, { Component } from 'react';

class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hoverStyle: {
        backgroundColor: 'lightblue'
      }
    }
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
    console.log(this.state.hover);
  }

  makeKeyStyle() {
    let style = {
      width: this.props.keyStyle.width,
      height: this.props.keyStyle.height
    }
    if (this.state.hover) {
      style.backgroundColor = this.props.keyStyle.hoverColor;
    } else {
      style.backgroundColor = this.props.keyStyle.backgroundColor;
    }
    return style;
  }

  render() {
    const finalStyle = this.makeKeyStyle();

    return (
      <div style={finalStyle}
           onClick={event => this.props.onClickHandler(this.props.value)}
           onMouseEnter={this.toggleHover}
           onMouseLeave={this.toggleHover} >{this.props.value}</div>
    );
  }
}

export default Key
