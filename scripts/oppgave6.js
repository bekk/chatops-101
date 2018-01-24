// Description:
//   Script for å telle antall dager til sommerferien
//
// Commands:
//   hubot hvor mange dager er det igjen til sommerferien - boten svarer med antall dager

// Hint 1: bruk moment-biblioteket her https://momentjs.com/. PS: Vi har importert det for deg på neste linje

const moment = require('moment');

module.exports = function (robot) {
  robot.respond(/hvor mange dager er det igjen til sommerferien/, function (res) {
    const now = moment();
    const lastExamDate = moment("2018-06-01");

    const diff = lastExamDate.diff(now, "days");

    res.reply(`Det er bare ${diff} dager til sommerferien!`);
  });
};
