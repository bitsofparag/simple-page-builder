
const elementDefaults = {
  input: {
    type: 'input',
    title: '<strong>input label here</strong>',
    placeholder: ''
  },

  textarea: {
    type: 'textarea',
    title: '<strong>textarea label here</strong>',
    placeholder: ''
  },

  radio: {
    type: 'radio',
    title: '<strong>radio label here<span class="mandatory">*</span></strong>',
    values: ['Ja', 'Nein']
  },

  file: {
    type: 'file',
    title: '<strong>file input label here</strong>'
  },

  p: {
    type: 'p',
    title: 'paragraph content here'
  }
};

/**
 *
 * @param {String} tagName
 * @returns {Object}
 */
const element = (tagName) => {
  return elementDefaults[tagName];
};

export default element;