import { fetchCharacters } from "../..";

// ------------- Weiter-Button -------------
nextButton.addEventListener("click", (event) => {
  fetchCharacters();
});

// ------------- Zurueck-Button -------------
prevButton.addEventListener("click", (event) => {
  fetchCharacters();
});
