console.log("hello from script.js");
let cors = "https://noroffcors.herokuapp.com/";
let baseUrl = "https://api.mozambiquehe.re/bridge/";
async function fetchTest(player, platform) {
  let options = {
    method: "GET",
    headers: {
      Authorization: "ad085523a16414de43978ca12643317e",
    },
  };
  let result = await fetch(
    `${cors}${baseUrl}?player=${player}&platform=${platform}`,
    options
  ).then((response) => response.json());
  console.log(result);
}

function initialize(player, platform) {
  fetchTest(player, platform);
}

initialize("einar61", "PC");
