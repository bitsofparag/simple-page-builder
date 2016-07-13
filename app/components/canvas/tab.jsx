import React, {PropTypes} from 'react';

const Tab = ({page, styles}) => {

  return (<div style={styles.__tab}>
    <div style={styles.__tabBox}></div>
    <div style={styles.__tabTitle}>{page.title}</div>
  </div>);
};

Tab.propTypes = {
  page: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default Tab;