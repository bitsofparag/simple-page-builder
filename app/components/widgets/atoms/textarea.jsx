import React, {PropTypes, Component} from 'react';

const defaultStyles = {};

const themedStyles = (theme) => {
  if (!theme) {
    return {};
  }

  return {
    block: {
      color: theme.PALETTE.primaryText,
      fontSize: theme.TYPOGRAPHY.header,
      lineHeight: theme.LEADING.headline,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginTop: theme.GRID.unit * 2
    },
    __label: {
      color: theme.PALETTE.primary
    },
    __input: {
      width: '80%',
      height: theme.GRID.unit * 10,
      fontSize: theme.TYPOGRAPHY.paragraph,
      padding: theme.GRID.unit,
      marginTop: theme.GRID.unit,
      border: '2px solid ' + theme.PALETTE.divider
    }
  };
};

class Textarea extends Component {
  static propTypes = {
    element: PropTypes.object.isRequired,
    theme: PropTypes.object
  };

  render() {
    let {element, theme} = this.props;
    let content = element.content || element.staticContent;
    let styles = Object.assign({}, defaultStyles, themedStyles(theme));

    return (<div style={styles.block}>
      <label style={styles.__label}>{element.title}</label>
      <textarea style={styles.__input} {...element.attributes}>{content}</textarea>
    </div>);
  }
}

export default Textarea;