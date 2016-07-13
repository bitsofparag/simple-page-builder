import React, {PropTypes, Component} from 'react';

import getTheme from './minimal';

export default function enhanceWithTheme(WrappedComponent) {

  return class ThemeManager extends Component {
    constructor(props) {
      super(props);

      this.state = {
        theme: getTheme()
      };
    }

    render() {
      const theme = this.state.theme;

      return <WrappedComponent {...this.props} theme={theme} />;
    }
  }
}