const { BOT_EMOJI, BOT_NAME, DONO_NAME, PREFIX } = require("../config");

function errorMessage(message) {
  return `${BOT_EMOJI} ❌ Erro! ${message}`;
}

function warningMessage(message) {
  return `${BOT_EMOJI} ⚠ Atenção! ${message}`;
}

function menuMessage() {
  const date = new Date();

  return `╔═════°࿊•°:❄️ - ❄️:°•࿊°═════╗ 
✯  ▀▄▀▄🄽🄰🅃🅂🅄 🄱🄾🅃▀▄▀▄  ✯
╚═════°࿊•°:❄️ - ❄️:°•࿊°═════╝

╭━━⪩ BEM VINDO! ⪨━━ 
 ▢ 
 ▢ • ${DONO_NAME}
 ▢ • ${BOT_NAME} 
 ▢ • Data: ${date.toLocaleDateString("pt-br")} 
 ▢ • Hora: ${date.toLocaleTimeString("pt-br")} 
 ▢ • Prefixo: ${PREFIX} 
 ▢ 
 ╰━━─「🥶」─━━ 
  
 ╭━━⪩ MENU ⪨━━ 
 ▢ 
 ▢ • ${PREFIX}tabela
 ▢ • ${PREFIX}brincadeira 
 ▢ • ${PREFIX}cep 
 ▢ • ${PREFIX}gpt 
 ▢ • ${PREFIX}ping 
 ▢ • ${PREFIX}sticker 
 ▢ • ${PREFIX}to-image 
 ▢ 
 ╰━━─「☃️」─━━`;
}

module.exports = {
  errorMessage,
  menuMessage,
  warningMessage,
};
