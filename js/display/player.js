import player from "../create/Player.js";

/**
 * 
 * @param {object} data the player data that a player class should be created from 
 * @param {object} location a html location where all the player information will be inserted to 
 * @example ```js
 * displayPlayer(playerData, htmlSection)
 * ```
 */
export default function displayPlayer(data, location){
    let resultPlayer = new player(data);
    let levelDiv = resultPlayer.createLevelDiv();
    let rankDiv = resultPlayer.createRankDiv();
    let selectedDiv = resultPlayer.createSelectedDiv();
    location.insertAdjacentElement("beforeend",levelDiv);
    location.insertAdjacentElement("beforeend", rankDiv);
    location.insertAdjacentElement("beforeend", selectedDiv);
}