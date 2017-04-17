// Description:
//   Script for å finne ut hva man bør ha på seg i dag ved å bruke YR sitt api
//
// Commands:
//   hubot hva bør jeg ha på meg når jeg går ut - botten svarer om du bør ha paraply eller ikke 

// Hint 1
// YR har et api hvor du kan få værmeldingen i xml-format, her kan du lese mer om dette http://om.yr.no/verdata/xml/
// Vi skal bruke www.yr.no/sted/[lokasjon her]/varsel.xml

// Vi har importert noen javascript-biblioteker som kan være nyttige:
// - request (som du brukte i forrige oppgave)
// - xml2json som konverterer fra xml til json
const request = require('request');
const xml2json = require('xml2json');

// Kan være greit å finne frem til riktig url først
const bergenYrURL = 'http://www.yr.no/sted/Norge/Hordaland/Bergen/Bergen/varsel.xml';

module.exports = function (robot) {
  robot.respond(/hva bør jeg ha på meg når jeg går ut/, function (res) {
    request(bergenYrURL, function (error, response) {
      const jsonRep = xml2json.toJson(response.body);
      const yrData = JSON.parse(jsonRep);
      const regnMengde = yrData.weatherdata.forecast.tabular.time[0].precipitation.value;
      if (regnMengde < 1) {
        res.reply("Endelig pent vær, legg paraplyen hjemme");
      } else if (regnMengde >= 1 && regnMengde < 3) {
        res.reply("Business as usual, ta med paraply");
      } else {
        res.reply("Himmelen har åpnet seg, ta frem allværsjakka og støvler")
      }
    });
  });
};
