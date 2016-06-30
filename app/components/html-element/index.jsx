import React, {PropTypes} from 'react';

const HtmlElement = ({element}) => {

  return (<div>Dynamically inserted via props</div>);
};

HtmlElement.propTypes = {
  element: PropTypes.object
};

export default HtmlElement;