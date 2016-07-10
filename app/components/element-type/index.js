import objectValues from 'object.values';
import textarea from './elements/textarea';
import inputs from './elements/input';
import paragraph from './elements/paragraph';

const elementDefaults = [
  textarea,
  ...objectValues(inputs),
  paragraph
];

/**
 *
 * @param {String} type
 * @returns {Object}
 */
const element = (type) => {
  return elementDefaults.find(element => element.type === type);
};

export default element;

export const getElementTypes = () => {

  return elementDefaults.map(element => {
    let res = {};
    res[element.type] = element.displayName;
    return res;
  });
};