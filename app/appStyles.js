
export default function getStyles(theme) {


  return {
    block: {
      width: theme.FULL_WIDTH + '%',
      margin: '0 auto',
      fontFamily: 'Helvetica Neue, Verdana, sans-serif',
      fontSize: 16
    },

    __leftSidebar: {
      width: (theme.FULL_WIDTH - theme.CONTENT_WIDTH) + '%',
      borderRight: '0.5px solid'
    },

    __mainContent: {
      width: theme.CONTENT_WIDTH + '%'
    }
  };
}