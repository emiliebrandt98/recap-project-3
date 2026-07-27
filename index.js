const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// ------------- Fetch-Api (Rick and Morty Characters) -------------

const url = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}
/* fetchCharacters(); */

fetchCharacters().then((data) => {
    createCharacterCard(data.results[3]);
});
