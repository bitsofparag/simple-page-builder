import React, {PropTypes} from 'react';

// components
import Tab from './tab';
import enhanceWithTheme from './themes';
import widgets from '../widgets';

// get styling for Canvas
import getStyles from './styles';


/**
 *
 * @param page
 * @param theme
 * @param elements
 * @returns {XML}
 * @constructor
 */
let Canvas = ({page, theme, elements}) => {
  const styles = getStyles(theme);
  const hasElements = elements && elements.length > 0;
  let canvasContent = <p style={styles.__placeholder}>
    Select from toolbar to add content
  </p>;

  if (hasElements) {
    canvasContent = page.elements.map(function mapElements(elementId) {
      let element = elements.find(item => item.id === elementId);
      let Widget = enhanceWithTheme(widgets[element.type]);

      return <Widget key={elementId} element={element} />;
    });
  }

  return (<div style={styles.block}>
    <Tab title={page.title} styles={styles} />
    {canvasContent}
  </div>);
};

Canvas.propTypes = {
  page: PropTypes.object,
  elements: PropTypes.array,
  theme: PropTypes.object
};

export default Canvas;