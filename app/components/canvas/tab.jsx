import React, {PropTypes} from 'react';

const Tab = ({title, styles}) => {

  return (<div style={styles.__tab}>
    <div style={styles.__tabBox}></div>
    <div style={styles.__tabTitle}>{title}</div>
  </div>);
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired
};

export default Tab;