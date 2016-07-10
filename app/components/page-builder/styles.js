export default function getStyles(theme) {

  return {
    block: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap'
    },

    __toolbar: {
      width: '100%',
      boxSizing: 'border-box',

      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    },

    __mainContent: {
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'flex-end'
    }
  };
}