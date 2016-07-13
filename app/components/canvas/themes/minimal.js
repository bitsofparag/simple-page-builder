export default function getTheme() {
  const unit = 8;

  return {
    BODY: {
      block: {
        padding: unit * 2
      }
    },
    PALETTE: {
      primary: '#FFC107',
      primaryDark: '#FFA000',
      primaryLight: '#FFECB3',
      icons: '#212121',
      primaryText: '#212121',
      secondaryText: '#727272',
      accent: '#795548',
      divider: '#B6B6B6',
      light: 'rgb(235, 235, 235)'
    },
    TYPOGRAPHY: {
      paragraph: 14,
      header: 24,
      title: 20,
      subHeader: 16,
      caption: 12,
      button: 14
    },
    LEADING: {
      paragraph: '20px',
      subheader: '24px',
      headline: '32px',
      display1: '40px',
      display2: '48px'
    },
    GRID: {
      unit: unit
    }
  };
}