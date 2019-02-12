// Description:
//   Sript for å regne ut et parterapi par sitt felles forbruk
//
// Commands:
//   hubot summer forbruket <forbruk1> + <forbruk2> - botten summerer forbrukene


module.exports = function (robot) {
  robot.respond(/summer forbrbuket ([0-9]+) \+ ([0-9]+)/, function (res) {

    const forbruk1 = parseInt(res.match[1]);
    const forbruk2 = parseInt(res.match[2]);

    res.reply(`Totalforbruket av  ${forbruk1} + ${forbruk2} = ${forbruk1 + forbruk2}`);

  });
};
