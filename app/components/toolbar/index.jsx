import React, {PropTypes} from 'react';
import ObjectValues from 'object.values';

import ToolbarButton from '../toolbar-button';

import {getElementTypes} from '../element-type';

import getStyles from './styles';

const toolbarButtons = (onClick) => {
  return getElementTypes().map(typeObj => {
    let type = Object.keys(typeObj)[0];
    let displayName = ObjectValues(typeObj)[0];

    return (<ToolbarButton
      key={type}
      displayName={displayName}
      onClick={onClick(type)}/>);
  });
};

const Toolbar = ({onClick}, {theme}) => {

  const styles = getStyles(theme);

  return (<div style={styles.block}>
    {toolbarButtons(onClick)}
  </div>);
};

Toolbar.contextTypes = {
  theme: PropTypes.object
};

export default Toolbar;