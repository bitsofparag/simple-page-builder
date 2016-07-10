export default function getStyles(theme) {
  const unit = theme.GRID.unit;

  return {
    block: {
      width: '100%',
      marginLeft: unit * 2,
      display: 'flex',
      height: unit * 3,
      fontSize: unit * 2,
      textDecoration: 'none',
      textAlign: 'center',
      boxSizing: 'border-box',
      justifyContent: 'space-between'
    }
  };
}