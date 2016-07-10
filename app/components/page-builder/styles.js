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
      paddingTop: (theme.GRID.unit * 6) + 1,
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'flex-end',
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