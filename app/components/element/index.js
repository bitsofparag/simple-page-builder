import objectValues from 'object.values';
import textarea from './textarea';
import inputs from './input';
import paragraph from './paragraph';

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
  return elementDefaults.map(element => element.type);
};