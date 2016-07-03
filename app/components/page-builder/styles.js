export default function getStyles(theme) {

  return {
    block: {
      width: '100%'
    },

    __leftSidebar: {
      width: '25%',
      boxSizing: 'border-box',
      padding: theme.GRID.unit,
      paddingTop: theme.GRID.unit * 7,
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-start'
    },

    __mainContent: {
      width: '75%',
      boxSizing: 'border-box',
      padding: theme.GRID.unit,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }
  };
}