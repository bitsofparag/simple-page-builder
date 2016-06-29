export default function getStyles(theme) {
  return {
    block: {
      width: theme.GRID.unit * 10,
      height: theme.GRID.unit * 4,
      marginBottom: theme.GRID.unit * 2,
      fontWeight: 500,
      color: theme.PALETTE.primary,
      backgroundColor: theme.PALETTE.accent,
      border: 0
    },

    __hover: {
      backgroundColor: theme.PALETTE.accentHover
    }
  };
}