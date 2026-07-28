export function NavButton(textContent, onClick) {
  // create Elements
  const button = document.createElement("button");

  // Element content
  button.textContent = textContent;
  button.classList.add("button");

  // button-Event
  button.addEventListener("click", () => {
    onClick();
  });

  return button;
}
