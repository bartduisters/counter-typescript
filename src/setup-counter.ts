import { counter, setCounter } from "./counter";

export function setupCounter(element: HTMLButtonElement) {
  element.addEventListener("click", () => setCounter(counter + 1, element));
  setCounter(0, element);
}
