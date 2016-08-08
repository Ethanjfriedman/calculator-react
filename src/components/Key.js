import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import CopyToClipboard from 'react-copy-to-clipboard';

class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      copied: false
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.onCopy = this.onCopy.bind(this);
  }

  onCopy() {
    this.setState({copied: true});
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
    const dataTip = this.props.tooltip || null;
    const tooltip = dataTip ? <ReactTooltip id={dataTip}
                                            place='right'
                                            type='dark'
                                            effect='float'
                                            multiline={true}>{this.props.tooltip}
                              </ReactTooltip>
                            : null;
    if (this.props.value === 'copy') {
      const copyText = this.props.copyText ? this.props.copyText.toString() : '';
      // FIXME -- SUBMIT PULL REQUEST TO react-copy-to-clipboard
      // to allow for number or string for copyText ....
      return (
        <div>
          <CopyToClipboard style={finalStyle}
                 data-for={dataTip}
                 data-tip={dataTip}
                 onCopy={this.onCopy}
                 text={copyText}
                 onClick={() => this.props.onClickHandler(this.props.value)}
                 onMouseEnter={this.toggleHover}
                 onMouseLeave={this.toggleHover} >
                 <span>{this.props.value}</span>
          </CopyToClipboard>
          {tooltip}
        </div>
      );
    } else {
      return (
        <div>
          <div style={finalStyle}
               data-for={dataTip}
               data-tip={dataTip}
               onClick={() => this.props.onClickHandler(this.props.value)}
               onMouseEnter={this.toggleHover}
               onMouseLeave={this.toggleHover} >
            <span>{this.props.value}</span>
          </div>
          {tooltip}
        </div>
      );
    }
  }
}

Key.PropTypes = {
  tooltip: React.PropTypes.string,
  onClickHandler: React.PropTypes.func.isRequired,
  keyStyle: React.PropTypes.object,
  copyText: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
};


export default Key
