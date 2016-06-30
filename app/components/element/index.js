
const elementDefaults = [
  {
    type: 'input',
    title: '<strong>input label here</strong>',
    placeholder: ''
  },

  {
    type: 'textarea',
    title: '<strong>textarea label here</strong>',
    placeholder: ''
  },

  {
    type: 'radio',
    title: '<strong>radio label here<span class="mandatory">*</span></strong>',
    values: ['Ja', 'Nein']
  },

  {
    type: 'file',
    title: '<strong>file input label here</strong>'
  },

  {
    type: 'p',
    title: 'paragraph content here'
  }
];

/**
 *
 * @param {String} tagName
 * @returns {Object}
 */
const element = (tagName) => {
  return elementDefaults.find(element => element.type === tagName);
};

export default element;

export const getElementTypes = () => {
  return elementDefaults.map(element => element.type);
};