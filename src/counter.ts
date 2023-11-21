export let counter = 0;

export const setCounter = (count: number, element: Element) => {
  counter = count;
  element.innerHTML = `count is ${counter}`;
};

