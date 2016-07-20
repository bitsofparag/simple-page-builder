import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

import getStyles from './styles';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {hovered: false};

    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  static propTypes = {
    href: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    activeStyle: PropTypes.object,
    icon: PropTypes.func,
    iconProps: PropTypes.object
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  onMouseOver() {
    this.setState({hovered: !this.state.hovered});
  }

  onMouseOut() {
    this.setState({hovered: !this.state.hovered});
  }

  render() {
    let {href, type, style, activeStyle, icon, onClick, iconProps} = this.props;
    let theme = this.context.theme;

    const styles = getStyles(type, {style, activeStyle, theme});

    let buttonStyles = styles.block;
    if (this.state.hovered) {
      buttonStyles = Object.assign({}, buttonStyles, styles.block_active);
    }

    return (<Link
      to={href || '#'}
      onClick={onClick}
      style={buttonStyles}
      onMouseOver={this.onMouseOver}
      onMouseOut={this.onMouseOut}>
      <icon />
      {this.props.children}
    </Link>);
  }
}


export default Button;