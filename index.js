import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

// ------------- Fetch-Api (Rick and Morty Characters) -------------

const url = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const response = await fetch(`${url}?page=${page}`);
  const data = await response.json();
  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${maxPage}`;
  data.results.forEach((characters) => {
    const card = createCharacterCard(characters);
    cardContainer.append(card);
  });
}

fetchCharacters();
