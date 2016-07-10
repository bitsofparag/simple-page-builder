/**
 * Styles for the welcome screen
 *
 * @returns {Object}
 */

export default function getStyles(theme) {
  const CONTENT_BOX = 400;

  return {
    block: {
      position: 'absolute',
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    },

    __wrapper: {
      position: 'absolute',
      top: 0,
      backgroundColor: theme.PALETTE.light,
      width: '100%',
      height: '100%',
      opacity: '0.95',
      border: '0.5px solid',
      borderColor: theme.PALETTE.border,
      backgroundRepeat: 'repeat',
      backgroundPosition: '0 0'
    },

    __content: {
      position: 'relative',
      top: theme.SCREEN_CENTER_Y - (CONTENT_BOX / 1.4),
      margin: 'auto',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      width: CONTENT_BOX,
      height: CONTENT_BOX,
      display: 'flex',
      flexDirection: 'column',
      boxSizing:'border-box',
      borderRadius: 2
    },

    __title: {
      color: theme.PALETTE.primary
    },

    __button: {
      width: '60%',
      marginTop: theme.GRID.unit * 2,
      fontWeight: 500
    }
  };
}