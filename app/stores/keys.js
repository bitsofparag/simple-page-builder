/**
 * Keys store
 */

let elementIdCounter = 0;
let pageIdCounter = 0;

export function keys(type) {
  if (type === 'page') {
    return {
      currentOrder: pageIdCounter,
      currentId: `page${pageIdCounter}`
    }
  }

  if (type === 'element') {
    return {
      currentOrder: elementIdCounter,
      currentId: `element${elementIdCounter}`
    };
  }
}

export function generatePageId() {
  return `page${++pageIdCounter}`;
}

export function generateElementId() {
  return `element${++elementIdCounter}`;
}