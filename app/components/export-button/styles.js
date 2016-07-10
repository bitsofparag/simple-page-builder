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
      fontWeight: 300,
      fontSize: 14,
      padding: theme.GRID.unit,
      color: theme.PALETTE.primary,
      backgroundColor: theme.PALETTE.accent,
      border: 0,
      alignSelf: 'flex-end',
      marginLeft: 'auto'
    }
  };
}