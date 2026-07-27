import { fetchCharacters } from "../..";

// ------------- Weiter-Button -------------
nextButton.addEventListener("click", (event) => {
  if (page) {
    let page = 1 + 1;
  } else {
  }
  fetchCharacters();
});

// ------------- Zurueck-Button -------------
prevButton.addEventListener("click", (event) => {
  fetchCharacters();
});
