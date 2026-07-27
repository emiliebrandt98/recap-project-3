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
const maxPage = 1;
const page = 1;
let searchQuery = "";

// ------------- Fetch-Api (Rick and Morty Characters) -------------

const url = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters() {
    cardContainer.innerHTML = "";
    const response = await fetch(`${url}?name=${searchQuery}`);
    const data = await response.json();
    data.results.forEach((character) => {
        const card = createCharacterCard(character);
        cardContainer.append(card);
    });
}
fetchCharacters();

searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector(".search-bar__input");
    searchQuery = input.value;
    fetchCharacters();
});
