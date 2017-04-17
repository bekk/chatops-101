// Description:
//   Script for å finne ut hva man bør ha på seg i dag
//
// Commands:
//   hubot hva bør jeg ha på meg når jeg går ut

const request = require('request');
const xml2json = require('xml2json');
const bergenYrURL = 'http://www.yr.no/sted/Norge/Hordaland/Bergen/Bergen/varsel_time_for_time.xml';

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


