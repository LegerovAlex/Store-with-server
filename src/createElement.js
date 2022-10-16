export function createElement(type, childs = [], cssClass = [], attrs = {}) {
  const element = document.createElement(type);
  element.classList.add(...cssClass);
  Object.keys(attrs).forEach((key) => {
    element.setAttribute(key, attrs[key]);
  });
  element.append(...childs);
  return element;
}
