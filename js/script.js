/**
 * @description the cors i have to use on localserver and base url for the api
 */
let cors = "https://noroffcors.herokuapp.com/";
let baseUrl = "https://api.mozambiquehe.re/";

/**
 * @description my auth token for project
 */
let authToken = "ad085523a16414de43978ca12643317e";
/**
 *
 * @param {string} type what type of information you want to get from the api
 * @param {string} player if you want information about player this will be username
 * @param {string} platform the platform you want stats from, ex: PC, X1
 * @param {string} legend if you want leaderboard this should be the legend you want it about
 * @example ```js
 * let response = await apiFetch("player", "einar61", "PC")
 * ```
 */
async function apiFetch(
  type = "player",
  player = "",
  platform = "",
  legend = ""
) {
  let urlTosend = cors + baseUrl;
  if (type === "player") {
    urlTosend += "bridge?" + `player=${player}&platform=${platform}`;
  } else if (type === "board") {
    urlTosend += "leaderboard?" + `legend=${legend}&platform=${platform}`;
  }
  let options = {
    method: "GET",
    headers: {
      Authorization: authToken,
    },
  };
  let result = await fetch(urlTosend, options).then((response) =>
    response.json()
  );
  return result;
}
/**
 *
 * @param {string} username the username of the player you want stats about
 * @param {string} platform the platform this playes plays on
 * @example ```js
 * let player = await getPlayer("einar61", "PC");
 * ```
 */
async function getPlayer(username, platform) {
  let player = await apiFetch("player", username, platform);
  console.log(player);
}

/**
 * @description does not yet work
 * @param {string} legend the legend you want a leaderboard about
 * @param {string} platform the platform the leaderboard should use information from
 * @example```js
 * let board = await getBoard("Wraith", "PC")
 * ```
 */
async function getBoard(legend, platform) {
  let board = await apiFetch("board", "", platform, legend);
  console.log(board);
}
