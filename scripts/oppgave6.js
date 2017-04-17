// Description:
//   Script for å telle antall dager siden SKAM sesong 4 startet 
//
// Commands:
//   hubot hvor mange dager er det siden skam startet - boten svarer med antall dager

// Hint 1: bruk moment-biblioteket her https://momentjs.com/. PS: Vi har importert det for deg på neste linje

const moment = require('moment');

module.exports = function (robot) {
  robot.respond(/hvor mange dager er det siden skam startet/, function (res) {
    const now = moment();
    const seasonStart = moment("2017-04-07");

    const diff = now.diff(seasonStart, "days");

    res.reply(`SKAM startet for ${diff} dager siden`);
  });
};
