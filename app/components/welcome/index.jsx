import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import getStyles from './styles';

let Welcome = React.createClass({
  getInitialState() {
    return {
      hovered: false
    };
  },

  onMouseOver() {
    this.setState({hovered: !this.state.hovered});
  },

  onMouseOut() {
    this.setState({hovered: !this.state.hovered});
  },

  render() {
    const styles = getStyles(this.context.theme);

    let buttonStyles = styles.__button;
    if (this.state.hovered) {
      buttonStyles = Object.assign({}, buttonStyles, styles.__button_active);
    }

    return (<div style={styles.block}>
      <div style={styles.__content}>
        <h2 style={styles.__title}>Let's create a simple web page</h2>
        <Link to='pages/1' style={buttonStyles}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}>
          Get started
        </Link>
      </div>
      <div style={styles.__wrapper}></div>
    </div>);
  }
});


Welcome.contextTypes = {
  theme: PropTypes.object
};


export default Welcome;