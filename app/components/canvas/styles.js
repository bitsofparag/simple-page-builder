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

    __tab: {
      position: 'absolute',
      top: -(unit * 4),
      background: theme.PALETTE.primary,
      color: theme.PALETTE.accent,
      padding: unit,
      fontSize: 12,
      borderRadius: `${BORDER_RADIUS}px ${BORDER_RADIUS}px 0 0`
    }
  };
}