
export default function getStyles() {
  const FULL_WIDTH = 80;
  const CONTENT_WIDTH = 70;
  const PALETTE = {
    primary: 'rgb(76, 74, 72)',
    accent: 'rgb(210, 50, 50)'
  };

  const GRID = {
    unit: 8
  }

  return {
    block: {
      width: FULL_WIDTH + '%',
      margin: '0 auto',
      fontFamily: 'Helvetica Neue, Verdana, sans-serif',
      fontSize: 16
    },

    __header: {
      width: '100%',
      height: 44,
      display: 'flex',
      alignItems: 'center',
      marginBottom: GRID.unit * 2,
      justifyContent: 'center',
      fontWeight: 500
    },

    __leftSidebar: {
      width: (FULL_WIDTH - CONTENT_WIDTH) + '%',
      borderRight: '0.5px solid'
    },

    __mainContent: {
      width: CONTENT_WIDTH + '%'
    }
  };
}