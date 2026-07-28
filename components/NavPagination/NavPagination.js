export function NavPagination(textContent) {
  // create Elements
  const span = document.createElement("span");

  // Element content
  span.classList.add("navigation__pagination");
  span.textContent = textContent;

  return span;
}
