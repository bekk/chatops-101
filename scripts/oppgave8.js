// Description:
//   Script for å finne ut hva man bør ha på seg i dag ved å bruke YR sitt api
//
// Commands:
//   hubot hva bør jeg ha på meg når jeg går ut - botten svarer om du bør ha paraply eller ikke

// Hint 1
// YR har et api hvor du kan få værmeldingen i xml-format, her kan du lese mer om dette https://hjelp.yr.no/hc/no/articles/360009342833
// Vi skal bruke www.yr.no/sted/[lokasjon her]/varsel.xml

// Vi har importert noen javascript-biblioteker som kan være nyttige:
// - request (som du brukte i forrige oppgave)
// - xml2json som konverterer fra xml til json
const request = require('request');
const xml2json = require('xml2json');

// Kan være greit å finne frem til riktig url først
const bergenYrUrl = '';

module.exports = function (robot) {
  robot.respond(/hva bør jeg ha på meg når jeg går ut/, function (res) {
      // Hent ut nedbørsmengden (precipitation) i Bergen de neste timene og avgjør utifra det om botten skal anbefale paraply eller ikke
  });
};
