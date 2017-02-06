// Description:
//   Script for å summere to tall
//
// Commands:
//   hubot summer <tall1> + <tall2> - botten summerer tallene


module.exports = function (robot) {
  robot.respond(/summer ([0-9]+) \+ ([0-9]+)/, function (res) {

    const tall1 = parseInt(res.match[1]);
    const tall2 = parseInt(res.match[2]);

    res.reply(`Summen av ${tall1} + ${tall2} = ${tall1 + tall2}`);

  });
};
