export let counter = 0;

export const setCounter = (count: number, element: Element) => {
  counter = count;
  element.innerHTML = `count is ${counter}`;
};

export function setupCounter(element: HTMLButtonElement) {
  element.addEventListener("click", () => setCounter(counter + 1, element));
  setCounter(0, element);
}

