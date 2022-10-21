import {getPlayer} from "./api/apiFunctions.js";
import displayPlayer from "./display/player.js";
let playerSection = document.querySelector("#playerSection");
let playerSearch = document.querySelector("#searchByPlayer");
playerSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  searchPlayer(event);
});

async function searchPlayer(event) {
  let form = event.target;
  let { username = form[0], platform = form[1] } = form;
  let playerStats = await getPlayer(username.value, platform.value);
  displayPlayer(playerStats, playerSection);
}
