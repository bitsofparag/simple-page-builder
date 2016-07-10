export default function getStyles(theme) {
  const unit = theme.GRID.unit;

  const BORDER_RADIUS = unit / 2;

  return {
    block: {
      width: '100%',
      position: 'relative',
      boxSizing: 'border-box',
      height: unit * 100,
      border: '2px solid ' + theme.PALETTE.primary
    },

    __placeholder: {
      color: theme.PALETTE.gray,
      margin: '100px auto 0',
      textAlign: 'center'
    },

    __tab: {
      position: 'absolute',
      top: -(unit * 4),
      color: theme.PALETTE.light,
      fontSize: 12,
      width: theme.GRID.tab
    },

    __tabBox: {
      height: unit * 4,
      background: theme.PALETTE.primaryDark,
      borderRadius: `${BORDER_RADIUS}px ${BORDER_RADIUS}px 0 0`,
      marginLeft: 2,
      transform: 'perspective(100px) rotateX(30deg)'
    },

    __tabTitle: {
      position: 'absolute',
      width: theme.GRID.tab - unit,
      top: unit,
      left: unit
    }
  };
}