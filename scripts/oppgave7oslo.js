// Description:
//   Script for få dagens mat på diverse kantiner på UiO og HiOA
//   Burde også si i fra hvis det ikke er noe mat i dag
//
// Commands:
//   hubot hva er dagens mat på <kantine>

const request = require('request');
const cheerio = require('cheerio');

const kantineURL = 'https://www.sio.no/mat-og-drikke/_window/mat+og+drikke+-+dagens+middag?s=';

const kantiner = {
  'andrea spiseri': '285',
  'blindern vegetariske': '5269',
  'frederikke spiseri': '122',
  'kutt gourmet': '310',
  'ole-johan spiseri': '284'
}

module.exports = function (robot) {
  robot.respond(/hva er dagens mat på ([\w\s-]+)/, function (res) {
    // Finn ut hvilken kantine fra "kantiner" som brukeren vil vite om og lagre kantinenummeret i konstanten under
    const kantine = '';

    request(kantineURL + kantine, function (error, response, htmlBody) {
      // Vi bryr oss bare om htmlBody
    });
  });
};

//Under finner du hjelpefunksjoner du kan bruke

// Funksjon for å hente ut kantinematteksten fra html-koden
function hentKantineMatenFraHTML(htmlBody) {
  const $ = cheerio.load(htmlBody); //hjelpebiblotek for å enklere lese html-siden

  const mat = $('.inner-spisested'); // henter ut maten
  const dagensMat = $(mat).html();

  //kantinemat-teksten er ganske rotete, derfor må vi rydde den litt
  return ryddOppKantineMatTeksten(dagensMat);
}

function ryddOppKantineMatTeksten(tekst) {
  //regex magi
  return tekst
    .replace(/&#xe6;/ig, 'æ').replace(/&#xc6;/ig, 'Æ')
    .replace(/&#xF8;/ig, 'ø').replace(/&#xd8;/ig, 'Ø')
    .replace(/&#xe5;/ig, 'å').replace(/&#xc5;/ig, 'Å')
    .replace(/<h3>/g, '*').replace(/<\/h3>/g, '*\n')
    .replace(/<p><span>/g, '')
    .replace(/<\/span><\/p>$/, '')
    .replace(/<\/span><\/p>/g, '\n')
}
