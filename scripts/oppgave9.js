// Description:
//   Script for å sjekke resultater fra Eliteserien 2017
//
// Commands:
//   hubot hvem leder eliteserien - boten svarer med navnet på laget som topper tabellen
//   hubot hvordan går det med <lag> - boten svarer med lagets tabellposisjon og antall poeng

const request = require('request');
const url = "https://api.vglive.no/v1/vg/tournaments/seasons/1439/standings/live";

module.exports = function (robot) {
  robot.respond(/hvem leder eliteserien/i, function (msg) {
    request(url, function (error, response, body) {
      // APIet svarer med JSON, som du må tolke til et javascript-objekt før du kan bruke det.
    });
  });

  robot.respond(/her må du skrive din egen regex/i, function (msg) {
    // Lag en regex som lar deg lese ut hvilket lag brukeren vil vite om.
    // Hva hvis de har skrevet navnet feil? Hva hvis de ikke har skrevet hele lagnavnet?
  })
}
