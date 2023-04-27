const path = require("path");

const PREFIX = "/";
const BOT_EMOJI = "👻";
const BOT_NAME = "JP Bot";
const DONO_NAME = "Ohjpedro"
const TEMP_FOLDER = path.resolve(__dirname, "..", "assets", "temp");

const OPENAI_API_KEY = "coloque_aqui_seu_token_da_openai";

module.exports = {
  BOT_EMOJI,
  BOT_NAME,
  DONO_NAME,
  PREFIX,
  TEMP_FOLDER,
  OPENAI_API_KEY,
};
