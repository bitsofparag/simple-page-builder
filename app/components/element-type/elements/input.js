const textInput = {
  type: 'text-input',
  displayName: 'Text Input',
  title: 'Text input label here',
  staticContent: '<strong>Label here</strong>',
  attributes: {
    placeholder: '',
    type: 'text'
  }
};

const fileInput = {
  type: 'file-input',
  displayName: 'File',
  title: 'File input label here',
  attributes: {
    placeholder: '',
    type: 'file'
  }
}

export default {
  textInput,
  fileInput
};