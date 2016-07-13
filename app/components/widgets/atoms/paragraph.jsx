import React, {PropTypes} from 'react';

const defaultStyles = {};

const themedStyles = (theme) => {
  if (!theme) {
    return {};
  }

  return {
    block: {
      color: theme.PALETTE.primaryText,
      fontSize: theme.TYPOGRAPHY.paragraph,
      lineHeight: theme.LEADING.paragraph
    }
  };
};

/**
 *
 */
class Paragraph extends React.Component {
  static propTypes = {
    element: PropTypes.object.isRequired,
    theme: PropTypes.object
  };

  render() {
    let {element, theme} = this.props;
    let content = element.content || element.staticContent;
    let styles = Object.assign({}, defaultStyles, themedStyles(theme));
    console.log('in para', styles);

    return (<p style={styles.block}>{content}</p>);

  }
}

export default Paragraph;