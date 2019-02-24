// Description:
//   Script for få dagens middag på diverse kantiner på UiB
//   Burde også si i fra hvis det ikke er noe mat i dag
//
// Commands:
//   hubot hva er dagens middag på <kantine>

const request = require('request');
const cheerio = require('cheerio');
const moment = require('moment');


const kantineURL = 'https://www.sammen.no/no/bergen/mat/';

module.exports = function (robot) {
  robot.respond(/hva er dagens middag på (\w+)/, function (res) {
    const kantine = res.match[1].toLowerCase();
    const url = kantineURL + kantine;

    //hent websiden med kantineinfoen
    request(url, function (error, response, htmlBody) {
      //vi bryr oss bare om htmlBody her

      //code here

    });
  });
};

//Under finner du hjelpefunksjoner du kan bruke


// Funksjon for å hente ut kantinematteksten fra html-koden
// Du trenger å sende inn dagens ukedag som et tall her
// Hint: Bruk moment for å finne ukedagen

function hentKantineMatenFraHTML(htmlBody, ukedag = 0) {

  const $ = cheerio.load(htmlBody); //hjelpebiblotek for å enklere lese html-siden
  const ukemeny = $('#weekmenu').text()
    .split(/Mandag|Tirsdag|Onsdag|Torsdag|Fredag/) // skiller dagene fra hverandre
    .filter(dag => dag); // fjerner tomme listeelementer

  const dagensMat = ukemeny[ukedag];
  return ryddOppKantineMatTeksten(dagensMat);
}

function ryddOppKantineMatTeksten(tekst) {
  //regex magi
  return tekst
    .replace(/ +(?= )/g, '') // fjerner doble mellomrom: "hei  du der"=> "hei du der"
    .replace(/^\s*[\r\n]/gm, "\n") // erstatter blanke linjer med rene linjeskift
    .replace(/^ +/gm, '').trim(); // fjerner whitespace fra starten av hver linje
}
