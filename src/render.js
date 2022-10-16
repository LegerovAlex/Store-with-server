export function render(element, parentClassName) {
  const containerElement = document.querySelector(parentClassName);
  containerElement.append(element);
}
