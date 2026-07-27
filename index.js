import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const pagination = document.querySelector('[data-js="pagination"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// ------------- Fetch-Api (Rick and Morty Characters) -------------

const url = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const response = await fetch(`${url}?page=${page}&name=${searchQuery}`);
  const data = await response.json();
  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;
  data.results.forEach((characters) => {
    const card = createCharacterCard(characters);
    cardContainer.append(card);
  });
}
fetchCharacters();

// ------------- Search-Element -------------
const searchElement = SearchBar((value) => {
  searchQuery = value;
  page = 1;
  fetchCharacters();
});
searchBarContainer.append(searchElement);

// ------------- Next-Button -------------
nextButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (page < maxPage) {
    page = page + 1;
  }
  fetchCharacters();
});

// ------------- Preview-Button -------------
prevButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (page > 1) {
    page = page - 1;
  }
  fetchCharacters();
});
