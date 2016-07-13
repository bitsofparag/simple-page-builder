import React, {PropTypes, Component} from 'react';

import getTheme from './minimal';

export default function enhanceWithTheme(WrappedComponent) {

  return class ThemeManager extends Component {
    static propTypes = {
      theme: PropTypes.object.isRequired
    };

    render() {
      const theme = getTheme();

      return <WrappedComponent {...this.props} theme={theme} />;
    }
  }
}