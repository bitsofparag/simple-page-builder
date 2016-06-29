
export default function getStyles(theme) {


  return {
    block: {
      width: '80%',
      margin: '0 auto',
      fontFamily: 'Helvetica Neue, Verdana, sans-serif',
      fontSize: 16,
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    },

    __leftSidebar: {
      width: '25%',
      boxSizing: 'border-box',
      padding: theme.GRID.unit
    },

    __mainContent: {
      width: '75%',
      boxSizing: 'border-box',
      padding: theme.GRID.unit
    }
  };
}