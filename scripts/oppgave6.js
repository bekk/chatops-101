// Description:
//   Script for å telle ned antall dager til SKAM sesong 4 start (ca 1.mai)
//
// Commands:
//   hubot hvor mange dager er det til skam starter - boten svarer med antall dager

const moment = require('moment');


module.exports = function (robot) {
  robot.respond(/hvor mange dager er det til skam starter/, function (res) {
    const now = moment();
    const seasonStart = moment("2017-05-01");

    const diff = seasonStart.diff(now, "days");

    res.reply(`SKAM starter om ${diff} dager`);
  });
};
