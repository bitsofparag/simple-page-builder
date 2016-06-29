export default function getStyles(theme) {
  const unit = theme.GRID.unit;

  return {
    block: {
      width: unit * 6,
      height: unit * 6,
      marginBottom: unit,
      fontWeight: 800,
      fontSize: unit * 4,
      textDecoration: 'none',
      border: '0.5px solid ' + theme.PALETTE.primary,
      display: 'block',
      textAlign: 'center'
    }
  };
}