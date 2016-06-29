/**
 * Styles for page title in the canvas
 *
 * @param theme
 * @returns {Object}
 */

export default function getStyles(theme) {
  return {
    block: {
      width: '100%',
      height: 44,
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.GRID.unit * 2,
      justifyContent: 'center',
      fontWeight: 500,
      color: theme.PALETTE.primary
    }
  };
}