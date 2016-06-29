export default function getStyles(theme) {
  const unit = theme.GRID.unit;

  return {
    block: {
      width: '100%',
      boxSizing: 'border-box',
      height: unit * 100,
      border: '1px dashed ' + theme.PALETTE.border
    }
  };
}