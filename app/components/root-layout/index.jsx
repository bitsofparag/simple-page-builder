import React, {Component, PropTypes} from 'react';

// style libs
import getStyles from './styles';
import theme from './theme';

const styles = getStyles(theme);

class RootLayout extends Component {
  static childContextTypes = {
    theme: PropTypes.object
  };

  getChildContext() {
    return { theme }
  }

  render() {
    return (<div style={styles.block}>
      {this.props.children}
    </div>);
  }

}

export default RootLayout;