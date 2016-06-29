export default function getStyles(theme) {
  return {
    block: {
      width: '100%',
      height: theme.GRID.unit * 4,
      marginBottom: theme.GRID.unit * 2,
      fontWeight: 500,
      textAlign: 'center',
      fontSize: 16,
      color: theme.PALETTE.primary,
      border: 0
    },

    __hover: {
      backgroundColor: theme.PALETTE.accentHover
    }
  };
}