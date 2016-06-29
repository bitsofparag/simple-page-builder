/**
 * Styles for export as YAML file button
 *
 * @param theme
 * @returns {Object}
 */

export default function getStyles(theme) {
  return {
    block: {
      width: 'auto',
      marginBottom: theme.GRID.unit * 2,
      fontWeight: 300,
      fontSize: 14,
      padding: theme.GRID.unit,
      color: theme.PALETTE.primary,
      backgroundColor: theme.PALETTE.accent,
      border: 0
    },

    __hover: {
      backgroundColor: theme.PALETTE.accentHover
    }
  };
}