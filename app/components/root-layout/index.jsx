import React, {Component, PropTypes} from 'react';

// style libs
import getStyles from './styles';
import theme from './theme';

const styles = getStyles(theme);

class RootLayout extends Component {
  getChildContext() {
    return { theme }
  }

  render() {
    console.log('children', this.props.children)
    return (<div style={styles.block}>
      {this.props.children}
    </div>);
  }

}

// NOTE: not a recommended approach; only to be used for `theme`
RootLayout.childContextTypes = {
  theme: PropTypes.object
};

export default RootLayout;