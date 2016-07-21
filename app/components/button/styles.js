/**
 * Styles for the button
 *
 * @returns {Object}
 */

export default function getStyles(type, {style, activeStyle, theme}) {

  let baseStyles = {
    primary: {
      textDecoration: 'none',
      padding: theme.GRID.unit * 2,
      boxSizing: 'border-box',
      backgroundColor: theme.PALETTE.accent,
      textAlign: 'center',
      color: theme.PALETTE.primary
    },

    primary_active: {
      backgroundColor: theme.PALETTE.accentHover
    },

    toolbar: {
      textDecoration: 'none'
    }
  };

  baseStyles.submit = baseStyles.primary;

  type = type || 'primary';

  let block = Object.assign({}, baseStyles[type], style);
  let block_active = Object.assign({}, baseStyles[type + '_active'], activeStyle);

  return {
    block,
    block_active
  }
}