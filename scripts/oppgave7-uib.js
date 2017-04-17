// Description:
//   Script for få middag for en gitt dag fra kantinene på UiB
//   Burde også si i fra hvis det ikke er noe mat i dag
//
// Commands:
//   hubot middag på <dag>

const request = require('request');
const moment = require('moment');
const xray = require('x-ray')();

const kantineURL = 'http://www.sib.no/no/mat-og-drikke/ukens-meny-varmmat';

module.exports = function (robot) {
  robot.respond(/middag (\w+)/, function (res) {
    const dag = res.match[1];
    //hent websiden med kantineinfoen
    request(kantineURL, function (error, response, htmlBody) {
      //vi bryr oss bare om htmlBody her

      
    });
  });
};

//Under finner du hjelpefunksjoner du kan bruke

// Funksjon for å hente ut kantinematteksten fra html-koden
function hentKantineMatenFraHTML(htmlBody) {
  return new Promise((resolve, reject) => {
    xray(kantineURL,
      '#parent-fieldname-text table tbody',
      xray('tr', ['td']))(function(err, tdarr){
        var filtered = tdarr.filter((item, index) => (index % 2 === 1));
        resolve(filtered);
      });
  });
}
