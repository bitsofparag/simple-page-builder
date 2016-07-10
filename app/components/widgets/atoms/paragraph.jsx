import React, {PropTypes} from 'react';

class Paragraph extends React.Component {
  static propTypes = {
    element: PropTypes.object
  };

  render() {
    let {element} = this.props;
    let content = element.content || element.staticContent;

    return (<p>{content}</p>);

  }
}

export default Paragraph;