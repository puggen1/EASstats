import {getPlayer} from "./apiFunctions.js";
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
  console.log(playerStats);
  let {name = playerStats.global.name, lvl = playerStats.global.level, wins = playerStats.total.wins_season_12.value} = playerStats;
  console.log(playerSection)
  playerSection.innerHTML = `
    <h2>${name}</h2>
    <p>Level: ${lvl}</p>
    <p>Wins: ${wins}</p>`;
}
