/**
 * Styles for new page button in the toolbar
 *
 * @param theme
 * @returns {Object}
 */

export default function getStyles(theme) {
  return {
    block: {
      width: '100%',
      height: theme.GRID.unit * 4,
      marginBottom: theme.GRID.unit * 2,
      fontWeight: 500,
      textAlign: 'center',
      fontSize: 16,
      display: 'block',
      color: theme.PALETTE.primary,
      borderBottom: '1px solid ' + theme.PALETTE.border
    },

    __hover: {
      backgroundColor: theme.PALETTE.accentHover
    }
  };
}