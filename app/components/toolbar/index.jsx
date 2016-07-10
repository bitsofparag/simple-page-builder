import React, {PropTypes} from 'react';

import ToolbarButton from '../toolbar-button';

import element, {getElementTypes} from '../element-type';

import getStyles from './styles';

const toolbarButtons = (onClick) => {
  return getElementTypes().map(typeObj => {
    let type = Object.keys(typeObj)[0];
    let displayName = Object.values(typeObj)[0];

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
}

export default Toolbar;