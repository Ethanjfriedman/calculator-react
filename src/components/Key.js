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
    const style = Object.assign({}, this.props.keyStyle.hoverShadow, this.props.keyStyle);
    if (this.state.hover) {
      style.backgroundColor = style.hoverColor;
      style.fontWeight = 'bold';
      style.color = 'white';
      style.fontSize = '1.5em';
      style.WebkitBoxShadow = style.hoverShadow.WebkitBoxShadow;
      style.MozBoxShadow = style.hoverShadow.WebkitBoxShadow;
      style.msBoxShadow = style.hoverShadow.WebkitBoxShadow;
      style.boxShadow = style.hoverShadow.WebkitBoxShadow;
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
           onClick={() => this.props.onClickHandler(this.props.value)}
           onMouseEnter={this.toggleHover}
           onMouseLeave={this.toggleHover} >
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Key
