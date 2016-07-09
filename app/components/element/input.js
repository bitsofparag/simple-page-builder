const textInput = {
  type: 'text-input',
  displayName: 'Text Input',
  title: '<strong>Label here</strong>',
  attributes: {
    placeholder: '',
    type: 'text'
  }
};

const fileInput = {
  type: 'file-input',
  displayName: 'File',
  attributes: {
    placeholder: '',
    type: 'file'
  }
}

export default {
  textInput,
  fileInput
};