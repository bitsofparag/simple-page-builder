export default function getStyles(theme) {
  const unit = theme.GRID.unit;

  return {
    block: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',

      width: '100%',
      height: unit * 3,
      fontSize: unit * 2,
      textDecoration: 'none',
      textAlign: 'center',
      boxSizing: 'border-box'
    }
  };
}