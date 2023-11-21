let counter = 0;

const setCounter = (count: number, element: Element) => {
  counter = count;
  element.innerHTML = `count is ${counter}`;
};

export function setupCounter(element: HTMLButtonElement) {
  element.addEventListener("click", () => setCounter(counter + 1, element));
  setCounter(0, element);
}

export function setupDoubleCounter(
  element: HTMLButtonElement,
  countButton: HTMLButtonElement
) {
  element.innerHTML = "+2";
  element.addEventListener("click", () => {
    const newCount = counter + 2;
    setCounter(newCount, countButton);
  });
}
