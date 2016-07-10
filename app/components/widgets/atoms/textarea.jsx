import React, {PropTypes} from 'react';

const Textarea = ({element}) => {
  let content = element.content || element.staticContent;

  return (<div>
    <label>{element.title}</label>
    <textarea {...element.attributes}>{content}</textarea>
  </div>);
};

Textarea.propTypes = {
  element: PropTypes.object
};

export default Textarea;