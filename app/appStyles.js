
export default function getStyles() {
  const FULL_WIDTH = 80;
  const CONTENT_WIDTH = 70;

  return {
    block: {
      width: FULL_WIDTH + '%',
      margin: '0 auto'
    },

    __leftSidebar: {
      width: (FULL_WIDTH - CONTENT_WIDTH) + '%',
      borderRight: '0.5px solid'
    },

    __mainContent: {
      width: CONTENT_WIDTH + '%'
    }
  };
}