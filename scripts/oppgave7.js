// Description:
//   Script for få dagens middag på diverse kantiner på NTNU
//   Burde også si i fra hvis det ikke er noe mat i dag
//
// Commands:
//   hubot hva er dagens middag på <kantine>

var request = require('request');
var cheerio = require('cheerio');
var moment = require('moment');


const kantineURL = 'https://www.sit.no/middag/';

module.exports = function (robot) {
    robot.respond(/hva er dagens middag på (\w+)/, function(res){
      var kantine = res.match[1];
      var url = kantineURL + kantine;

      //hent websiden med kantine infoen
      request(url, function(error, response, htmlBody){
        //vi bryr oss bare om htmlBody her

        //code here

      });
    })
}

//Under finner du hjelpefunksjoner du kan bruke


// Funksjon for å hente ut kantinemat teksten fra html koden
// Du trenger å sende inn dagens ukedag som et tall her
function hentKantineMatenFraHTML(htmlBody, ukedag = 0){
  $ = cheerio.load(htmlBody); //hjelpebiblotek for å enklere lese html siden

  var mat = $('.dishes__container .dishes__week .dishes__dishes'); // henter ut maten

  var dagensMat = $(mat.get(ukedag)).text();

  //kantine mat teksten er ganske rotete, derfor må vi rydde den litt
  var oppryddetDagensMat = ryddOppKantineMatTeksten(dagensMat);
  return oppryddetDagensMat
}

function ryddOppKantineMatTeksten(tekst){
  //regex magi
  var nyTekst = tekst
    .replace(/ +(?= )/g,'')
    .replace(/^\s*[\r\n]/gm, "\n")
    .replace(/^ +/gm, '').
    trim();
  return nyTekst;
}
