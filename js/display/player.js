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
    location.insertAdjacentElement("afterbegin",levelDiv);
}