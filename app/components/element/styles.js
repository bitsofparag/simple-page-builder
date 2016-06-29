export default function getStyles(theme) {
  const unit = theme.GRID.unit;

  return {
    block: {
      width: '100%',
      color: theme.PALETTE.primary,
      height: unit * 6,
      marginBottom: unit,
      fontWeight: 800,
      fontSize: unit * 2,
      textDecoration: 'none',
      borderBottom: '0.5px solid ' + theme.PALETTE.border,
      display: 'block',
      textAlign: 'center',
      boxSizing: 'border-box'
    }
  };
}