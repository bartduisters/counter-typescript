import { counter, setCounter } from "./counter.ts";

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
