import React, {PropTypes} from 'react';

class FileInput extends React.Component {
  static propTypes = {
    element: PropTypes.object
  };

  render() {
    let {element} = this.props;

    return (<div>
      <label>{element.title}</label>
      <input {...element.attributes}></input>
    </div>);

  }
}

export default FileInput;