
const currentPage = ({pages, elements}, {params}) => {
  let page = pages.find(page => page.id == params.pageId);

  if (params.pageId === 'new') {
    page = pages[pages.length - 1];
  }

  if (page) {
    page.elements = page.elements.map(elemId => {
      return elements.find(element => element.id === elemId);
    });
  }

  return page;
};

export default currentPage;