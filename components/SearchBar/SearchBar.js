export function SearchBar(onSubmit) {
  // create Elemenets
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const icon = document.createElement("img");

  // classList -> Elements
  form.classList.add("search-bar");

  input.classList.add("search-bar__input");
  input.placeholder = "search characters";
  input.setAttribute("aria-label", "character name");
  input.name = "query";

  icon.src = "assets/magnifying-glass.png";
  icon.alt = "";
  icon.classList.add("search-bar__icon");
  button.setAttribute("aria-label", "search for character");
  button.classList.add("search-bar__button");

  // place Elements
  form.append(input, button);
  button.append(icon);

  // search-Event
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    onSubmit(input.value);
  });

  return form;
}
