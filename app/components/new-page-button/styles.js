export default function getStyles({theme, numOfPages}) {
  const GRID = theme.GRID;
  const unit = GRID.unit;
  const marginLeft = GRID.tab + (GRID.tabInactive * (numOfPages - 1));

  return {
    block: {
      width: unit * 4,
      height: unit * 4,
      backgroundColor: 'transparent',
      fontSize: unit * 3,
      padding: 0,
      marginLeft: marginLeft,
      alignSelf: 'flex-end'
    },

    block_active: {
      backgroundColor: 'transparent'
    }
  };
}