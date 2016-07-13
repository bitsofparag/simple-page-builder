import React, {PropTypes} from 'react';

const defaultStyles = {};

const themedStyles = (theme) => {
  if (!theme) {
    return {};
  }

  return {
    block: {
      color: theme.PALETTE.primaryText,
      fontSize: theme.TYPOGRAPHY.header,
      lineHeight: theme.TYPOGRAPHY.lineHeight,
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  };
};

class FileInput extends React.Component {
  static propTypes = {
    element: PropTypes.object.isRequired,
    theme: PropTypes.object
  };

  render() {
    let {element, theme} = this.props;

    let styles = Object.assign({}, defaultStyles, themedStyles(theme));

    return (<div style={styles.block}>
      <label>{element.title}</label>
      <input {...element.attributes}></input>
    </div>);

  }
}

export default FileInput;