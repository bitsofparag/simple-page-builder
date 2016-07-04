import React, {PropTypes} from 'react';

const HtmlElement = ({element}) => {

  return (<div>{element.id}</div>);
};

HtmlElement.propTypes = {
  element: PropTypes.object
};

export default HtmlElement;