let counter = 0;

export function setupCounter(element: HTMLButtonElement) {
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export function setupDoubleCounter(
  element: HTMLButtonElement,
  countButton: HTMLButtonElement
) {
  element.innerHTML = "+2";
  element.addEventListener("click", () => {
    counter = counter + 2;
    countButton.innerHTML = `count is ${counter}`;
  });
}
