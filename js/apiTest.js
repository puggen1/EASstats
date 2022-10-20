require("dotenv/config");

function justForFun(key) {
  if (key === process.env.API_KEY) {
    console.log("det stemmer");
  }
}

justForFun("ad085523a16414de43978ca12643317e");
